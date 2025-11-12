import { readFileSync } from 'fs';
import { join } from 'path';

/**
 * Lee el contenido de los archivos demo.html durante el build
 * Esto asegura que el contenido esté disponible en runtime en Vercel
 */
function readDemoFile(projectPath: string): string {
  try {
    const filePath = join(process.cwd(), 'public', 'demos', projectPath);
    const content = readFileSync(filePath, 'utf-8');
    if (!content || content.trim().length === 0) {
      console.warn(`Warning: Demo file ${projectPath} is empty`);
      return '';
    }
    return content;
  } catch (error) {
    console.error(`Error reading demo file ${projectPath}:`, error);
    console.error(`File path attempted: ${join(process.cwd(), 'public', 'demos', projectPath)}`);
    return ''; // Devolver string vacío en lugar de lanzar error
  }
}

// Leer todos los archivos demo.html
const allDemos: Record<string, string> = {
  'prototipo-produccion-rapida': readDemoFile('prototipo-produccion-rapida/demo.html'),
  'desarrollo-contextualizado-estandarizado': readDemoFile('desarrollo-contextualizado-estandarizado/demo.html'),
  'orquestacion-auditoria-agentes': readDemoFile('orquestacion-auditoria-agentes/demo.html'),
  'desarrollo-tdd': readDemoFile('desarrollo-tdd/demo.html'),
  'gestion-requisitos-flujo-trabajo-mcp': readDemoFile('gestion-requisitos-flujo-trabajo-mcp/demo.html'),
  'investigacion-aprendizaje-acelerado-referencias': readDemoFile('investigacion-aprendizaje-acelerado-referencias/demo.html'),
  'dashboard-analitico-empresarial': readDemoFile('dashboard-analitico-empresarial/demo.html'),
  'workflow-automatizado-n8n': readDemoFile('workflow-automatizado-n8n/demo.html'),
};

// Validar que workflow-automatizado-n8n se leyó correctamente
if (!allDemos['workflow-automatizado-n8n'] || allDemos['workflow-automatizado-n8n'].trim().length === 0) {
  console.error('CRITICAL: workflow-automatizado-n8n/demo.html is empty or failed to read!');
  console.error('Attempted path:', join(process.cwd(), 'public', 'demos', 'workflow-automatizado-n8n/demo.html'));
  console.error('Current working directory:', process.cwd());
  // Intentar leer de nuevo con ruta absoluta
  try {
    const absolutePath = join(process.cwd(), 'public', 'demos', 'workflow-automatizado-n8n/demo.html');
    const retryContent = readFileSync(absolutePath, 'utf-8');
    if (retryContent && retryContent.trim().length > 0) {
      console.log('✓ Retry successful, content length:', retryContent.length);
      allDemos['workflow-automatizado-n8n'] = retryContent;
    }
  } catch (retryError) {
    console.error('Retry also failed:', retryError);
  }
}

export const DEMO_CONTENT: Record<string, string> = allDemos;

