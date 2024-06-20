import axios from 'axios'
import { getTwitchToken } from '../getTwitchToken'
import { Member } from '@/definition'
import { useScrollTrigger } from '@mui/material'

export interface getUsersParams {
  userLogin?: string | string[]
  userId?: string | string[]
}

export const getUsers = async (params: getUsersParams) => {
  const token = await getTwitchToken()

  const rawData = await axios.get('https://api.twitch.tv/helix/users', {
    headers: {
      'Client-Id': process.env.NEXT_PUBLIC_TWITCH_APP_ID,
      Authorization: `Bearer ${token}`,
    },
    params: {
      ...(params.userLogin && { login: params.userLogin }),
      ...(params.userId && { id: params.userId }),
    },
    paramsSerializer: {
      indexes: null,
    },
  })

  if (typeof params.userLogin === 'object' || typeof params.userId === 'object') {
    return rawData.data.data as Member[]
  } else {
    return rawData.data.data[0] as Member
  }
}
