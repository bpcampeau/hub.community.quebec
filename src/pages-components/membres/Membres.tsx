import { MemberList } from '@/components/MemberList/MemberList'
import { TeamMember } from '@/definition'
import { getTeamMembers } from '@/services'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'

export const Membres = () => {
  const [members, setMembers] = useState<TeamMember[]>([])

  const getMemberList = async () => {
    return (await getTeamMembers('teamqc')) as TeamMember[]
  }

  useEffect(() => {
    console.log(getMemberList())
  }, [])

  return (
    <>
      <h1 className="text-2xl font-bold">Membres</h1>
      <Box>{`${members}`}</Box>
    </>
  )
}
