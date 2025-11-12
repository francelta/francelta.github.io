import { notFound } from 'next/navigation';

const DEMO_PROJECTS = {
  'prototipo-produccion-rapida': '/demos/prototipo-produccion-rapida/demo.html',
  'desarrollo-contextualizado-estandarizado': '/demos/desarrollo-contextualizado-estandarizado/demo.html',
  'orquestacion-auditoria-agentes': '/demos/orquestacion-auditoria-agentes/demo.html',
  'desarrollo-tdd': '/demos/desarrollo-tdd/demo.html',
  'gestion-requisitos-flujo-trabajo-mcp': '/demos/gestion-requisitos-flujo-trabajo-mcp/demo.html',
  'investigacion-aprendizaje-acelerado-referencias': '/demos/investigacion-aprendizaje-acelerado-referencias/demo.html',
  'dashboard-analitico-empresarial': '/demos/dashboard-analitico-empresarial/demo.html',
  'workflow-automatizado-n8n': '/demos/workflow-automatizado-n8n/demo.html',
} as const;

type DemoSlug = keyof typeof DEMO_PROJECTS;

export default function DemoPage({ params }: { params: { slug: string } }) {
  const demoPath = DEMO_PROJECTS[params.slug as DemoSlug];

  if (!demoPath) {
    notFound();
  }

  return (
    <div className="fixed inset-0 bg-zinc-950">
      <iframe
        src={demoPath}
        className="w-full h-full border-0"
        title={`Demo: ${params.slug}`}
        sandbox="allow-scripts allow-same-origin allow-forms"
      />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(DEMO_PROJECTS).map((slug) => ({
    slug,
  }));
}

