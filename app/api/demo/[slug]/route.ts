import { NextRequest, NextResponse } from 'next/server';
import { DEMO_CONTENT } from '@/lib/demo-content';
import { readFileSync } from 'fs';
import { join } from 'path';
import { existsSync } from 'fs';

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
    // DEBUG: Log información del request
    console.log('=== DEMO API DEBUG START ===');
    console.log('Requested slug:', resolvedParams.slug);
    console.log('Demo path:', demoPath);
    console.log('All DEMO_CONTENT keys:', Object.keys(DEMO_CONTENT));
    console.log('DEMO_CONTENT keys with content:', Object.keys(DEMO_CONTENT).filter(k => DEMO_CONTENT[k] && DEMO_CONTENT[k].trim().length > 0));
    
    // Obtener el contenido del HTML desde el módulo que lo leyó durante el build
    let htmlContent = DEMO_CONTENT[resolvedParams.slug];
    
    console.log(`Content for ${resolvedParams.slug}:`, {
      exists: htmlContent !== undefined,
      isNull: htmlContent === null,
      isEmpty: htmlContent === '',
      length: htmlContent?.length || 0,
      trimmedLength: htmlContent?.trim().length || 0,
      firstChars: htmlContent?.substring(0, 50) || 'N/A'
    });

    // Si el contenido está vacío (puede pasar en Vercel si no se leyó durante build),
    // intentar leerlo directamente en runtime como fallback
    if (!htmlContent || htmlContent.trim().length === 0) {
      console.warn(`⚠️ Demo content empty for ${resolvedParams.slug}, attempting fallback methods...`);
      console.log('Current working directory:', process.cwd());
      
      // Intentar múltiples rutas de fallback
      const fallbackPaths = [
        join(process.cwd(), 'public', 'demos', demoPath),
        join(process.cwd(), 'demos', demoPath),
        '/var/task/public/demos/' + demoPath,
        '/vercel/path0/public/demos/' + demoPath,
      ];
      
      console.log('Trying fallback paths:', fallbackPaths);
      
      for (const fallbackPath of fallbackPaths) {
        console.log(`  Trying: ${fallbackPath}`);
        if (existsSync(fallbackPath)) {
          console.log(`  ✓ Path exists!`);
          try {
            htmlContent = readFileSync(fallbackPath, 'utf-8');
            console.log(`  ✓ Successfully read from filesystem, length: ${htmlContent.length}`);
            break;
          } catch (err) {
            console.error(`  ✗ Failed to read:`, err instanceof Error ? err.message : String(err));
          }
        } else {
          console.log(`  ✗ Path does not exist`);
        }
      }
      
      // Si aún está vacío, intentar fetch desde URL pública como último recurso
      if (!htmlContent || htmlContent.trim().length === 0) {
        console.warn('⚠️ All filesystem methods failed, trying fetch from public URL...');
        
        try {
          const url = new URL(request.url);
          const baseUrl = `${url.protocol}//${url.host}`;
          const publicUrl = `${baseUrl}/demos/${demoPath}`;
          
          console.log(`Attempting fetch from: ${publicUrl}`);
          const response = await fetch(publicUrl, {
            headers: {
              'User-Agent': 'Next.js-Demo-API-Internal',
            },
          });
          
          if (response.ok) {
            htmlContent = await response.text();
            console.log(`✓ Fetch successful, length: ${htmlContent.length}`);
          } else {
            console.error(`✗ Fetch failed: ${response.status} ${response.statusText}`);
          }
        } catch (fetchError) {
          console.error('✗ Fetch error:', fetchError instanceof Error ? fetchError.message : String(fetchError));
        }
      }
      
      // Si aún está vacío después de todos los intentos, lanzar error
      if (!htmlContent || htmlContent.trim().length === 0) {
        const availableSlugs = Object.keys(DEMO_CONTENT).filter(key => {
          const content = DEMO_CONTENT[key];
          const hasContent = content && content.trim().length > 0;
          console.log(`  Key "${key}": hasContent=${hasContent}, length=${content?.length || 0}`);
          return hasContent;
        });
        
        console.error('❌ FINAL ERROR: All methods failed');
        console.error('Available slugs with content:', availableSlugs);
        console.error('DEMO_CONTENT full state:', JSON.stringify({
          keys: Object.keys(DEMO_CONTENT),
          contentLengths: Object.fromEntries(
            Object.entries(DEMO_CONTENT).map(([k, v]) => [k, v?.length || 0])
          )
        }, null, 2));
        
        throw new Error(`Demo content not found or empty for slug: ${resolvedParams.slug}. Available slugs: ${availableSlugs.join(', ')}`);
      }
    } else {
      console.log(`✓ Content loaded from DEMO_CONTENT, length: ${htmlContent.length}`);
    }
    
    console.log('=== DEMO API DEBUG END ===');

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

