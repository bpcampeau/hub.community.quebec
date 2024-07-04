import { Member } from '@/definition'
import { Avatar, Button, ListItem } from '@mui/material'
import { MemberTypeBadge } from '../MemberTypeBadge'

interface MemberListItemProps {
  className?: string
  member: Member
}

export const MemberListItem = (props: MemberListItemProps) => {
  const { name, description, profile_image, type } = props.member
  const { className } = props

  const channelURL = `https://twitch.tv/${name}`

  return (
    <ListItem className={`grid grid-cols-12 items-start ${className}`}>
      <Avatar className="col-span-2 self-center" sx={{ width: 80, height: 80 }} alt={name} src={profile_image} />
      <div className="col-span-9">
        <h2 className=" text-xl font-bold mb-2">
          {name} {type !== '' && <MemberTypeBadge className="ml-1" memberType={type} />}
        </h2>
        <p>{description}</p>
      </div>
      <div className="col-span-1 pr-2 pl-2 self-center text-center">
        <Button size="small" variant="contained" href={channelURL}>
          Visiter
        </Button>
      </div>
    </ListItem>
  )
}
