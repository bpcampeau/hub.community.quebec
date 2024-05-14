'use client'

import { MenuNavigation } from '@/components'
import { menuRoutes } from '@/definition'

export const NavigationProvider = () => {
  return <MenuNavigation menuItems={menuRoutes} />
}
