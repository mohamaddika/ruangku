<template>
      <div class="p-4 sm:ml-64">
       <br><br> 
<div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{{ tugas_siswa_detail.mata_pelajaran }}</h5>
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{{ tugas_siswa_detail.nama_tugas }}</p>
    <p style="float: left;" class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{{ tugas_siswa_detail.deskripsi_tugas }}</p><br><br><br>
    <label for="chat" class="sr-only">Masukan </label>
    <form action=""  @submit.prevent="adddpengerjaan">
    <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
        <textarea v-model="data.isi_tugas" id="chat" rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Tugas..."></textarea>
            <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
            <svg class="w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
            </svg>
            <span class="sr-only">Send message</span>
        </button>
    </div>
  </form>
  </div>
      </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { onMounted } from "vue";
export default {
  props:['id'],
  data(){
    return {
        data : {
           isi_tugas:null,
           status:1
        }
    }
  },
  methods:{
    ...mapActions('tugas_siswa',['kumpulkan_tugas']),
     adddpengerjaan(){
      this.kumpulkan_tugas(this.data);
     },
  },
  computed:{
    ...mapState("tugas_siswa", ["tugas_siswa_detail"]),
  },
  mounted(){
    this.$store.dispatch("tugas_siswa/fecthtugassiswadetail",this.id);
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
