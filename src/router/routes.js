export default function (context) {
  const routes = [
    {
      path: '/',
      component: () => import('layouts/MainLayout.vue'),
      children: [
        { name: 'home', path: '', component: () => import('pages/Index.vue') },
        { name: 'case-a', path: 'case-a', component: () => import('src/pages/CaseA/index.vue') },
        { name: 'case-b', path: 'case-b', component: () => import('src/pages/CaseB/index.vue') },
        { name: 'case-c', path: 'case-c', component: () => import('src/pages/CaseC/index.vue') },
        { name: 'case-d', path: 'case-d', component: () => import('src/pages/CaseD/index.vue') },
        { name: 'case-e', path: 'case-e', component: () => import('src/pages/CaseE/index.vue') }
      ]
    }
  ]

  // Always leave this as last one
  if (process.env.MODE !== 'ssr') {
    routes.push({
      path: '*',
      component: () => import('pages/Error404.vue')
    })
  }
  return routes
}
