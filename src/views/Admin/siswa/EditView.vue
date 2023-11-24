<template>
  <div class="p-4 sm:ml-64">
    <br /><br /><br />
    <div class="list">
      <ul class="flex flex-wrap items-center text-gray-900 dark:text-white">
        <li  style="color: black;" >
          <button class="mr-4 hover:underline md:mr-6">Edit Siswa</button>
        </li>
      </ul>
    </div>

    <br />
    <div class="card shadow-md pl-4 pr-4"><br>
        <form @submit.prevent="editsiswa" class="pl-4 pr-4" method="post">
          <div>
            <label
              for="email"  style="color: black;"
              class="float-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Masukan nama</label
            >
            <input type="text" v-model="editsiswas.name"   class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"><br>
        </div>

        
                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">kelas</label>
                <select required   v-model="editsiswas.id_kelas" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                     <option :value="item.id" v-for="item in kelas">{{ item.kelas }}</option>
                </select>

                <br>

       
      <div>
        <label  style="color: black;"
          for="email"
          class="float-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Masukan email</label
        >
        <input type="email" v-model="editsiswas.email"   class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"><br>
    </div>

    <div>
        <label  style="color: black;"
          for="email"
          class="float-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Masukan password</label
        >
        <input type="text" v-model="editsiswas.password"   class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"><br>
    </div>


    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Simpan
    </button>
    <br><br>
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
      editsiswas: {
            name:null,
            email:null,
            password:null,
            id_kelas:null,
            roles: 'siswa'
      },
    };
  },
  methods: {
    ...mapActions("siswa", ["fecteditsiswa"]),
    editsiswa() {
      this.fecteditsiswa(this.editsiswas);
    },
  },
  computed: {
    ...mapState('kelas',['kelas']),
    ...mapState("siswa", ["singlesiswa"]),
  },
  mounted() {
    this.$store.dispatch("siswa/fetchsiswaid", this.id);
    this.editsiswas.name = this.singlesiswa.name;
    this.editsiswas.id_kelas = this.singlesiswa.id_kelas;
    this.editsiswas.email = this.singlesiswa.email;
    this.$store.dispatch("kelas/fectkelas");
  },
  setup(props, context) {
    onMounted(() => {
      try {
        context.emit("id-menu", 2);
      } catch (error) {
        console.log(error);
      }
    });
  },
};
</script>
