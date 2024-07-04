'use client'

import { Pagination } from '@mui/material'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

interface IMemberPaginationProps {
  count: number
  onPageChange?: VoidFunction
}

export const MemberPagination = (props: IMemberPaginationProps) => {
  const currentPage = usePathname()
  const router = useRouter()

  const handlePageChange = (pageNumber: number) => {
    router.push(`${currentPage}?page=${pageNumber}`)
  }

  return (
    <Pagination
      color="primary"
      onChange={(event, page) => handlePageChange(page)}
      shape="rounded"
      size="large"
      count={props.count}
    />
  )
}
