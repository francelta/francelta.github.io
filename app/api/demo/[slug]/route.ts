import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

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
    // Intentar múltiples rutas posibles (local y Vercel)
    const possiblePaths = [
      join(process.cwd(), 'public', 'demos', demoPath),
      join(process.cwd(), 'demos', demoPath),
      join(process.cwd(), 'out', 'demos', demoPath),
    ];

    let htmlContent: string | null = null;
    let lastError: Error | null = null;

    for (const filePath of possiblePaths) {
      try {
        htmlContent = await readFile(filePath, 'utf-8');
        break; // Si funciona, salir del loop
      } catch (err) {
        lastError = err instanceof Error ? err : new Error(String(err));
        continue; // Intentar siguiente ruta
      }
    }

    if (!htmlContent) {
      throw lastError || new Error(`File not found in any of: ${possiblePaths.join(', ')}`);
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

