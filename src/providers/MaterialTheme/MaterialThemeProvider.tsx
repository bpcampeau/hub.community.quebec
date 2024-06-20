'use client'

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { indigo } from '@mui/material/colors'

export const MaterialThemeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#5b21b6',
      },
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
