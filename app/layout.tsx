import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import { cn } from '@/lib/utils'

import './globals.css'
import Providers from '@/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://keyur-sanghani.vercel.app'),
  title: {
    default: 'Keyur Sanghani - Backend Developer & Web Developer',
    template: '%s | Keyur Sanghani'
  },
  description:
    'Keyur Sanghani is a skilled Backend Developer specializing in PHP Laravel, Vue.js, and RESTful API development. Experienced in building scalable web applications, multi-tenant SaaS systems, and third-party integrations including Stripe, DocuSign, and more.',
  keywords: [
    'Keyur Sanghani',
    'Backend Developer',
    'PHP Laravel',
    'Vue.js',
    'Web Developer',
    'RESTful API',
    'MySQL',
    'PostgreSQL',
    'SaaS applications',
    'Third-party integrations',
    'Stripe integration',
    'DocuSign',
    'Vivansh Infotech'
  ],
  authors: [{ name: 'Keyur Sanghani' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://keyur-sanghani.vercel.app',
    siteName: 'Keyur Sanghani Portfolio',
    title: 'Keyur Sanghani - Backend Developer & Web Developer',
    description:
      'Keyur Sanghani is a skilled Backend Developer specializing in PHP Laravel, Vue.js, and RESTful API development. Experienced in building scalable web applications and SaaS systems.',
    images: [
      {
        url: '/images/authors/keyur-sanghani.jpg',
        width: 1200,
        height: 630,
        alt: 'Keyur Sanghani - Backend Developer Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keyur Sanghani - Backend Developer & Web Developer',
    description:
      'Keyur Sanghani is a skilled Backend Developer specializing in PHP Laravel, Vue.js, and RESTful API development. Experienced in building scalable web applications and SaaS systems.',
    images: ['/images/authors/keyur-sanghani.jpg']
  },
  alternates: {
    canonical: 'https://keyur-sanghani.vercel.app'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  category: 'Technology',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          inter.variable,
          playfair.variable
        )}
      >

        <Providers>
          <Header />
          <main className='grow'>
            {children}
            <Analytics />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
