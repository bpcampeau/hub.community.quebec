import axios from 'axios'
import { getTwitchToken } from '../getTwitchToken'

export const getQuebecUsers = async () => {
  const token = await getTwitchToken()

  console.log(token)

  const rawData = axios
    .get('https://api.twitch.tv/helix/search/channels?query=qc', {
      headers: {
        'Client-Id': process.env.NEXT_PUBLIC_TWITCH_APP_ID,
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response)
    })
}
