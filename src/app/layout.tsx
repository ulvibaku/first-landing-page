import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ulvi Quliyev | Webentwicklung Backnang & Stuttgart',
  description: 'Websites, WordPress, Automatisierung und digitale Lösungen für kleine und mittelständische Unternehmen in Backnang, Stuttgart und Baden-Württemberg.',
  openGraph: {
    title: 'Ulvi Quliyev | Webentwicklung Backnang & Stuttgart',
    description: 'Moderne Websites und digitale Lösungen für lokale Unternehmen in der Region Stuttgart und Baden-Württemberg.',
    url: 'https://ulviquliyev.de',
    siteName: 'Ulvi Quliyev',
    locale: 'de_DE',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
