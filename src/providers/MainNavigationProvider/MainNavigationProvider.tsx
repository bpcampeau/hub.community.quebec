'use client'

import { MenuNavigation } from '@/components'
import { menuRoutes } from '@/definition'
import { Button, Drawer } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

export const MainMenuProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenu = (newMenuState: boolean) => {
    setMenuOpen(newMenuState)
  }

  return (
    <>
      <Drawer open={menuOpen} onClose={() => handleMenu(false)}>
        <MenuNavigation menuItems={menuRoutes} />
      </Drawer>
      <div>
        <Button onClick={() => handleMenu(true)}>
          <MenuIcon />
        </Button>
      </div>
      {children}
    </>
  )
}
