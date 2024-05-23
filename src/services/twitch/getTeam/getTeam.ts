import axios from 'axios'
import { getTwitchToken } from '../getTwitchToken'

export const getTeam = async (teamName: string) => {
  const token = await getTwitchToken()

  const rawData = axios
    .get('https://api.twitch.tv/helix/teams', {
      headers: {
        'Client-Id': process.env.NEXT_PUBLIC_TWITCH_APP_ID,
        Authorization: `Bearer ${token}`,
      },
      params: {
        teamName: teamName,
      },
    })
    .then((response) => {
      console.log(response)
    })
}
