'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
}
