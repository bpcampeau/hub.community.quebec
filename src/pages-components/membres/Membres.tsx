'use Client'

import { MemberList } from '@/components/MemberList/MemberList'
import { getQuebecUsers } from '@/services/twitch/getQuebecUsers/getQuebecUsers'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'

export const Membres = async () => {
  const [members, setMembers] = useState({})

  useEffect(() => {
    getQuebecUsers()
  })

  return (
    <>
      <h1 className="text-2xl font-bold">Membres</h1>
      <Box>Hello</Box>
    </>
  )
}
