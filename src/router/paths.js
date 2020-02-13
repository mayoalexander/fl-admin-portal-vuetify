/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/dashboard',
    // Relative to /src/views
    view: 'Dashboard'
  },
  {
    path: '/profiles/top',
    name: 'Top Profiles',
    view: 'Marketing/TopProfiles'
  },
  {
    path: '/curators/uncurated',
    name: 'Uncurate Content',
    view: 'Marketing/UncuratedContent'
  },
  {
    path: '/marketing/queue',
    name: 'Buffer Queue',
    view: 'Marketing/BufferQueue'
  },
  {
    path: '/marketing/exclusives',
    name: 'Exclusives',
    view: 'Marketing/Exclusives'
  },
  {
    path: '/marketing/campaigns',
    name: 'Campaigns',
    view: 'Marketing/Campaigns'
  },
  {
    path: '/services',
    name: 'Services',
    view: 'Services/Index'
  },
  {
    path: '/services/studios',
    name: 'Studios',
    view: 'Services/Studios'
  },
  {
    path: '/services/pending/publishing',
    name: 'Services/Pending/Publishing',
    view: 'Services/Pending/Publishing'
  },
  {
    path: '/marketing/branding',
    name: 'Branding',
    view: 'Marketing/Branding'
  },
  {
    path: '/marketing/campaigns/:id',
    name: 'Campaigns Detail',
    view: 'Marketing/Campaigns/Detail'
  },
  {
    path: '/admin/services',
    name: 'Services',
    view: 'Admin/Services'
  },
  {
    path: '/admin/clients',
    name: 'Clients',
    view: 'Admin/Clients'
  },
  {
    path: '/admin/clients/:id',
    name: 'Clients',
    view: 'Admin/Clients/Detail'
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    view: 'UserProfile'
  },
  {
    path: '/search',
    name: 'Search',
    view: 'Search'
  },
  {
    path: '/table-list',
    name: 'Table List',
    view: 'TableList'
  },
  {
    path: '/typography',
    view: 'Typography'
  },
  {
    path: '/icons',
    view: 'Icons'
  },
  {
    path: '/maps',
    view: 'Maps'
  },
  {
    path: '/notifications',
    view: 'Notifications'
  },
  {
    path: '/upgrade',
    name: 'Upgrade to PRO',
    view: 'Upgrade'
  }
]
