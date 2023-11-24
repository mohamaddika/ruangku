<template>
  <div class="p-4 sm:ml-64">
    <br /><br /><br />
    <div class="list">
      <ul class="flex flex-wrap items-center text-gray-900 dark:text-white">
        <li style="color: black">
          <button class="mr-4 hover:underline md:mr-6">Tambah Tugas</button>
        </li>
      </ul>
    </div>
    <br />
    <div class="card shadow-md pl-4 pr-4">
      <br />
      <form @submit.prevent="edittugas" class="pl-4 pr-4" method="post">
        <div>
          <label
            for="kelas"
            style="color: black"
            class="float-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Masukan Hari</label
          >
          <select
            id="hari"
            v-model="edittugass.id_hari"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option :value="haris.id" v-for="haris in hari" :key="haris.id">
              {{ haris.hari }}
            </option>
          </select>
        </div>

        <br />

        <div>
          <label
            for="kelas"
            style="color: black"
            class="float-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Masukan Kelas</label
          >
          <select
            id="kelas"
            v-model="edittugass.id_kelas"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option :value="kelass.id" v-for="kelass in kelas" :key="kelass.id">
              {{ kelass.kelas }}
            </option>
          </select>
        </div>

        <br />
        <div>
          <label
            for="mapel"
            style="color: black"
            class="float-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Masukan Mapel</label
          >
          <select
            id="mapel"
            v-model="edittugass.id_mapel"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option :value="mapels.id" v-for="mapels in mapel" :key="mapels.id">
              {{ mapels.mapel }}
            </option>
          </select>
        </div>
        <br />

        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Deskripsi</label
        >
        <textarea
          id="message"
          v-model="edittugass.tugas"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="tugas..."
        ></textarea>
        <br />
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Simpan
        </button>
        <br /><br />
      </form>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { mapActions, mapState } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      edittugass: {
        id_hari: null,
        id_kelas: null,
        id_mapel: null,
        tugas: null,
      },
    };
  },
  methods: {
    ...mapActions("tugas", ["fectedittugas"]),
    edittugas() {
      this.fectedittugas(this.edittugass);
    },
  },
  computed: {
    ...mapState("hari", ["hari"]),
    ...mapState("kelas", ["kelas"]),
    ...mapState("mapel", ["mapel"]),
    ...mapState("tugas", ["singletugas"]),
  },
  mounted() {
    this.$store.dispatch("hari/fecthari");
    this.$store.dispatch("kelas/fectkelas");
    this.$store.dispatch("mapel/fectmapel");
    this.$store.dispatch("tugas/fetchtugasid", this.id);
    this.edittugass.id_hari = this.singletugas.id_hari;
    this.edittugass.id_kelas = this.singletugas.id_kelas;
    this.edittugass.id_mapel = this.singletugas.id_mapel;
    this.edittugass.tugas = this.singletugas.tugas;
  },

  setup(props, context) {
    onMounted(() => {
      try {
        context.emit("id-menu", 7);
      } catch (error) {
        console.log(error);
      }
    });
  },
};
</script>
