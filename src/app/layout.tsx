import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Provider } from './providers/provider'

import '../styles/global.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tarefas',
  description: 'gerenciador de tarefas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body >
      <Provider>
        <Header/>
        {children}
      </Provider>
      </body>
    </html>
  )
}
