import type { SvgIconComponent } from '@mui/icons-material'
import React from 'react'

export interface INavigationRoute {
  label: string
  route: string
  icon?: React.ReactElement<SvgIconComponent>
}
