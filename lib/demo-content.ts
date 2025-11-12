import { readFileSync } from 'fs';
import { join } from 'path';

/**
 * Lee el contenido de los archivos demo.html durante el build
 * Esto asegura que el contenido esté disponible en runtime en Vercel
 */
function readDemoFile(projectPath: string): string {
  try {
    const filePath = join(process.cwd(), 'public', 'demos', projectPath);
    return readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.error(`Error reading demo file ${projectPath}:`, error);
    return '';
  }
}

export const DEMO_CONTENT: Record<string, string> = {
  'prototipo-produccion-rapida': readDemoFile('prototipo-produccion-rapida/demo.html'),
  'desarrollo-contextualizado-estandarizado': readDemoFile('desarrollo-contextualizado-estandarizado/demo.html'),
  'orquestacion-auditoria-agentes': readDemoFile('orquestacion-auditoria-agentes/demo.html'),
  'desarrollo-tdd': readDemoFile('desarrollo-tdd/demo.html'),
  'gestion-requisitos-flujo-trabajo-mcp': readDemoFile('gestion-requisitos-flujo-trabajo-mcp/demo.html'),
  'investigacion-aprendizaje-acelerado-referencias': readDemoFile('investigacion-aprendizaje-acelerado-referencias/demo.html'),
  'dashboard-analitico-empresarial': readDemoFile('dashboard-analitico-empresarial/demo.html'),
  'workflow-automatizado-n8n': readDemoFile('workflow-automatizado-n8n/demo.html'),
};

