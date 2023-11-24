import axios from "axios";
export default {
  namespaced: true,
  state: {
    tugas: [],
    singletugas: [],
  },
  getters: {
    gettugas: (state) => state.tugas,
    gettugassingle: (state) => state.singletugas,
  },
  actions: {
    async fecttugas({ commit }) {
      try {
        const datatugas = await axios.get(
          "https://crudapilocalkuy.000webhostapp.com/api/tugas-siswa"
        );
        commit("SET_TUGAS", datatugas.data.data);
      } catch (error) {
        alert("Ada error");
        console.log(error);
      }
    },
    async fetchtugasadd(context, data) {
      try {
        const response = await axios.post(
          "https://crudapilocalkuy.000webhostapp.com/api/tugas-siswa/add",
          data,
          {
            headers: { "content-type": "application/x-www-form-urlencoded" },
          }
        );
        context.commit("SET_TUGAS", response.data.data);
      } catch (error) {
          console.log(error);
      } 
      finally {
        window.location.href = "/admin/tugas";
      }
    },
    async fetchtugasid({ commit }, id) {
      try {
        const datatuugas = await axios.get(
          `https://crudapilocalkuy.000webhostapp.com/api/tugas-siswa/show/${id}`
        );
        commit("SET_SINGLE_TUGAS", datatuugas.data.data);
      } catch (error) {
        alert("Ada error");
        console.log(error);
      }
    },
    async fectedittugas({ commit, getters }, data) {
      try {
        const response = await axios.post(
          `https://crudapilocalkuy.000webhostapp.com/api/tugas-siswa/edit/${getters.gettugassingle.id}`,
          data,
          {
            headers: { "content-type": "application/x-www-form-urlencoded" },
          }
        );
        commit("SET_TUGAS", response.data.data);
      } catch (error) {
        alert(error);
      } finally {
        window.location.href = "/admin/tugas";
      }
    },


    async fectdeletetugassiswa({ commit }, id) {
      try {
        const response = await axios.post(
          `https://crudapilocalkuy.000webhostapp.com/api/tugas-siswa/delete/${id}`
        );
        commit("SET_TUGAS", response.data.data);
      } catch (error) {
        console.error(error);
      }finally {
        window.location.href = "/admin/tugas";
      }
    }
    
   
  },
  mutations: {
    SET_TUGAS(state, tugas) {
      state.tugas = tugas;
    },
    SET_SINGLE_TUGAS(state, tugas) {
      state.singletugas = tugas;
    },
  },
};
