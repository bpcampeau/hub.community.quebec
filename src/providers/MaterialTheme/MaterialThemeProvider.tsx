'use client'

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

export const MaterialThemeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
