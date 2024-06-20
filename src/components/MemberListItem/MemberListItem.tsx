import { Member } from '@/definition'
import { Avatar, Button, ListItem } from '@mui/material'
import { MemberTypeBadge } from '../MemberTypeBadge'

interface MemberListItemProps {
  className?: string
  member: Member
}

export const MemberListItem = (props: MemberListItemProps) => {
  const { display_name, profile_image_url, description, broadcaster_type } = props.member
  const { className } = props

  const channelURL = `https://twitch.tv/${display_name}`

  return (
    <ListItem className={`w-8/12 grid grid-cols-12 items-start ${className}`}>
      <Avatar className="col-span-2" sx={{ width: 100, height: 100 }} alt={display_name} src={profile_image_url} />
      <div className="col-span-8">
        <h2 className=" text-xl font-bold mb-2">
          {display_name} <MemberTypeBadge className="ml-1" memberType={broadcaster_type} />
        </h2>
        <p>{description}</p>
      </div>
      <div className="col-span-2 pr-2 pl-2 self-center text-center">
        <Button size="small" variant="contained" href={channelURL}>
          Visiter
        </Button>
      </div>
    </ListItem>
  )
}
