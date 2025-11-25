import Script from 'next/script'
import './globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ChatWidget from '../components/ChatWidget'

export const metadata = {
  title: 'Asesor Legal',
  description: 'Aplicación con Dialogflow Messenger',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head />
      <body className="flex flex-col min-h-screen bg-slate-50">

        {/* Dialogflow Messenger JS */}
        <Script
          src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"
          strategy="lazyOnload"
        />

        <NavBar />
        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>
        <ChatWidget />
        <Footer />
      </body>
    </html>
  )
}
