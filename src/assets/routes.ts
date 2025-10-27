import About from '@/pages/AboutPage.vue'
import Contact from '@/pages/ContactPage.vue'
import Project from '@/pages/ProjectsPage.vue'

export default [
  { path: '/', component: About },
  { path: '/projects', component: Project },
  { path: '/contact', component: Contact },
]
