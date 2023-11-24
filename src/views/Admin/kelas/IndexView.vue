<template>
  <div class="p-4 sm:ml-64">
    <br /><br /><br />
    <div class="list">
      <ul class="flex flex-wrap items-center text-gray-900 dark:text-white">
        <li style="color: black">
          <button class="mr-4 hover:underline md:mr-6"> <b>Data Semua Kelas</b></button>
        </li>
      </ul>
      <br />
    </div>
  <router-link to="/admin/kelas/create">
      <a
        class="float-right cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded btn-sm"
        >Tambah Kelas</a
      >
    </router-link>
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
                <th>
                  Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in kelas" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  {{ index + 1 }}
                </th>
                <td class="px-6 py-4">
                  {{ item.kelas }}
                </td>
                <td style="color: black" class="px-6 py-4">
              <router-link :to="'/admin/kelas/edit/' + item.id">
                <a
                  href="#"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded btn-sm"
                  ><i class="bi bi-pen-fill"></i
                ></a>
                &nbsp;
              </router-link>

              <router-link :to="'/admin/kelas/tugas/' + item.id">
                <a
                  href="#"
                  class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded btn-sm"
                  >TUGAS</a
                >
                &nbsp;
              </router-link>

              <a
                href="#"
                @click="deletes(item.id)"
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded btn-sm"
                ><i class="bi bi-trash2"></i
              ></a>
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
        context.emit("id-menu", 4);
      } catch (error) {
        console.log(error);
      }
    });
  },
  computed: {
    ...mapState("kelas", ["kelas"]),
  },
  mounted() {
    this.$store.dispatch("kelas/fectkelas");
  },
  methods: {
    ...mapActions("kelas", ["fectkelasdelete"]),
    deletes(params) {
      this.fectkelasdelete(params);
    },
  },
};
</script>
