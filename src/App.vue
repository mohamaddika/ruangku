  <template>
    <div v-if="idMenu != 'siswa'">
      <Navbar v-if="idMenu != 0"></Navbar>
      <SeedbarComponent
        v-if="idMenu != 0"
        :id-menu="idMenu"
        :key="idMenu"
      ></SeedbarComponent>
    </div>
    <div v-else>
      <SeedbarComponentSiswa
        :id-siswa="idSiswa"
        :key="idSiswa"
      ></SeedbarComponentSiswa>
    </div>
    <div class="flex-grow flex-shrink" v-if="idMenu != 'siswa'">
      <RouterView @id-menu="setMenu($event)"></RouterView>
    </div>
    <div class="flex-grow flex-shrink" v-else>
      <RouterView @id-siswa="SetSiswa($event)"></RouterView>
    </div>
  </template>

  <script>
  import { ref } from "vue";
  import SeedbarComponentSiswa from "./components/Siswa/SeederbarComponent.vue";
  import Navbar from "./components/Navbar.vue";
  import SeedbarComponent from "./components/SeedbarComponent.vue";
  export default {
    components: {
      Navbar,
      SeedbarComponent,
      SeedbarComponentSiswa,
    },
    setup() {
      const idMenu = ref(0);
      const idSiswa = ref(0);

      function setMenu(id) {
        idMenu.value = id;
      }
      function SetSiswa(id) {
        idSiswa.value = id;
      }
      return {
        idMenu,
        idSiswa,
        setMenu,
        SetSiswa,
      };
    },
  };
  </script>
