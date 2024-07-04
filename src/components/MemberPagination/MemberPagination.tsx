'use client'

import { Pagination } from '@mui/material'

interface IMemberPaginationProps {
  count: number
  onPageChange?: VoidFunction
}

export const MemberPagination = (props: IMemberPaginationProps) => {
  return <Pagination color="primary" onChange={() => {}} shape="rounded" size="large" count={props.count} />
}
