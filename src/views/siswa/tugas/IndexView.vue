<template>
  <div class="p-4 sm:ml-64">
    <br />
    <div class="list">
      <ul class="flex flex-wrap items-center text-gray-900 dark:text-white">
        <li style="color: black">
          <button class="mr-4 hover:underline md:mr-6"><b>Data Semua Tugas</b></button>
        </li>
      </ul>
      <br />
    </div>
<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Filter</label>
<select v-model="filter.filter_status" id="countries" @click="filterjobs()" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option value="0">Belum Di Kerjakan</option>
  <option value="1">Sudah Di Kerjakan</option>
</select>
<br><br>  

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Mata Pelajaran
                </th>
                <!-- <th scope="col" class="px-6 py-3">
                    Judul Tugas
                </th> -->
                <th scope="col" class="px-6 py-3">
                    Kelas
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="items in filterdatatugasiswas" :key="items.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                   <span class="px-6 py-4">{{ items.mata_pelajaran }}</span> 
                </th>
                <!-- <td class="px-6 py-4">
                  {{ items.nama_tugas }}
                </td> -->
                <td class="px-6 py-4">
                  {{ items.kelas }}
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center" v-if="items.status == 1">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Sudah Di Kerjakan
                  </div>
                  <div class="flex items-center" v-else>
                        <div class="h-2.5 w-2 .5 rounded-full bg-yellow-500 mr-2"></div> Belum  Di Kerjakan
                  </div>
                </td>
                
                <td class="px-6 py-4">
                  <span v-if="items.status == 0">
                  <router-link :to="'/siswa/tugas/pengumpulan/' + items.id">
                <a
                  href="#"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded btn-sm"
                  ><i class="bi bi-pen-fill"></i
                ></a>
                &nbsp;
              </router-link>
                </span>
                <span v-else>
                  <router-link :to="'/siswa/tugas/show/' + items.id">
                <a
                  href="#" style="background: rgb(238, 255, 0);"
                  class="bg-yellow-700-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded btn-sm"
                  >show</a>
                &nbsp;
              </router-link>
                </span>
                </td>
            </tr>
        </tbody>
    </table>
</div>
{{ tugas }}
  </div>
  
</template>
<script>
import { mapActions, mapState } from "vuex";
import { onMounted } from "vue";
export default {
  data() {
    return {
      mata_pelajaran: null,
      filterdatatugasiswas : null,
      filter:{
        filter_status: null
      }
    };
  },
  methods:{
    ...mapActions('tugas_siswa', ['fectfiltertugas']),
    filterjobs(){
        this.fectfiltertugas(this.filter)
    }
  },
  computed: {
    ...mapState("tugas", ["tugas"]),
    ...mapState("tugas_siswa", ["tugas_siswa"]),
    siswa() {
      return JSON.parse(localStorage.user);
    },
    tugas() {
           const filteredTugas = this.tugas_siswa.filter(element => element.id_user === this.siswa.id);
           this.filterdatatugasiswas =filteredTugas
     }

  },
  mounted() {
    this.$store.dispatch("tugas/fecttugas");
    this.$store.dispatch("tugas_siswa/fetchtugasiswa");
  },

  setup(props, context) {
    onMounted(() => {
      try {
        context.emit("id-menu", "siswa");
        context.emit("id-siswa", 101);
      } catch (error) {
        console.log(error);
      }
    });
  },
};
</script>
