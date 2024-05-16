'use Client'

import { MemberList } from '@/components/MemberList/MemberList'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'

export const Membres = async () => {
  const [members, setMembers] = useState({})

  useEffect(() => {})

  return (
    <>
      <h1 className="text-2xl font-bold">Membres</h1>
      <Box>
        <MemberList members={members} />
      </Box>
    </>
  )
}
