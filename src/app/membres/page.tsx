'use client'

import { Avatar, Box, List, ListItem, ListItemText } from '@mui/material'
import { useState } from 'react'

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenu = (newMenuState: boolean) => {
    setMenuOpen(newMenuState)
  }

  return (
    <>
      <h1 className="text-2xl font-bold">Membres</h1>
      <Box>
        <List>
          <ListItem className="grid grid-cols-3">
            <Avatar sx={{ width: 100, height: 100 }} alt="Lorem Ipsum" src="/static/images/docsandwich.png" />
            <div>
              <p>Lorem Ipsum Idolore Pouet pouet</p>
              <p>Voici une description du channel?</p>
            </div>
          </ListItem>
        </List>
      </Box>
    </>
  )
}
