import { Chip } from '@mui/material'
import { deepPurple } from '@mui/material/colors'

export interface MemberTypeBadgeProps {
  memberType: string
  className?: string
}

export const MemberTypeBadge = (props: MemberTypeBadgeProps) => {
  const { memberType, className } = props

  return (
    <Chip
      className={`capitalize ${className}`}
      color="primary"
      variant={memberType === 'partner' ? 'filled' : 'outlined'}
      label={memberType}
      size="small"
    />
  )
}
