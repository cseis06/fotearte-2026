import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Notification from "@/components/layout/Notification";

import { Icon } from '@iconify/react'

import { metadata as siteMetadata, viewport as siteViewport, jsonLd, siteConfig } from './metadata'
import Link from 'next/link';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = siteMetadata
export const viewport: Viewport = siteViewport

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${poppins.variable} overflow-x-hidden`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body 
        className="font-poppins antialiased bg-neutral-950 text-white overflow-x-hidden"
        suppressHydrationWarning
      >
        <Header />
        {children}
        <div className='fixed bottom-5 right-5 z-20 w-16 h-16 rounded-full bg-green-500'>
          <Link
                href="https://wa.me/595973497799?text=Hola! Me comunico desde la web de fotearte"
                target="_blank" className='w-full h-full flex justify-center items-center'>
            <Icon icon="mdi:whatsapp" className="w-8 h-8" /> 
          </Link>
        </div>
        <Footer />

        <Notification />
      </body>
    </html>
  )
}