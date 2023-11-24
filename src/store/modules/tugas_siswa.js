import axios from "axios";

export default {
  namespaced: true,
  state: {
    tugas_siswa: [],
    tugas_siswa_detail: [],
  },
  getters: {
    gettugas_siswa: (state) => state.tugas_siswa,
    getsingle_siswa: (state) => state.tugas_siswa_detail,
  },
  actions: {


    async fectfiltertugas({commit} , data) {
        try{
          const datasiswa = await axios.post(
            "https://crudapilocalkuy.000webhostapp.com/api/user/tugas-pengumpulan/filter-status-pengerjaan",
            data,
            {
              headers: { "content-type": "application/x-www-form-urlencoded" },
            }
          );
          commit("SET_TUGAS_SISWA", datasiswa.data.data);
        }catch(err){
            console.log(err)
        }
    },
    async fetchtugasiswa({ commit }) {
      try {
        const datasiswa = await axios.get(
          "https://crudapilocalkuy.000webhostapp.com/api/user/tugas-pengumpulan"
        );
        commit("SET_TUGAS_SISWA", datasiswa.data.data);
      } catch (error) {
        alert(error);
      }
    },
    async fecthtugassiswadetail({ commit }, id) {
      try {
        const datasiswa = await axios.get(
          `https://crudapilocalkuy.000webhostapp.com/api/user/tugas/detail/${id}`
        );
        commit("SET_TUGAS_SISWA_SINGLE", datasiswa.data.data);
      } catch (error) {
        alert(error);
      }
      
    },
    async kumpulkan_tugas({ commit ,getters }, data ) {
      try {
        const kumpulkan_tugass = await axios.post(
          `https://crudapilocalkuy.000webhostapp.com/api/user/pengerjaan-tugas/add/${getters.getsingle_siswa.id}`,
          data,
          {
            headers: { "content-type": "application/x-www-form-urlencoded" },
          }
        );s
        commit("SET_TUGAS_SISWA", kumpulkan_tugass.data.data);
      } catch (error) {
        console.log(error);
      }
      finally {
        window.location.href = "/siswa/tugas";
      }
    },
  },
  mutations: {
    SET_TUGAS_SISWA(state, tugas_siswa) {
      state.tugas_siswa = tugas_siswa;
    },
    SET_TUGAS_SISWA_SINGLE(state, tugas_siswa) {
      state.tugas_siswa_detail = tugas_siswa;
    },
  },
};
