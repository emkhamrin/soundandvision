<template>
  <div class="min-h-screen bg-[#e9e9e9]">
    <!-- Navbar -->
    <nav class="bg-[#e9e9e9] sticky top-0 z-50 relative">
      <div class="max-w-screen-2xl mx-auto px-4 py-3">
        <div class="flex items-center justify-between">
          <div class="flex-shrink-0">
            <img 
              :src="logo" 
              alt="Logo" 
              class="h-12 w-auto object-contain brightness-0"
            />
          </div>
          <div class="hidden md:flex space-x-8">
            <div v-for="item in navItems" :key="item.name" class="relative group">
              <div class="absolute -left-3 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-black rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-0"></div>
              <router-link :to="item.path" class="font-poppins text-gray-700 hover:text-black transition-colors duration-300 py-2 inline-block">
                {{ item.name }}
              </router-link>
            </div>
          </div>
          
          <!-- Hamburger Button -->
          <button @click="toggleMenu" class="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none">
            <span class="block w-6 h-0.5 bg-black mb-1 transition-all duration-300" :class="{'rotate-45 translate-y-1.5': isOpen}"></span>
            <span class="block w-6 h-0.5 bg-black mb-1 transition-all duration-300" :class="{'opacity-0': isOpen}"></span>
            <span class="block w-6 h-0.5 bg-black transition-all duration-300" :class="{'-rotate-45 -translate-y-1.5': isOpen}"></span>
          </button>
        </div>
        
        <!-- Mobile Menu -->
        <div v-show="isOpen" class="md:hidden absolute top-full left-0 right-0 bg-[#e9e9e9] shadow-lg z-40">
          <div class="flex flex-col py-4 px-4 space-y-3">
            <router-link 
              v-for="item in navItems" 
              :key="item.name"
              :to="item.path" 
              @click="closeMenu"
              class="font-poppins text-gray-700 hover:text-black transition-colors duration-300 py-2 px-4 hover:bg-gray-200 rounded"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Bottom Border -->
      <div class="absolute bottom-0 left-0 right-0 flex justify-center">
        <div class="w-full max-w-screen-2xl mx-auto px-4">
          <div class="h-0.5 bg-black"></div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="max-w-screen-2xl mx-auto px-4 py-12 sm:py-16 md:py-20">
      <!-- Title -->
      <div class="text-center mb-12">
        <h1 class="font-jetbrains font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          GALLERY
        </h1>
      </div>

      <!-- Category Filters - Small rounded boxes -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="filterByCategory(category)"
          :class="[
            'px-4 py-2 rounded-full font-poppins text-sm transition-colors',
            selectedCategory === category 
              ? 'bg-black text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
        <router-link 
          v-for="item in filteredItems" 
          :key="item.id"
          :to="`/gallery/${item.id}`"
          class="border border-black p-4 cursor-pointer hover:shadow-lg transition-shadow block"
        >
          <img :src="item.image" class="w-full h-64 sm:h-72 md:h-80 object-cover mb-4" />
          <div class="flex justify-between mb-3">
            <span class="font-poppins text-xs sm:text-sm text-gray-600">{{ item.category }}</span>
            <span class="font-poppins text-xs sm:text-sm text-gray-600">{{ item.artist }}</span>
          </div>
          <h3 class="font-jetbrains font-bold text-lg sm:text-xl">{{ item.title }}</h3>
        </router-link>
      </div>

      <!-- More Button -->
      <div class="flex justify-center">
        <button 
          @click="loadMore" 
          class="px-4 py-2 rounded-full font-poppins text-sm bg-black text-white hover:bg-gray-800 transition-colors"
        >
          MORE
        </button>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-black pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-14 md:pb-16">
      <div class="max-w-screen-2xl mx-auto px-4">
        <div class="w-full h-px bg-white mb-8 sm:mb-10 md:mb-12"></div>
        
        <div class="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8">
          <div class="md:w-1/3">
            <h3 class="font-jetbrains font-bold text-2xl sm:text-3xl text-white">
              SOUND&VISION
            </h3>
          </div>
          
          <div class="md:w-2/3 flex flex-col sm:flex-row flex-wrap justify-start md:justify-end gap-6 sm:gap-8 md:gap-12">
            <div class="max-w-[100px]">
              <h4 class="font-poppins font-semibold text-white mb-3">PAGE</h4>
              <ul class="space-y-2">
                <li><router-link to="/" class="font-poppins text-gray-400 hover:text-white transition-colors text-sm whitespace-nowrap">HOME</router-link></li>
                <li><router-link to="/about" class="font-poppins text-gray-400 hover:text-white transition-colors text-sm whitespace-nowrap">ABOUT</router-link></li>
                <li><router-link to="/blog" class="font-poppins text-gray-400 hover:text-white transition-colors text-sm whitespace-nowrap">BLOG</router-link></li>
                <li><router-link to="/gallery" class="font-poppins text-gray-400 hover:text-white transition-colors text-sm whitespace-nowrap">GALLERY</router-link></li>
              </ul>
            </div>
            
            <div class="hidden sm:block w-px bg-white"></div>
            
            <div class="max-w-[100px]">
              <h4 class="font-poppins font-semibold text-white mb-3">CONTACT</h4>
              <ul class="space-y-2">
                <li><a href="mailto:singosariundergroundarmy@gmail.com" class="font-poppins text-gray-400 hover:text-white transition-colors text-xs sm:text-sm break-words">singosariundergroundarmy@gmail.com</a></li>
              </ul>
            </div>
            
            <div class="hidden sm:block w-px bg-white"></div>
            
            <div class="max-w-[100px]">
              <h4 class="font-poppins font-semibold text-white mb-3">SOCIAL</h4>
              <ul class="space-y-2">
                <li><a href="http://www.youtube.com/@singosariundergroundarmy7141" target="_blank" class="font-poppins text-gray-400 hover:text-white transition-colors text-sm whitespace-nowrap">YOUTUBE</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="w-full h-px bg-white my-8 sm:my-10 md:my-12"></div>
        
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div class="font-poppins text-gray-400 text-xs sm:text-sm">
            Designed by <span class="font-bold text-white">"Those Who About to Rock"</span>
          </div>
          <div class="font-poppins text-gray-400 text-xs sm:text-sm">
            &copy; SOUND&VISION. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import logo from '../assets/images/logo.PNG'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.png'
import img6 from '../assets/images/img6.jpg'

export default {
  name: 'GalleryView',
  data() {
    return {
      logo,
      isOpen: false,
      selectedCategory: 'ALL',
      categories: ['ALL', 'ART', 'EVENT', 'PHOTOGRAPHY', 'DESIGN'],
      navItems: [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', path: '/about' },
        { name: 'BLOG', path: '/blog' },
        { name: 'GALLERY', path: '/gallery' }
      ],
      allItems: [
        { id: 1, title: "Urban Street Art", category: "ART", artist: "Alex Turner", image: img1 },
        { id: 2, title: "Music Festival 2025", category: "EVENT", artist: "Sarah Williams", image: img2 },
        { id: 3, title: "City Night Lights", category: "PHOTOGRAPHY", artist: "John Doe", image: img3 },
        { id: 4, title: "Modern Architecture", category: "DESIGN", artist: "Jane Smith", image: img4 },
        { id: 5, title: "Abstract Expression", category: "ART", artist: "Mike Johnson", image: img5 },
        { id: 6, title: "Concert Moments", category: "EVENT", artist: "Emma Wilson", image: img6 },
        { id: 7, title: "Nature Photography", category: "PHOTOGRAPHY", artist: "Lisa Wong", image: img1 },
        { id: 8, title: "Minimalist Design", category: "DESIGN", artist: "David Brown", image: img2 },
        { id: 9, title: "Graffiti Art", category: "ART", artist: "Carlos Mendez", image: img3 }
      ],
      visibleItems: 6
    }
  },
  computed: {
    filteredItems() {
      let filtered = this.allItems;
      if (this.selectedCategory !== 'ALL') {
        filtered = this.allItems.filter(item => item.category === this.selectedCategory);
      }
      return filtered.slice(0, this.visibleItems);
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
    filterByCategory(category) {
      this.selectedCategory = category;
      this.visibleItems = 6;
    },
    loadMore() {
      this.visibleItems += 3;
    }
  }
}
</script>

<style scoped>
.font-poppins { font-family: 'Poppins', sans-serif; }
.font-jetbrains { font-family: 'JetBrains Mono', monospace; }
</style>