import axios from 'axios'
import { getTwitchToken } from '../getTwitchToken'
import { TeamMember } from '@/definition'

export const getTeam = async (teamName: string) => {
  const token = await getTwitchToken()

  const rawData = await axios.get('https://api.twitch.tv/helix/teams', {
    headers: {
      'Client-Id': process.env.NEXT_PUBLIC_TWITCH_APP_ID,
      Authorization: `Bearer ${token}`,
    },
    params: {
      name: teamName,
    },
  })

  return rawData.data.data[0]
}

export const getTeamMembers = async (teamName: string) => {
  //@ts-ignore
  const team = await getTeam(teamName)

  return team.users.slice(0, 100)
}
