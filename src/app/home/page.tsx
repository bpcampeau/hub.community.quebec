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
        <Button onClick={() => handleMenu(true)}>
          <MenuIcon />
        </Button>
        <div className="grid grid-cols-12 gap-4">
          <div className="border border-solid border-red-700 col-span-9">Hello</div>
          <div className="border border-solid border-blue-700 col-span-3">World</div>
        </div>
      </div>
    </>
  )
}
