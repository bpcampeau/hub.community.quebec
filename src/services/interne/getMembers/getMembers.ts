import { APIMembers, Member } from '@/definition'
import axios from 'axios'

export const getMembers = async (page?: number) => {
  const data = await axios.get(`${process.env.NEXT_PUBLIC_API_ORIGIN_URL}/api/members`, {
    params: {
      page: page,
    },
  })

  return data.data.data as APIMembers
}
