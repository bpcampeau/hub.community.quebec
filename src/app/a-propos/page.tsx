'use client'

import { MenuNavigation } from '@/components'
import { menuRoutes } from '@/definition'
import { Button, Drawer } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenu = (newMenuState: boolean) => {
    setMenuOpen(newMenuState)
  }

  return (
    <>
      <Drawer open={menuOpen} onClose={() => handleMenu(false)}>
        <MenuNavigation menuItems={menuRoutes} />
      </Drawer>
      <div id="contenu" className="container mx-auto">
        <div>
          <Button onClick={() => handleMenu(true)}>
            <MenuIcon />
          </Button>
        </div>
        À propos
      </div>
    </>
  )
}
