'use client'

import { MemberList } from '@/components/MemberList/MemberList'
import { Member } from '@/definition'
import { getTeamMembers } from '@/services'
import { getUsers } from '@/services/twitch/getUser'
import { Box } from '@mui/material'

export const Membres = async () => {
  const getMemberList = async () => {
    const team = await getTeamMembers('teamqc')

    const page1 = team.slice(0, 10)

    const membersIds = page1.map((teamMember) => teamMember.user_id)

    const members = (await getUsers({ userId: membersIds })) as Member[]

    return members
  }

  return (
    <>
      <h1 className="text-4xl capitalize font-bold mb-4">Nos Membres</h1>
      <Box>
        <MemberList members={await getMemberList()} />
      </Box>
    </>
  )
}
