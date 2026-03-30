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
      <!-- Title Section -->
      <div class="text-center mb-12 sm:mb-16 md:mb-20">
        <h1 class="font-jetbrains font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4">
          ABOUT US
        </h1>
        <p class="font-poppins text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
          Discover the story behind SOUND&VISION and the passionate individuals who bring the underground music scene to life.
        </p>
      </div>

      <!-- Three Vertical Images with taller height -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
        <div v-for="image in images" :key="image.id" class="w-full">
          <div class="w-full rounded-lg overflow-hidden border border-black h-[500px] sm:h-[550px] md:h-[600px]">
            <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <!-- First Article - Full width like navbar -->
      <div class="w-full mb-12">
        <p class="font-poppins text-gray-700 text-base sm:text-lg leading-relaxed mb-4 max-w-screen-2xl mx-auto">
          SOUND&VISION emerged from the vibrant underground music scene of Singosari, a collective of artists, musicians, and creators who believe in the power of raw, unfiltered expression. What started as small gatherings in hidden spaces has grown into a movement that celebrates the intersection of sound and visual artistry.
        </p>
        <p class="font-poppins text-gray-700 text-base sm:text-lg leading-relaxed max-w-screen-2xl mx-auto">
          Our mission is to provide a platform for emerging talents, curating experiences that challenge conventions and push creative boundaries. From intimate live sessions to large-scale exhibitions, we strive to create spaces where art can thrive in its most authentic form.
        </p>
      </div>

      <!-- Quote Section -->
      <div class="max-w-3xl mx-auto my-16 md:my-20 text-center">
        <p class="font-jetbrains italic text-2xl sm:text-3xl md:text-4xl leading-relaxed">
          <span class="text-red-600 text-4xl sm:text-5xl md:text-6xl">&ldquo;</span>
          Music is the silence between the notes. Vision is the light between the shadows.
          <span class="text-red-600 text-4xl sm:text-5xl md:text-6xl">&rdquo;</span>
        </p>
        <p class="font-poppins text-gray-500 text-sm mt-4">— SOUND&VISION Collective</p>
      </div>

      <!-- Second Article - Full width like navbar -->
      <div class="w-full">
        <p class="font-poppins text-gray-700 text-base sm:text-lg leading-relaxed mb-4 max-w-screen-2xl mx-auto">
          As we continue to grow, we remain committed to our roots. Every event, every publication, every collaboration is driven by a singular purpose: to amplify voices that deserve to be heard and to showcase visions that need to be seen. We believe in the transformative power of art and its ability to connect people across cultures, generations, and backgrounds.
        </p>
        <p class="font-poppins text-gray-700 text-base sm:text-lg leading-relaxed max-w-screen-2xl mx-auto">
          Join us on this journey as we explore the endless possibilities where sound meets vision. Whether you're an artist, a musician, a creator, or simply someone who appreciates the beauty of authentic expression, there's a place for you here.
        </p>
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

export default {
  name: 'AboutView',
  data() {
    return {
      logo,
      isOpen: false,
      navItems: [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', path: '/about' },
        { name: 'BLOG', path: '/blog' },
        { name: 'GALLERY', path: '/gallery' }
      ],
      images: [
        { id: 1, src: img1, alt: "Artist performing" },
        { id: 2, src: img2, alt: "Art exhibition" },
        { id: 3, src: img3, alt: "Community gathering" }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    }
  }
}
</script>

<style scoped>
.font-poppins { font-family: 'Poppins', sans-serif; }
.font-jetbrains { font-family: 'JetBrains Mono', monospace; }
</style>