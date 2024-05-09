'use client'

import { useState } from 'react'

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenu = (newMenuState: boolean) => {
    setMenuOpen(newMenuState)
  }

  return <>Membres</>
}
