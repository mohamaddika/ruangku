<template>
  <div class="p-4 sm:ml-64">
    <br /><br /><br />
    <div class="list">
      <ul class="flex flex-wrap items-center text-gray-900 dark:text-white">
        <li style="color: black">
          <button class="mr-4 hover:underline md:mr-6"><b>Data Semua Siswa</b></button>
        </li>
      </ul>
      <br />
    </div>
    <a
      @click="create_siswa"
      class="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded btn-sm"
      >Tambah Siswa</a
    >
    &nbsp;
    <br><br>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   NO
                </th>
                <th scope="col" class="px-6 py-3">
                   Kelas
                </th>
                <th scope="col" class="px-6 py-3">
                   Siswa
                </th>
                <th>
                  Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in siswa" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {{ index + 1 }}
                </th>
                <td class="px-6 py-4">
                  {{ item.id_kelas }}
                </td>
                <td class="px-6 py-4">
                  {{ item.name }}
                </td>
                <td style="color: black" class="px-6 py-4">
              <router-link :to="'/admin/siswa/edit/' + item.id">
                <a
                  href="#"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded btn-sm"
                  ><i class="bi bi-pen-fill"></i
                ></a>
                &nbsp;
              </router-link>
              <router-link :to="'/admin/siswa/detail/' + item.id">
                <a
                  href="#"
                  @click="details(item.id)"
                  class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded btn-sm"
                  ><i class="bi bi-eye-fill"></i
                ></a>
                &nbsp;
              </router-link>
              <a
                href="#"
                @click="deletes(item.id)"
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded btn-sm"
                ><i class="bi bi-trash2"></i
              ></a>
              &nbsp;
            </td>
                
            </tr>
        </tbody>
    </table>
</div>
  </div>
</template>
<script>
import axios from "axios";
import { ref } from "vue";
import { onMounted } from "vue";
import { mapActions, mapState } from "vuex";
export default {
  setup(props, context) {
    onMounted(() => {
      try {
        context.emit("id-menu", 2);
      } catch (error) {
        console.log(error);
      }
    });
  },
  data() {
    return {
      no: 0,
    };
  },
  computed: {
    ...mapState("siswa", ["siswa"]),
  },
  mounted() {
    this.$store.dispatch("siswa/fetchsiswa");
  },
  methods: {
    ...mapActions("siswa", ["fetchsiswaid"]),
    ...mapActions("siswa", ["fectsiswadelete"]),
    create_siswa() {
      this.$router.push("/admin/siswa/create");
    },
    deletes(params) {
      this.fectsiswadelete(params);
    },
    details(params) {
      this.fetchsiswaid(params);
    },
    tabungans(params) {
      console.log(params);
    },
  },
};
</script>
