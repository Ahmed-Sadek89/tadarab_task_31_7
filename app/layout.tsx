import type React from 'react'
import type { Metadata } from 'next'
import { Almarai } from 'next/font/google'
import 'swiper/css'
import './globals.css'
const almarai = Almarai({
  variable: '--font-almarai',
  subsets: ['arabic'],
  weight: ['300', '400', '700', '800']
})

export const metadata: Metadata = {
  title: {
    default: 'Tadarab',
    template: 'Tadarab | %s'
  },
  description: 'ماذا تريد ان تتعلم اليوم',

  icons: '/logo.svg'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ar'>
      <body dir='rtl' className={`${almarai.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
