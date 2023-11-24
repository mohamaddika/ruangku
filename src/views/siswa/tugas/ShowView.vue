<template>
    <div class="p-4 sm:ml-64">
     <br><br> 
     <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{{ tugas_siswa_detail.mata_pelajaran }}</h5>
  <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{{ tugas_siswa_detail.nama_tugas }}</p>
<b style="float: left;">Jawaban Anda : </b>
<p style="float: left;" class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{{ tugas_siswa_detail.isi_tugas }}</p><br><br><br>
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
