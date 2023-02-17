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
]
