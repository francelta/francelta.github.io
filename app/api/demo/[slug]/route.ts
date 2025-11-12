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
  { params }: { params: { slug: string } }
) {
  const demoPath = DEMO_PROJECTS[params.slug];

  if (!demoPath) {
    return new NextResponse('Demo not found', { status: 404 });
  }

  try {
    const filePath = join(process.cwd(), 'public', 'demos', demoPath);
    const htmlContent = await readFile(filePath, 'utf-8');

    return new NextResponse(htmlContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error loading demo:', error);
    return new NextResponse('Demo not found', { status: 404 });
  }
}

