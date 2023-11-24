<template>
  <div>
    <button
      v-if="navbarsiswa == true"
      data-drawer-target="logo-sidebar"
      data-drawer-toggle="logo-sidebar"
      aria-controls="logo-sidebar"
      type="button"
      @click="showseed(false)"
      style="background: blue; width: 95%"
      class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <span class="sr-only">Open sidebar</span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Bagian SVG Anda -->
      </svg>
      <span class="text-white"> Buka Menu</span>
    </button>

    <aside
      id="logo-sidebar"
      :class="
        navbarsiswa == true
          ? 'fixed top-0 shadow-xl border-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
          : 'fixed top-0 shadow-xl border-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0'
      "
      aria-label="Sidebar"
    >
      <div
        class="h-full px-3 py-4 overflow-y-auto shadow-xl dark:bg-gray-800"
        style="background: blue"
      >
        <div class="grid grid-cols-2 gap-5">
          <span
            v-if="navbarsiswa == false"
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            style="cursor: pointer"
            @click="showseed(true)"
            class="inline-flex bg-white p-1 mt-4 mb-4 ml-1 mr-7 rounded sm:hidden focus:outline-none"
          >
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- Bagian SVG Anda -->
            </svg>
            <i class="bi bi-arrow-left-square"></i>
          </span>
          <!-- ... -->
          <div>
            <div class="flex items-center">
              <br /><br /><br />
              <img
                class="w-10 h-10 rounded-full mr-4"
                src="data:image/jpeg;base64,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"
                alt="Avatar of Jonathan Reinink"
              />
              <div class="text-sm">
               <b> <p class="text-black-900 leading-none">{{ siswa.name }}</p></b>
                <b><p class="text-black-600">{{ siswa.id_kelas }}</p></b>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <hr class="mb-2 mt-2" />

        <ul class="space-y-2 font-medium">
          <!-- Gunakan router-link untuk navigasi -->
          <router-link to="/siswa/dashboard">
            <li :class="setActivedNavClass(rl.dashboard)">
              <a
                class="flex items-center p-2 text-white- rounded-lg dark:text-white group"
              >
                <svg
                  :class="setActivedNavClass(rl.dashboard)"
                  class="w-5 h-5 text-gray-500 transition duration-75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <!-- Bagian SVG Anda -->
                </svg>
                <span class="ml-3">Dashboard</span>
              </a>
            </li>
          </router-link>
          <hr class="mt-3" />
          <br />
          <router-link to="/siswa/tugas" style="cursor: pointer">
            <li :class="setActivedNavClass(rl.tugas)">
              <a class="flex items-center p-2 text-gray-900 rounded-lg group">
                <svg
                  :class="setActivedNavClass(rl.tugas)"
                  class="flex-shrink-0 w-5 h-5 transition duration-75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <!-- Bagian SVG Anda -->
                </svg>
                <span
                  :class="setActivedNavClass(rl.tugas)"
                  class="flex-1 ml-3 whitespace-nowrap"
                  >Tugas</span
                >
                <span
                  class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
                  >  {{ lengthtugasbelumdikerjakan() }}</span
                >
              </a>
            </li> </router-link
          ><br />

          <router-link to="/siswa/absen" style="cursor: pointer">
            <li :class="setActivedNavClass(rl.absen)">
              <a class="flex items-center p-2 text-gray-900 rounded-lg group">
                <svg
                  :class="setActivedNavClass(rl.absen)"
                  class="flex-shrink-0 w-5 h-5 transition duration-75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <!-- Bagian SVG Anda -->
                </svg>
                <span
                  :class="setActivedNavClass(rl.absen)"
                  class="flex-1 ml-3 whitespace-nowrap"
                  >Absen</span
                >
                
              </a>
            </li> </router-link
          >
          <br>
          <button
            style="width: 100%"
            class="bg-white hover:bg-white text-black font-bold py-2 px-4 rounded"
            @click="logouts"
          >
            Logout
          </button>
        </ul>
      </div>
    </aside>
  </div>
</template>

<!-- Sisa dari kode Anda -->

<script>
import { ref } from "vue";
import { mapActions, mapState } from "vuex";
export default {
  props: {
    idSiswa: Number,
  },
  computed: {
    ...mapState("navbar", ["navbarsiswa"]),
    ...mapState("tugas_siswa", ["tugas_siswa"]),
    siswa() {
      return JSON.parse(localStorage.user);
    },
  },
  mounted(){
    this.$store.dispatch("tugas_siswa/fetchtugasiswa");
  },
  methods: {
    ...mapActions("navbar", ["fetchnavbarsiswa"]),
    ...mapActions("auth", ["logoutsiswa"]),
    showseed(params) {
      this.fetchnavbarsiswa(params);
    },
    lengthtugasbelumdikerjakan(){
      const id_siswa =  JSON.parse(localStorage.user);
      const selasaTugas = this.tugas_siswa.filter((element) => element.id_user === id_siswa.id && element.status == 0);
      return selasaTugas.length;
    },
    logouts() {
      const log = confirm("Apakah yakin ingin Logout");
      if (log) {
        this.logoutsiswa();
        window.location.href = "/";
      }
    },
  },
  setup(props) {
    const rl = ref({ dashboard: false, tugas: false, absen: false });
    if (props.idSiswa == 100) {
      rl.value.dashboard = true;
    }
    if (props.idSiswa == 101) {
      rl.value.tugas = true;
    }
    if (props.idSiswa == 102) {
      rl.value.absen = true;
    }

    return {
      rl,
    };
  },
  data() {
    return {
      setActivedNavClass(e) {
        let txtClass = "";
        try {
          if (e) {
            txtClass = "bg-blue-500 rounded text-black text-black-500";
          } else {
            txtClass = "";
          }
        } catch (err) {
          console.log(err);
          return 0;
        } finally {
          return txtClass;
        }
      },
    };
  },
};
</script>
