import { USER_PAGE_SIZE } from '@/definition/configs'
import { getTeamMembers } from '@/services'

export async function GET(request: Request) {
  const team = await getTeamMembers('teamqc')

  const teamSize = team.length

  const maxPageNumber = Math.ceil(teamSize / USER_PAGE_SIZE)

  const page = team.slice(0, USER_PAGE_SIZE)

  return Response.json({ team })
}
