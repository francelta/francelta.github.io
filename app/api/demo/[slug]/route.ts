import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Para obtener __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DEMO_PROJECTS: Record<string, string> = {
  'prototipo-produccion-rapida': 'prototipo-produccion-rapida/demo.html',
  'desarrollo-contextualizado-estandarizado': 'desarrollo-contextualizado-estandarizado/demo.html',
  'orquestacion-auditoria-agentes': 'orquestacion-auditoria-agentes/demo.html',
  'desarrollo-tdd': 'desarrollo-tdd/demo.html',
  'gestion-requisitos-flujo-trabajo-mcp': 'gestion-requisitos-flujo-trabajo-mcp/demo.html',
  'investigacion-aprendizaje-acelerado-referencias': 'investigacion-aprendizaje-acelerado-referencias/demo.html',
  'dashboard-analitico-empresarial': 'dashboard-analitico-empresarial/demo.html',
  'workflow-automatizado-n8n': 'workflow-automatizado-n8n/demo.html',
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> | { slug: string } }
) {
  // Next.js 15+ usa Promise<params>, Next.js 14 usa params directo
  const resolvedParams = await Promise.resolve(params);
  const demoPath = DEMO_PROJECTS[resolvedParams.slug];

  if (!demoPath) {
    return new NextResponse(`Demo not found: ${resolvedParams.slug}`, { status: 404 });
  }

  try {
    // En Vercel, los archivos pueden estar en diferentes ubicaciones
    // Intentar múltiples rutas posibles
    const possiblePaths = [
      // Desarrollo local
      join(process.cwd(), 'public', 'demos', demoPath),
      // Vercel - ruta principal
      '/var/task/public/demos/' + demoPath,
      // Vercel - ruta alternativa (según el error)
      '/vercel/path0/public/demos/' + demoPath,
      // Vercel - otra posible ubicación
      join(process.cwd(), 'public', 'demos', demoPath),
      // Vercel - archivos copiados durante build
      join(process.cwd(), '.next', 'server', 'app', 'public', 'demos', demoPath),
      // Fallback: ruta relativa desde el archivo actual
      join(__dirname, '..', '..', '..', '..', 'public', 'demos', demoPath),
    ];

    let htmlContent: string | null = null;
    let lastError: Error | null = null;

    for (const filePath of possiblePaths) {
      try {
        if (existsSync(filePath)) {
          htmlContent = await readFile(filePath, 'utf-8');
          break;
        }
      } catch (err) {
        lastError = err instanceof Error ? err : new Error(String(err));
        continue;
      }
    }

    if (!htmlContent) {
      // Último recurso: intentar leer desde la URL pública
      // Pero primero, intentar con la ruta de Vercel que vimos en el error
      const vercelPaths = [
        '/vercel/path0/public/demos/' + demoPath,
        '/var/task/public/demos/' + demoPath,
      ];
      
      for (const vercelPath of vercelPaths) {
        try {
          if (existsSync(vercelPath)) {
            htmlContent = await readFile(vercelPath, 'utf-8');
            break;
          }
        } catch (err) {
          continue;
        }
      }
      
      // Si aún no funciona, intentar fetch desde URL pública
      if (!htmlContent) {
        const url = new URL(request.url);
        const baseUrl = `${url.protocol}//${url.host}`;
        const publicUrl = `${baseUrl}/demos/${demoPath}`;
        
        try {
          const response = await fetch(publicUrl, {
            headers: {
              'User-Agent': 'Next.js-Demo-API',
            },
          });
          
          if (response.ok) {
            htmlContent = await response.text();
          } else {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
          }
        } catch (fetchError) {
          throw new Error(`File not found. Tried paths: ${possiblePaths.join(', ')}. Vercel paths: ${vercelPaths.join(', ')}. Fetch error: ${fetchError instanceof Error ? fetchError.message : String(fetchError)}`);
        }
      }
    }

    // Obtener el directorio base del proyecto (ej: "prototipo-produccion-rapida")
    const projectDir = demoPath.split('/')[0];
    const basePath = `/demos/${projectDir}`;

    // Reemplazar rutas relativas por absolutas
    // href="style.css" -> href="/demos/proyecto/style.css"
    // src="script.js" -> src="/demos/proyecto/script.js"
    // src="./n8n.png" -> src="/demos/proyecto/n8n.png"
    htmlContent = htmlContent.replace(
      /(href|src)=(["'])([^"']+\.(css|js|png|jpg|jpeg|gif|svg|woff|woff2|ttf|json))\2/gi,
      (match, attr, quote, file) => {
        // Si ya es una ruta absoluta o URL externa, no cambiar
        if (file.startsWith('/') || file.startsWith('http://') || file.startsWith('https://') || file.startsWith('//')) {
          return match;
        }
        // Remover ./ si existe y convertir a absoluta
        const cleanFile = file.replace(/^\.\//, '');
        return `${attr}=${quote}${basePath}/${cleanFile}${quote}`;
      }
    );

    return new NextResponse(htmlContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error loading demo:', error);
    console.error('Slug:', resolvedParams.slug);
    console.error('Demo path:', demoPath);
    console.error('File path:', join(process.cwd(), 'public', 'demos', demoPath));
    return new NextResponse(`Demo not found: ${error instanceof Error ? error.message : 'Unknown error'}`, { status: 404 });
  }
}

