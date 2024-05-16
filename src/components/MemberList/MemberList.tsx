'use Client'

import { Member } from '@/definition'
import { List } from '@mui/material'
import { MemberListItem } from '../MemberListItem'
import { getTwitchToken } from '@/services'

export interface IMemberListProps {
  members: Member[]
}

export const MemberList = async (props: IMemberListProps) => {
  const { members } = props

  const token = await getTwitchToken()

  return (
    <List>
      {members.map((member) => (
        <MemberListItem key={member.streamerName} {...member} />
      ))}
    </List>
  )
}
