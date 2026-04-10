import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'FlexNet Telecom | Internet Fibra Óptica de Alta Velocidade',
  description: 'Internet fibra óptica de alta velocidade para sua casa ou empresa. Planos a partir de 200MB. Atendimento 24h em São Carlos, Ibaté e Araraquara.',
  keywords: ['internet fibra', 'fibra óptica', 'provedor internet', 'São Carlos', 'Ibaté', 'Araraquara', 'FlexNet'],
  authors: [{ name: 'FlexNet Telecom' }],
  openGraph: {
    title: 'FlexNet Telecom | Internet Fibra Óptica',
    description: 'Internet fibra óptica de alta velocidade para sua casa ou empresa.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0e1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
