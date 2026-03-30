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
      <div v-if="post">
        <!-- Back to Blog -->
        <div class="mb-8">
          <router-link to="/blog" class="font-poppins text-gray-600 hover:text-black transition-colors">
            ← Back to Blog
          </router-link>
        </div>

        <!-- Title Section - Narrower width -->
        <div class="text-center mb-12 max-w-3xl mx-auto">
          <h1 class="font-jetbrains font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 break-words">
            {{ post.title }}
          </h1>
          <p class="font-poppins text-gray-600 text-lg sm:text-xl md:text-2xl leading-relaxed break-words">
            {{ post.subtitle }}
          </p>
        </div>

        <!-- Two Column Layout with responsive divider -->
        <div class="w-full">
          <!-- Desktop: horizontal layout with vertical divider -->
          <div class="hidden lg:flex gap-8 lg:gap-12">
            <!-- Left Column -->
            <div class="flex-1">
              <div class="mb-8">
                <img 
                  :src="post.image" 
                  :alt="post.title" 
                  class="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg border border-black" 
                />
              </div>
              
              <div>
                <p class="font-poppins text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                  {{ post.content }}
                </p>
                <p class="font-poppins text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p class="font-poppins text-gray-700 text-base sm:text-lg leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>

            <!-- Vertical Divider -->
            <div class="w-px bg-gray-300"></div>

            <!-- Right Column -->
            <div class="w-80 flex-shrink-0">
              <div class="sticky top-24">
                <div class="mb-8">
                  <h3 class="font-jetbrains font-bold text-lg sm:text-xl mb-2">Author</h3>
                  <p class="font-poppins text-gray-700">{{ post.author }}</p>
                </div>
                
                <div class="mb-8">
                  <h3 class="font-jetbrains font-bold text-lg sm:text-xl mb-2">Category</h3>
                  <p class="font-poppins text-gray-700">{{ post.category }}</p>
                </div>
                
                <div class="mb-8">
                  <h3 class="font-jetbrains font-bold text-lg sm:text-xl mb-2">Year</h3>
                  <p class="font-poppins text-gray-700">{{ post.year }}</p>
                </div>

                <div class="mb-8">
                  <h3 class="font-jetbrains font-bold text-lg sm:text-xl mb-2">Date</h3>
                  <p class="font-poppins text-gray-700">{{ post.date }}</p>
                </div>

                <div class="mb-8">
                  <h3 class="font-jetbrains font-bold text-lg sm:text-xl mb-2">Read Time</h3>
                  <p class="font-poppins text-gray-700">{{ post.readTime }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile/Tablet: vertical layout with horizontal divider -->
          <div class="lg:hidden">
            <!-- Left Column (Article) -->
            <div>
              <div class="mb-8">
                <img 
                  :src="post.image" 
                  :alt="post.title" 
                  class="w-full h-64 sm:h-80 object-cover rounded-lg border border-black" 
                />
              </div>
              
              <div>
                <p class="font-poppins text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                  {{ post.content }}
                </p>
                <p class="font-poppins text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p class="font-poppins text-gray-700 text-base sm:text-lg leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>

            <!-- Horizontal Divider -->
            <div class="w-full h-px bg-gray-300 my-8"></div>

            <!-- Right Column (Author Info) -->
            <div>
              <div class="mb-8">
                <h3 class="font-jetbrains font-bold text-lg sm:text-xl mb-2">Author</h3>
                <p class="font-poppins text-gray-700">{{ post.author }}</p>
              </div>
              
              <div class="mb-8">
                <h3 class="font-jetbrains font-bold text-lg sm:text-xl mb-2">Category</h3>
                <p class="font-poppins text-gray-700">{{ post.category }}</p>
              </div>
              
              <div class="mb-8">
                <h3 class="font-jetbrains font-bold text-lg sm:text-xl mb-2">Year</h3>
                <p class="font-poppins text-gray-700">{{ post.year }}</p>
              </div>

              <div class="mb-8">
                <h3 class="font-jetbrains font-bold text-lg sm:text-xl mb-2">Date</h3>
                <p class="font-poppins text-gray-700">{{ post.date }}</p>
              </div>

              <div class="mb-8">
                <h3 class="font-jetbrains font-bold text-lg sm:text-xl mb-2">Read Time</h3>
                <p class="font-poppins text-gray-700">{{ post.readTime }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div v-else class="text-center py-20">
        <p class="font-poppins text-gray-500">Loading...</p>
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
  name: 'BlogPost',
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
      allPosts: [
        { 
          id: 1, 
          title: "The Evolution of Underground Music", 
          subtitle: "Smart tools and routines to help freelancers stay organized, inspired, and productive",
          date: "March 30, 2026", 
          readTime: "5 min read", 
          author: "John Doe", 
          category: "MUSIC", 
          year: "2026", 
          image: img1, 
          content: "SOUND&VISION emerged from the vibrant underground music scene of Singosari, a collective of artists, musicians, and creators who believe in the power of raw, unfiltered expression. What started as small gatherings in hidden spaces has grown into a movement that celebrates the intersection of sound and visual artistry." 
        },
        { 
          id: 2, 
          title: "Digital Art in Modern Era", 
          subtitle: "Exploring the intersection of technology and creativity in contemporary art",
          date: "March 28, 2026", 
          readTime: "4 min read", 
          author: "Jane Smith", 
          category: "ART", 
          year: "2026", 
          image: img2, 
          content: "Digital art has transformed the way we create and experience visual expressions. From NFT collections to interactive installations, artists are pushing boundaries like never before." 
        },
        { 
          id: 3, 
          title: "Cultural Preservation Through Art", 
          subtitle: "How artists are keeping traditions alive through modern expression",
          date: "March 25, 2026", 
          readTime: "6 min read", 
          author: "Mike Johnson", 
          category: "CULTURE", 
          year: "2026", 
          image: img3, 
          content: "Art has always been a powerful tool for preserving cultural heritage. Today's artists are finding innovative ways to honor traditions while pushing creative boundaries." 
        },
        { 
          id: 4, 
          title: "Cultural Preservation Through Art", 
          subtitle: "How artists are keeping traditions alive through modern expression",
          date: "March 25, 2026", 
          readTime: "6 min read", 
          author: "Mike Johnson", 
          category: "CULTURE", 
          year: "2026", 
          image: img3, 
          content: "Art has always been a powerful tool for preserving cultural heritage. Today's artists are finding innovative ways to honor traditions while pushing creative boundaries." 
        }
      ],
      post: null
    }
  },
  mounted() {
    const postId = this.$route.params.id
    this.post = this.allPosts.find(p => p.id == parseInt(postId))
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