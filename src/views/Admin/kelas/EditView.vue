<template>
  <div class="p-4 sm:ml-64">
    <br /><br /><br />
    <div class="list">
      <ul class="flex flex-wrap items-center text-gray-900 dark:text-white">
        <li style="color: black">
          <button class="mr-4 hover:underline md:mr-6">Edit Kelas</button>
        </li>
      </ul>
    </div>
    <br />
    <div class="card shadow-md pl-4 pr-4">
      <br />
      <form @submit.prevent="editkelass" class="pl-4 pr-4" method="post">
        <div>
          <label
            for="kelas"
            style="color: black"
            class="float-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Masukan Kelas</label
          >
          <input
            type="text"
            v-model="editkelas.kelas"
            class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          /><br />
        </div>
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
import axios from "axios";
import { ref } from "vue";
import { onMounted } from "vue";
import { mapActions, mapState } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      editkelas: {
        kelas: null,
      },
    };
  },
  computed: {
    ...mapState("kelas", ["singelkelas"]),
  },
  mounted() {
    this.$store.dispatch("kelas/fetchkelasshow", this.id);
    this.editkelas.kelas = this.singelkelas.kelas;
  },
  methods: {
    ...mapActions("kelas", ["fetchkelasedit"]),
    editkelass() {
      this.fetchkelasedit(this.editkelas);
    },
  },

  setup(props, context) {
    onMounted(() => {
      try {
        context.emit("id-menu", 4);
      } catch (error) {
        console.log(error);
      }
    });
  },
};
</script>
