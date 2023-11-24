<template>
    <div class="p-4 sm:ml-64">
      <br /><br /><br />
      <div class="list">
        <ul class="flex flex-wrap items-center text-gray-900 dark:text-white">
          <li  style="color: black;">
                 <button  class="mr-4 hover:underline md:mr-6">Tambah Siswa</button>
          </li>
        </ul>
      </div>
  
   <br>
      <div class="card shadow-md pl-4 pr-4"><br>
        <form @submit.prevent="addsiswa" class="pl-4 pr-4" method="post">
          <div>
            <label
              for="email"  style="color: black;"
              class="float-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Masukan nama</label
            >
            <input type="text" v-model="addsiswas.name"   class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"><br>
        </div>

        
                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">kelas</label>
                <select required   v-model="addsiswas.id_kelas" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                     <option :value="item.id" v-for="item in kelas">{{ item.kelas }}</option>
                </select>

                <br>

       
      <div>
        <label  style="color: black;"
          for="email"
          class="float-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Masukan email</label
        >
        <input type="email" v-model="addsiswas.email"   class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"><br>
    </div>

    <div>
        <label  style="color: black;"
          for="email"
          class="float-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Masukan password</label
        >
        <input type="text" v-model="addsiswas.password"   class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"><br>
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
import { mapActions ,mapState} from 'vuex';
export default {

    data(){
        return{
          addsiswas:{
            name:null,
            email:null,
            password:null,
            id_kelas:null,
          }
        }
    },
    methods:{   
      ...mapActions('siswa',['fetchsiswaadd']),
        addsiswa(){
             this.fetchsiswaadd(this.addsiswas)
        }
    },

    computed:{
      ...mapState('kelas',['kelas'])
    },
    mounted() {
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
}
</script>
  