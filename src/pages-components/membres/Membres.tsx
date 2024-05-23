'use Client'

import { getTeam } from '@/services'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'

export const Membres = async () => {
  const [members, setMembers] = useState({})

  useEffect(() => {
    getTeam('teamqc')
  })

  return (
    <>
      <h1 className="text-2xl font-bold">Membres</h1>
      <Box>Hello</Box>
    </>
  )
}
