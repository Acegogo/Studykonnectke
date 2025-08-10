import '../styles/globals.css'
import { Inter, Poppins } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>StudyKonnect Kenya - Your Bridge to Global Education</title>
        <meta name="description" content="StudyKonnect Kenya helps students study abroad with no IELTS, gap acceptance, and 100% visa success. Explore destinations in Europe, America, and Asia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.variable} ${poppins.variable} font-inter`}>
        <Component {...pageProps} />
      </main>
    </>
  )
} 