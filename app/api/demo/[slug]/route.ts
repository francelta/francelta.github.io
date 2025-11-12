import { NextRequest, NextResponse } from 'next/server';
import { DEMO_CONTENT } from '@/lib/demo-content';

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
    // Obtener el contenido del HTML desde el módulo que lo leyó durante el build
    let htmlContent = DEMO_CONTENT[resolvedParams.slug];

    if (!htmlContent) {
      throw new Error(`Demo content not found for slug: ${resolvedParams.slug}`);
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
    return new NextResponse(`Demo not found: ${error instanceof Error ? error.message : 'Unknown error'}`, { status: 404 });
  }
}

