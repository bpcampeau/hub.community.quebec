'use Client'

import { INavigationRoute } from '@/definition'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useRouter } from 'next/navigation'
interface MenuNavigationProps {
  menuItems: INavigationRoute[]
}

export const MenuNavigation = (props: MenuNavigationProps) => {
  const { menuItems } = props
  const router = useRouter()

  return (
    <List>
      {menuItems.map((route) => (
        <ListItem>
          <ListItemButton onClick={() => router.push(route.route)}>
            {route.icon && <ListItemIcon>{route.icon}</ListItemIcon>}
            <ListItemText primary={route.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
