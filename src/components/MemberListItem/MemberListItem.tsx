import { Avatar, Button, ListItem } from '@mui/material'

export interface IMemberListItemProps {
  streamerName: string
  profilePicture: string
  channelDescription: string
  channelURL: string
}

export const MemberListItem = (props: IMemberListItemProps) => {
  const { streamerName, profilePicture, channelDescription, channelURL } = props

  return (
    <ListItem className="border-b-2 border-violet-950 w-8/12 grid grid-cols-12 items-start">
      <Avatar className="col-span-2" sx={{ width: 100, height: 100 }} alt={streamerName} src={profilePicture} />
      <div className="col-span-8">
        <h2 className=" text-xl font-bold">{streamerName}</h2>
        <p>{channelDescription}</p>
      </div>
      <div className="col-span-2">
        <Button href={channelURL}>Visiter</Button>
      </div>
    </ListItem>
  )
}
