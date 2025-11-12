import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fran Carrasco - Portafolio',
  description: 'Portafolio de desarrollo impulsado por IA',
};

/**
 * Root Layout - Only used for the redirect page at "/"
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

