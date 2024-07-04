import { USER_PAGE_SIZE } from '@/definition/configs'
import { getTeamMembers } from '@/services'
import { getUsers } from '@/services/twitch/getUser'

const userMapper = (twitchUser: any) => {
  return {
    id: twitchUser.id,
    name: twitchUser.display_name,
    type: twitchUser.broadcaster_type,
    description: twitchUser.description,
    profile_image: twitchUser.profile_image_url,
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const pageParam = searchParams.get('page')

  const currentPage = pageParam ? parseInt(pageParam) : 1

  const team = await getTeamMembers('teamqc')

  const teamSize = team.length

  const maxPageNumber = Math.ceil(teamSize / USER_PAGE_SIZE)

  const startIndex = currentPage <= 1 ? 0 : USER_PAGE_SIZE * (currentPage - 1)
  const endIndex = USER_PAGE_SIZE * currentPage
  const page = team.slice(startIndex, endIndex)

  const membersIds = page.map((teamMember) => teamMember.user_id)

  const rawMembers = (await getUsers({ userId: membersIds })) as []

  const members = rawMembers.map((member: any) => userMapper(member))

  const data = {
    members,
    length: members.length,
    currentPage: currentPage,
    totalPage: maxPageNumber,
  }

  return Response.json({ data })
}
