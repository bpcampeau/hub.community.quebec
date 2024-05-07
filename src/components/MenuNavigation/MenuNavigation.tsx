import { INavigationRoute } from '@/definition'
import { Box, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

interface MenuNavigationProps {
  menuItems: INavigationRoute[]
}

export const MenuNavigation = (props: MenuNavigationProps) => {
  const { menuItems } = props

  return (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {menuItems.map((route) => (
          <ListItem>
            <ListItemButton component={Link} href={route.route}>
              {route.icon && <ListItemIcon>{route.icon}</ListItemIcon>}
              <ListItemText primary={route.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
