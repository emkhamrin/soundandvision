<template>
  <div class="min-h-screen bg-[#e9e9e9]">
    <!-- Navbar -->
    <nav class="bg-[#e9e9e9] sticky top-0 z-50 relative">
      <div class="max-w-screen-2xl mx-auto px-4 py-3">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <img 
              :src="logo" 
              alt="Logo" 
              class="h-12 w-auto object-contain brightness-0"
            />
          </div>
          
          <!-- Desktop Menu -->
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

    <!-- Title Section - Responsive height -->
    <section class="flex items-center justify-center h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 px-4">
      <div class="w-full max-w-screen-2xl mx-auto">
        <div class="flex justify-between items-center w-full font-jetbrains font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wider">
          <span>S</span>
          <span>O</span>
          <span>U</span>
          <span>N</span>
          <span>D</span>
          <span>&</span>
          <span>V</span>
          <span>I</span>
          <span>S</span>
          <span>I</span>
          <span>O</span>
          <span>N</span>
        </div>
      </div>
    </section>

    <!-- Marquee -->
    <div class="flex justify-center">
      <div class="w-full max-w-screen-2xl mx-auto px-4">
        <div class="bg-black py-4 overflow-hidden">
          <div class="whitespace-nowrap">
            <div ref="marqueeTrack" class="inline-flex items-center">
              <div v-for="i in 30" :key="i" class="inline-flex items-center">
                <span class="font-poppins text-xs sm:text-sm text-white mx-2 sm:mx-4">POWERED AND CURATED BY SINGOSARI UNDERGROUND ARMY</span>
                <span class="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mx-2 sm:mx-3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section with Image - Box with decoration -->
    <section class="py-12 sm:py-16 md:py-20">
      <div class="max-w-screen-2xl mx-auto px-4">
        <div class="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          <!-- Left side - Text -->
          <div class="md:w-1/2">
            <h2 class="font-jetbrains font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">A COMPULSIVE LIST OF ROCK AND INBETWEEN</h2>
            <p class="font-poppins text-gray-700 text-base sm:text-lg">First we met, second we spread the threat. Let's dive into the majestic realm of the world created by the so-called Rock N' Roll. </p>
          </div>
          
          <!-- Right side - Box with image -->
          <div class="md:w-1/2">
            <div class="border border-black p-4">
              <!-- Decorative circles with dashed line -->
              <div class="flex items-center justify-center gap-2 mb-4 w-full">
                <div class="flex-1 border-t border-dashed border-black"></div>
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 border border-black rounded-full"></div>
                  <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 border border-black rounded-full"></div>
                  <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 border border-black rounded-full"></div>
                </div>
                <div class="flex-1 border-t border-dashed border-black"></div>
              </div>
              <!-- Image -->
              <img :src="img1" alt="Image" class="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Posts -->
    <section class="py-12 sm:py-16 md:py-20">
      <div class="max-w-screen-2xl mx-auto px-4">
        <div class="mb-8 sm:mb-10 md:mb-12">
          <h2 class="font-jetbrains font-bold text-3xl sm:text-4xl md:text-5xl mb-4">RECENT POST</h2>
          <div class="w-full h-0.5 bg-black"></div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div v-for="post in posts" :key="post.id" @click="goToBlog(post.id)" class="border border-black p-4 cursor-pointer hover:shadow-lg transition-shadow">
            <img :src="post.image" class="w-full h-48 sm:h-56 md:h-64 object-cover mb-4" />
            <div class="flex justify-between mb-3">
              <span class="font-poppins text-xs sm:text-sm text-gray-600">{{ post.category }}</span>
              <span class="font-poppins text-xs sm:text-sm text-gray-600">{{ post.author }}</span>
            </div>
            <h3 class="font-jetbrains font-bold text-lg sm:text-xl">{{ post.title }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Black Section with White Border Box -->
    <section class="bg-black py-12 sm:py-16 md:py-20">
      <div class="max-w-screen-2xl mx-auto px-4">
        <div class="flex flex-col items-center">
          <div class="border border-white p-6 sm:p-8 max-w-2xl w-full">
            <div class="flex items-center justify-center gap-2 mb-6 w-full">
              <div class="flex-1 border-t border-dashed border-white"></div>
              <div class="flex items-center gap-2 sm:gap-3">
                <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 border border-white rounded-full"></div>
                <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 border border-white rounded-full"></div>
                <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 border border-white rounded-full"></div>
              </div>
              <div class="flex-1 border-t border-dashed border-white"></div>
            </div>
            <img :src="featuredImage" alt="Featured" class="w-full h-auto" />
          </div>
          <p class="font-poppins text-white text-center text-base sm:text-large md:text-xl mt-6 sm:mt-8 max-w-5xl">
            Majestic, raw, enormous. In the history of rock n' roll, it's almost impossible to find a perfect word to immaculate the sound of it. And as far as we know, the only thing that we were able to capture all of that is to document, to archive, to write on a bind of thousand words. 
            So here we are, still stuck on a block that prints the alphabet while enjoying the thunderous sound and vision it makes.
          </p>
        </div>
      </div>
    </section>

    <!-- More Stories Section -->
    <section class="py-12 sm:py-16 md:py-20">
      <div class="max-w-screen-2xl mx-auto px-4">
        <div class="mb-8 sm:mb-10 md:mb-12">
          <h2 class="font-jetbrains font-bold text-3xl sm:text-4xl md:text-5xl mb-4">MORE STORIES</h2>
          <div class="w-full h-0.5 bg-black"></div>
        </div>
        
        <div class="flex flex-col lg:flex-row gap-6 md:gap-8">
          <!-- Left side - 2 stacked boxes -->
          <div class="lg:w-1/3 flex flex-col gap-6 md:gap-8">
            <div v-for="story in leftStories" :key="story.id" @click="goToBlog(story.id)" class="border border-black p-4 cursor-pointer hover:shadow-lg transition-shadow bg-[#e9e9e9] flex flex-col h-full">
              <div class="flex-1">
                <img :src="story.image" class="w-full h-full object-cover" />
              </div>
              <div class="mt-4">
                <div class="flex justify-between mb-3">
                  <span class="font-poppins text-xs sm:text-sm text-gray-600">{{ story.category }}</span>
                  <span class="font-poppins text-xs sm:text-sm text-gray-600">{{ story.author }}</span>
                </div>
                <h3 class="font-jetbrains font-bold text-lg sm:text-xl">{{ story.title }}</h3>
              </div>
            </div>
          </div>
          
          <!-- Right side - 1 larger box -->
          <div class="lg:w-2/3">
            <div class="border border-black p-4 cursor-pointer hover:shadow-lg transition-shadow bg-[#e9e9e9] h-full flex flex-col">
              <div class="flex-1">
                <img :src="rightStory.image" class="w-full h-full object-cover" />
              </div>
              <div class="mt-4">
                <div class="flex justify-between mb-3">
                  <span class="font-poppins text-xs sm:text-sm text-gray-600">{{ rightStory.category }}</span>
                  <span class="font-poppins text-xs sm:text-sm text-gray-600">{{ rightStory.author }}</span>
                </div>
                <h3 class="font-jetbrains font-bold text-lg sm:text-xl">{{ rightStory.title }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
  name: 'HomeView',
  data() {
    return {
      logo,
      img1,
      featuredImage: img1,
      isOpen: false,
      navItems: [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', path: '/about' },
        { name: 'BLOG', path: '/blog' },
        { name: 'GALLERY', path: '/gallery' }
      ],
      posts: [
        { id: 1, title: "Band Kurang Ajar Dari Malang", category: "MUSIC", author: "Bastian Safriansyah", image: img2 },
        { id: 2, title: "Pemuda Urakan Namun Kreatif", category: "ART", author: "Sifah Ganteng", image: img3 },
        { id: 3, title: "Generasi Tak Berbudaya", category: "CULTURE", author: "Aditya Kurniawan", image: img4 },
        { id: 4, title: "A Decade of Dedication", category: "EVENT", author: "Sarah Williams", image: img5 },
        { id: 5, title: "Debunking Every DSP Myth", category: "TECH", author: "David Brown", image: img6 },
        { id: 6, title: "Minimalis Tak Mesti Sederhana", category: "DESIGN", author: "Okky W. Sempada", image: img1 }
      ],
      leftStories: [
        { id: 7, title: "Self Revolution Merilis Single Terbaru", category: "MUSIC", author: "John Doe", image: img2 },
        { id: 8, title: "Desir Hati di Atas Tumpahan Cat", category: "ART", author: "Aries Setyono", image: img3 }
      ],
      rightStory: {
        id: 9,
        title: "Sidomulyo Bullfight All-Nighter",
        category: "CULTURE",
        author: "Dioh Primadana",
        image: img4
      }
    }
  },
  mounted() {
    this.startMarquee();
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
    startMarquee() {
      const track = this.$refs.marqueeTrack;
      if (track) {
        let pos = 0;
        const step = () => {
          pos -= 1;
          if (Math.abs(pos) >= track.offsetWidth / 2) pos = 0;
          track.style.transform = `translateX(${pos}px)`;
          requestAnimationFrame(step);
        };
        step();
      }
    },
    goToBlog(id) {
      this.$router.push(`/blog/${id}`);
    }
  }
}
</script>

<style scoped>
.font-poppins { font-family: 'Poppins', sans-serif; }
.font-jetbrains { font-family: 'JetBrains Mono', monospace; }
</style>