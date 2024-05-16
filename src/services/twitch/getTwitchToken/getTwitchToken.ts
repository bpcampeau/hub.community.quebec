import axios from 'axios'

export const getTwitchToken = async () => {
  console.log(process.env.NEXT_PUBLIC_TWITCH_APP_ID)

  return await axios
    .post('https://id.twitch.tv/oauth2/token', {
      client_id: process.env.NEXT_PUBLIC_TWITCH_APP_ID,
      client_secret: process.env.NEXT_PUBLIC_TWITCH_APP_SECRET,
      grant_type: 'client_credentials',
    })
    .then((response) => {
      console.log(response)
      return response
    })
    .catch((e) => {
      console.error(e)
    })
}
