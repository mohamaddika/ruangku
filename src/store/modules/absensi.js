import axios from "axios";
export default {
  namespaced: true,
  state: {
    absensi: [],
  },
  getters: {
    getsiswaabsen: (state) => state.absensi,
  },
  actions: {
    async fectabsensiswa({ commit }, data) {
      try {
        console.log(data)
        const absensi = await axios.post(
          "https://api-laravel-pkl.000webhostapp.com/public/api/user/absensi",
          data,
          {
            headers: { "content-type": "application/x-www-form-urlencoded" },
          }
        );
        commit("SET_Absensi", absensi.data.data);
      } catch (error) {
        // alert("Ada error");
        console.log(error);
      }
    //    finally {
    //     window.location.href = "/siswa/absen";
    //   }
    },

  },
  mutations: {
    SET_Absensi(state, absensi) {
      state.absensi = absensi;
    },
  },
};
