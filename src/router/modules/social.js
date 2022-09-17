import Layout from '@/layout'
export default {
  path: '/social',
  name: 'social',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/social'),
    meta: {
      title: 'social',
      icon: 'table'
    }
  }]
}
