<template>
  <div class="p-4 sm:ml-64 container-mx-auto">
    <br /><br /><br />
    <div role="alert">
      <div style="background:#0400ff" class="text-white font-bold rounded-t px-4 py-2">
        Selamat datang {{ user.name }}
      </div>
      <div 
        class="border border-t-0rounded-b bg-blue-100 px-4 py-3"
        style="color: black;  "
      >
        <p>Data data Tabungan Anda , Dan Data Siswa , Riwayat Tabungan</p>
      </div>
    </div>
    <br />
    <div class="bg-white">
      <div
        class="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div class="group relative">
          <div class="mt-2 flex justify-between shadow-md">
            <br /><br />
            <div>
              <h3 class="text-sm text-gray-700">
                <br />
                <b>Siswa : {{ siswa.length }} </b>
                <br /><br />
              </h3>
            </div>
            <br />
          </div>
        </div>
        <div class="group relative">
          <div class="mt-2 flex justify-between shadow-md">
            <br /><br />
            <div>
              <h3 class="text-sm text-gray-700">
                <br />
                <b> Riwayat Tabungan </b>
                <br /><br />
              </h3>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { onMounted } from "vue";
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("siswa", ["siswa"]),
    ...mapState("me", ["userdata"]),

    user() {
      return JSON.parse(localStorage.user);
    },
  },
  mounted() {
    this.$store.dispatch("siswa/fetchsiswa");
  },
  setup(props, context) {
    onMounted(() => {
      try {
        context.emit("id-menu", 1);
      } catch (error) {
        console.log(error);
      }
    });
  },
};
</script>
