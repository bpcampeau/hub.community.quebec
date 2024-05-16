import axios from 'axios'
import { getTwitchToken } from '../getTwitchToken'

export const getQuebecUsers = async () => {
  const token = await getTwitchToken()

  const rawData = axios
    .get('https://api.twitch.tv/helix/search/channels?query=loserfruit', {
      headers: {
        'Client-Id': 'iwnng4cs84csy2v5ueo69y',
        Authorization: 'Bearer 1n44alq5a9n4e9oz8j4',
      },
    })
    .then(function (response) {
      console.log(response)
    })
}
