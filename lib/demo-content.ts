import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Para obtener __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
const allDemos: Record<string, string> = {};

// Leer cada demo individualmente con manejo de errores específico
allDemos['prototipo-produccion-rapida'] = readDemoFile('prototipo-produccion-rapida/demo.html');
allDemos['desarrollo-contextualizado-estandarizado'] = readDemoFile('desarrollo-contextualizado-estandarizado/demo.html');
allDemos['orquestacion-auditoria-agentes'] = readDemoFile('orquestacion-auditoria-agentes/demo.html');
allDemos['desarrollo-tdd'] = readDemoFile('desarrollo-tdd/demo.html');
allDemos['gestion-requisitos-flujo-trabajo-mcp'] = readDemoFile('gestion-requisitos-flujo-trabajo-mcp/demo.html');
allDemos['investigacion-aprendizaje-acelerado-referencias'] = readDemoFile('investigacion-aprendizaje-acelerado-referencias/demo.html');
allDemos['dashboard-analitico-empresarial'] = readDemoFile('dashboard-analitico-empresarial/demo.html');

// Leer workflow-automatizado-n8n con múltiples intentos
let workflowContent = readDemoFile('workflow-automatizado-n8n/demo.html');
if (!workflowContent || workflowContent.trim().length === 0) {
  console.warn('First attempt failed for workflow-automatizado-n8n, trying alternative methods...');
  
  // Intentar con ruta directa
  const directPath = join(process.cwd(), 'public', 'demos', 'workflow-automatizado-n8n', 'demo.html');
  try {
    workflowContent = readFileSync(directPath, 'utf-8');
    console.log('✓ Direct path read successful, length:', workflowContent.length);
  } catch (e) {
    console.error('Direct path also failed:', e);
    
    // Último intento: leer desde diferentes ubicaciones posibles
    const alternativePaths = [
      join(process.cwd(), 'public', 'demos', 'workflow-automatizado-n8n', 'demo.html'),
      join(__dirname, '..', 'public', 'demos', 'workflow-automatizado-n8n', 'demo.html'),
    ];
    
    for (const altPath of alternativePaths) {
      try {
        workflowContent = readFileSync(altPath, 'utf-8');
        if (workflowContent && workflowContent.trim().length > 0) {
          console.log('✓ Alternative path successful:', altPath);
          break;
        }
      } catch (altError) {
        continue;
      }
    }
  }
}

allDemos['workflow-automatizado-n8n'] = workflowContent || '';

// Log final para verificar
if (!allDemos['workflow-automatizado-n8n'] || allDemos['workflow-automatizado-n8n'].trim().length === 0) {
  console.error('❌ FINAL: workflow-automatizado-n8n is still empty after all attempts');
  console.error('Available keys:', Object.keys(allDemos).filter(k => allDemos[k] && allDemos[k].trim().length > 0));
} else {
  console.log('✓ workflow-automatizado-n8n loaded successfully, length:', allDemos['workflow-automatizado-n8n'].length);
}

export const DEMO_CONTENT: Record<string, string> = allDemos;

