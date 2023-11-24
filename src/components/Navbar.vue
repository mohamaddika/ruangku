<template>
  <nav class="fixed top-0 z-50 w-full bg-white border-b shadow-md border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <a href="https://flowbite.com" class="flex ml-2 md:mr-24">
              <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">𝗿𝘂𝗮𝗻𝗴𝗸𝘂.𝗰𝗼𝗺</span>
            </a>
          </div>
        </div>
      </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import { mapActions, mapState } from 'vuex';
export default {
computed:{
       ...mapState('navbar',['navbar'])
  },
  methods:{
    ...mapActions("navbar", ["fetchnavbar"]),
      show(params){
             this.fetchnavbar(params)
      },
      hide(params){
             this.fetchnavbar(params)
      },
  },
}
</script>