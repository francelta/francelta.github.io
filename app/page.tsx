import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fran Carrasco - Portafolio',
  description: 'Portafolio de desarrollo impulsado por IA',
};

/**
 * Root page - Redirects to default locale (Spanish) using meta refresh
 * Compatible with static export (output: 'export')
 */
export default function RootPage() {
  return (
    <html lang="es">
      <head>
        <meta httpEquiv="refresh" content="0; url=/es" />
      </head>
      <body className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-500 mx-auto mb-4"></div>
          <p className="text-neutral-400">Redirigiendo a /es...</p>
          <p className="text-neutral-500 text-sm mt-4">
            Si no eres redirigido automáticamente, <a href="/es" className="text-accent-500 hover:underline">haz clic aquí</a>.
          </p>
        </div>
      </body>
    </html>
  );
}

