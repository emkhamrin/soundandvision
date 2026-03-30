import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Blog from '../pages/Blog.vue'
import Gallery from '../pages/Gallery.vue'
import BlogPost from '../pages/BlogPost.vue'
import GalleryPost from '../pages/GalleryPost.vue'  // <-- TAMBAHKAN INI

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/blog', component: Blog },
  { path: '/gallery', component: Gallery },
  { path: '/blog/:id', component: BlogPost, name: 'BlogPost' },
  { path: '/gallery/:id', component: GalleryPost, name: 'GalleryPost' },  // <-- TAMBAHKAN INI
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router