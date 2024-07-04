import { Member } from '@/definition'
import { List } from '@mui/material'
import { MemberListItem } from '../MemberListItem'

export interface IMemberListProps {
  members: Member[]
}

export const MemberList = (props: IMemberListProps) => {
  const { members } = props

  return (
    <List>
      {members.map((member, index) => (
        <MemberListItem
          className={index % 2 === 0 ? 'bg-violet-950 bg-opacity-20' : ''}
          key={member.id}
          member={member}
        />
      ))}
    </List>
  )
}
