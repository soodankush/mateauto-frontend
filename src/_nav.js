export default [
  {
    component: 'CNavItem',
    name: 'Connected Apps',
    to: '/apps',
    icon: 'cil-drop',
  },
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
      text: 'NEW',
    },
  },
  {
    component: 'CNavItem',
    name: 'Saved Items',
    to: '/saved-items',
    icon: 'cil-drop',
  },
  {
    component: 'CNavItem',
    name: 'Posts',
    to: '/post',
    icon: 'cil-drop',
  },
]
