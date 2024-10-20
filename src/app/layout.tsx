import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import { addClasses } from './utils'
import Header from './components/Header'
import Footer from './components/Footer'
import { siteMetaData } from './utils/siteMetaData'

const inter = Inter({ subsets: ['latin'] , display: 'swap', variable: "--font-in"})
const manrope = Manrope({ subsets: ['latin'] , display: 'swap', variable: "--font-mr"})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetaData.siteUrl),
  title: {
    template: `%s | ${siteMetaData.title}`,
    default: siteMetaData.description,
  },
  openGraph: {
    title: siteMetaData.title,
    description: siteMetaData.description,
    url: siteMetaData.siteUrl,
    siteName: siteMetaData.title,
    // images: [siteMetaData.socialBanner],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={
        addClasses(
          inter.variable,
          manrope.variable,
          'font-mr bg-light dark:bg-dark'
        )}
        > 
          <Header />
          {children}
          <Footer/>
        </body>
    </html>
  )
}
