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
          
          <button @click="toggleMenu" class="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none">
            <span class="block w-6 h-0.5 bg-black mb-1 transition-all duration-300" :class="{'rotate-45 translate-y-1.5': isOpen}"></span>
            <span class="block w-6 h-0.5 bg-black mb-1 transition-all duration-300" :class="{'opacity-0': isOpen}"></span>
            <span class="block w-6 h-0.5 bg-black transition-all duration-300" :class="{'-rotate-45 -translate-y-1.5': isOpen}"></span>
          </button>
        </div>
        
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
      
      <div class="absolute bottom-0 left-0 right-0 flex justify-center">
        <div class="w-full max-w-screen-2xl mx-auto px-4">
          <div class="h-0.5 bg-black"></div>
        </div>
      </div>
    </nav>

    <main class="max-w-screen-2xl mx-auto px-4 py-12 sm:py-16 md:py-20">
      <div v-if="item">
        <!-- Back to Gallery -->
        <div class="mb-8">
          <router-link to="/gallery" class="font-poppins text-gray-600 hover:text-black transition-colors">
            ← Back to Gallery
          </router-link>
        </div>

        <!-- Title Section -->
        <div class="mb-12">
          <div class="lg:flex lg:gap-8 lg:gap-12">
            <div class="lg:w-80 lg:flex-shrink-0"></div>
            <div class="lg:flex-1">
              <h1 class="font-jetbrains font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 break-words">
                {{ item.title }}
              </h1>
              <p class="font-poppins text-gray-600 text-lg sm:text-xl md:text-2xl leading-relaxed break-words">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Two Column Layout -->
        <div class="w-full">
          <!-- Desktop layout -->
          <div class="hidden lg:flex gap-8 lg:gap-12">
            <!-- Left Column - Info -->
            <div class="w-80 flex-shrink-0">
              <div class="sticky top-24">
                <div class="mb-8">
                  <h3 class="font-jetbrains font-bold text-lg sm:text-xl mb-2">Artist</h3>
                  <p class="font-poppins text-gray-700">{{ item.artist }}</p>
                </div>
                
                <div class="mb-8">
                  <h3 class="font-jetbrains font-bold text-lg sm:text-xl mb-2">Category</h3>
                  <p class="font-poppins text-gray-700">{{ item.category }}</p>
                </div>
                
                <div class="mb-8">
                  <h3 class="font-jetbrains font-bold text-lg sm:text-xl mb-2">Year</h3>
                  <p class="font-poppins text-gray-700">{{ item.year }}</p>
                </div>

                <div class="mb-8">
                  <h3 class="font-jetbrains font-bold text-lg sm:text-xl mb-2">Medium</h3>
                  <p class="font-poppins text-gray-700">{{ item.medium }}</p>
                </div>
              </div>
            </div>

            <!-- Vertical Divider -->
            <div class="w-px bg-gray-300"></div>

            <!-- Right Column - Collage Sections -->
            <div class="flex-1 space-y-2">
              <!-- Section 1: Gambar besar di atas, 2 gambar di bawah -->
              <div>
                <div class="flex flex-col gap-2">
                  <div class="overflow-hidden rounded-lg border border-black">
                    <img 
                      :src="item.image" 
                      :alt="item.title" 
                      class="w-full h-96 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div class="grid grid-cols-2 gap-2">
                    <div v-for="(img, index) in item.collageImages" :key="index" class="overflow-hidden rounded-lg border border-black">
                      <img 
                        :src="img"
                        :alt="`${item.title} detail ${index + 1}`"
                        class="w-full h-96 object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Section 2: 1 gambar landscape -->
              <div>
                <div class="overflow-hidden rounded-lg border border-black">
                  <img 
                    :src="item.landscapeImage" 
                    :alt="`${item.title} landscape`"
                    class="w-full h-96 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>

              <!-- Section 3: Grid 2 kolom - kiri 2 gambar vertikal, kanan tinggi total -->
              <div>
                <div class="grid grid-cols-2 gap-2">
                  <div class="flex flex-col gap-2">
                    <div class="overflow-hidden rounded-lg border border-black">
                      <img 
                        :src="item.section3Images[0]" 
                        :alt="`${item.title} section3 image 1`"
                        class="w-full h-96 object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div class="overflow-hidden rounded-lg border border-black">
                      <img 
                        :src="item.section3Images[1]" 
                        :alt="`${item.title} section3 image 2`"
                        class="w-full h-96 object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </div>
                  <div class="overflow-hidden rounded-lg border border-black">
                    <img 
                      :src="item.section3Images[2]" 
                      :alt="`${item.title} section3 image 3`"
                      class="w-full h-[776px] object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile/Tablet layout -->
          <div class="lg:hidden">
            <!-- Section 1 -->
            <div class="flex flex-col gap-2 mb-2">
              <div class="overflow-hidden rounded-lg border border-black">
                <img 
                  :src="item.image" 
                  :alt="item.title" 
                  class="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div class="grid grid-cols-2 gap-2">
                <div v-for="(img, index) in item.collageImages" :key="index" class="overflow-hidden rounded-lg border border-black">
                  <img 
                    :src="img"
                    :alt="`${item.title} detail ${index + 1}`"
                    class="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </div>

            <!-- Section 2 -->
            <div class="mb-2">
              <div class="overflow-hidden rounded-lg border border-black">
                <img 
                  :src="item.landscapeImage" 
                  :alt="`${item.title} landscape`"
                  class="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>

            <!-- Section 3 -->
            <div class="flex flex-col gap-2 mb-2">
              <div class="grid grid-cols-2 gap-2">
                <div class="overflow-hidden rounded-lg border border-black">
                  <img 
                    :src="item.section3Images[0]" 
                    :alt="`${item.title} section3 image 1`"
                    class="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div class="overflow-hidden rounded-lg border border-black">
                  <img 
                    :src="item.section3Images[1]" 
                    :alt="`${item.title} section3 image 2`"
                    class="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
              <div class="overflow-hidden rounded-lg border border-black">
                <img 
                  :src="item.section3Images[2]" 
                  :alt="`${item.title} section3 image 3`"
                  class="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
            
            <div class="w-full h-px bg-gray-300 my-8"></div>
            
            <div>
              <div class="mb-8">
                <h3 class="font-jetbrains font-bold text-lg sm:text-xl mb-2">Artist</h3>
                <p class="font-poppins text-gray-700">{{ item.artist }}</p>
              </div>
              
              <div class="mb-8">
                <h3 class="font-jetbrains font-bold text-lg sm:text-xl mb-2">Category</h3>
                <p class="font-poppins text-gray-700">{{ item.category }}</p>
              </div>
              
              <div class="mb-8">
                <h3 class="font-jetbrains font-bold text-lg sm:text-xl mb-2">Year</h3>
                <p class="font-poppins text-gray-700">{{ item.year }}</p>
              </div>

              <div class="mb-8">
                <h3 class="font-jetbrains font-bold text-lg sm:text-xl mb-2">Medium</h3>
                <p class="font-poppins text-gray-700">{{ item.medium }}</p>
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
            <h3 class="font-jetbrains font-bold text-2xl sm:text-3xl text-white">SOUND&VISION</h3>
          </div>
          <div class="md:w-2/3 flex flex-col sm:flex-row flex-wrap justify-start md:justify-end gap-6 sm:gap-8 md:gap-12">
            <div class="max-w-[100px]">
              <h4 class="font-poppins font-semibold text-white mb-3">PAGE</h4>
              <ul class="space-y-2">
                <li><router-link to="/" class="font-poppins text-gray-400 hover:text-white text-sm">HOME</router-link></li>
                <li><router-link to="/about" class="font-poppins text-gray-400 hover:text-white text-sm">ABOUT</router-link></li>
                <li><router-link to="/blog" class="font-poppins text-gray-400 hover:text-white text-sm">BLOG</router-link></li>
                <li><router-link to="/gallery" class="font-poppins text-gray-400 hover:text-white text-sm">GALLERY</router-link></li>
              </ul>
            </div>
            <div class="hidden sm:block w-px bg-white"></div>
            <div class="max-w-[100px]">
              <h4 class="font-poppins font-semibold text-white mb-3">CONTACT</h4>
              <ul class="space-y-2">
                <li><a href="mailto:singosariundergroundarmy@gmail.com" class="font-poppins text-gray-400 hover:text-white text-sm break-words">singosariundergroundarmy@gmail.com</a></li>
              </ul>
            </div>
            <div class="hidden sm:block w-px bg-white"></div>
            <div class="max-w-[100px]">
              <h4 class="font-poppins font-semibold text-white mb-3">SOCIAL</h4>
              <ul class="space-y-2">
                <li><a href="http://www.youtube.com/@singosariundergroundarmy7141" target="_blank" class="font-poppins text-gray-400 hover:text-white text-sm">YOUTUBE</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-full h-px bg-white my-8 sm:my-10 md:my-12"></div>
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div class="font-poppins text-gray-400 text-xs sm:text-sm">Designed by <span class="font-bold text-white">"Those Who About to Rock"</span></div>
          <div class="font-poppins text-gray-400 text-xs sm:text-sm">&copy; SOUND&VISION. All Rights Reserved</div>
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
  name: 'GalleryPost',
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
      allItems: [
        { 
          id: 1, 
          title: "Urban Street Art", 
          description: "Vibrant murals capturing the spirit of city life",
          artist: "Alex Turner", 
          category: "ART", 
          year: "2025", 
          medium: "Spray Paint on Canvas",
          image: img1,
          collageImages: [img2, img3],
          landscapeImage: img4,
          section3Images: [img5, img6, img1]
        },
        { 
          id: 2, 
          title: "Music Festival 2025", 
          description: "Capturing the energy and excitement of live performances",
          artist: "Sarah Williams", 
          category: "EVENT", 
          year: "2025", 
          medium: "Digital Photography",
          image: img2,
          collageImages: [img1, img3],
          landscapeImage: img4,
          section3Images: [img5, img6, img2]
        },
        { 
          id: 3, 
          title: "City Night Lights", 
          description: "Long exposure photography of urban landscapes at night",
          artist: "John Doe", 
          category: "PHOTOGRAPHY", 
          year: "2024", 
          medium: "Long Exposure Photography",
          image: img3,
          collageImages: [img1, img2],
          landscapeImage: img4,
          section3Images: [img5, img6, img3]
        },
        { 
          id: 4, 
          title: "Modern Architecture", 
          description: "Exploring form and function in contemporary design",
          artist: "Jane Smith", 
          category: "DESIGN", 
          year: "2025", 
          medium: "Architectural Photography",
          image: img4,
          collageImages: [img2, img3],
          landscapeImage: img1,
          section3Images: [img5, img6, img4]
        },
        { 
          id: 5, 
          title: "Abstract Expression", 
          description: "Exploring emotion through color and form",
          artist: "Mike Johnson", 
          category: "ART", 
          year: "2024", 
          medium: "Acrylic on Canvas",
          image: img5,
          collageImages: [img1, img2],
          landscapeImage: img3,
          section3Images: [img4, img6, img5]
        },
        { 
          id: 6, 
          title: "Concert Moments", 
          description: "Behind the scenes of live music performances",
          artist: "Emma Wilson", 
          category: "EVENT", 
          year: "2025", 
          medium: "Documentary Photography",
          image: img6,
          collageImages: [img1, img2],
          landscapeImage: img3,
          section3Images: [img4, img5, img6]
        }
      ],
      item: null
    }
  },
  mounted() {
    const itemId = this.$route.params.id
    this.item = this.allItems.find(i => i.id == parseInt(itemId))
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