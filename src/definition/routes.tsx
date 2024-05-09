import { Home, QuestionAnswer, CardMembership } from '@mui/icons-material'
import { INavigationRoute } from './types'

export const menuRoutes: INavigationRoute[] = [
  {
    route: '/',
    label: 'Acceuil',
    icon: <Home />,
  },
  {
    route: '/a-propos',
    label: 'À propos',
    icon: <QuestionAnswer />,
  },
  {
    route: '/membres',
    label: 'Membres',
    icon: <CardMembership />,
  },
]
