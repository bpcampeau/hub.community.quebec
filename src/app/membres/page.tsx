import { MemberList } from '@/components/MemberList'
import { MemberPagination } from '@/components/MemberPagination/MemberPagination'
import { getMembers } from '@/services'
import { Box, Stack } from '@mui/material'
import { headers } from 'next/headers'

export default async function Page() {
  const headersList = headers()
  const header_url = headersList.get('x-url') || ''
  const searchParams = new URL(header_url).searchParams
  const currentPage = parseInt(searchParams.get('page') ?? '1')
  const memberList = await getMembers(currentPage)

  return (
    <>
      <h1 className="text-4xl capitalize font-bold mb-4">Nos Membres</h1>
      <Box>
        <Stack alignItems="center">
          <MemberPagination defaultPage={currentPage} className="self-center" count={memberList.totalPage} />
        </Stack>
        <MemberList members={memberList.members} />
        <Stack alignItems="center">
          <MemberPagination defaultPage={currentPage} className="self-center" count={memberList.totalPage} />
        </Stack>
      </Box>
    </>
  )
}
