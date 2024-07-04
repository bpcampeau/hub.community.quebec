import { MemberList } from '@/components/MemberList'
import { MemberPagination } from '@/components/MemberPagination/MemberPagination'
import { getMembers } from '@/services'
import { Box } from '@mui/material'

export default async function Page() {
  const memberList = await getMembers()

  return (
    <>
      <h1 className="text-4xl capitalize font-bold mb-4">Nos Membres</h1>
      <Box>
        <MemberList members={memberList.members} />
        <MemberPagination count={memberList.totalPage} />
      </Box>
    </>
  )
}
