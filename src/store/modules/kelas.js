import axios from "axios";
export default {
  namespaced: true,
  state: {
    kelas: [],
    singelkelas: [],
  },
  getters: {
    getkelass: (state) => state.kelas,
    getkelasid: (state) => state.singelkelas,
  },
  actions: {
    async fectkelas({ commit }) {
      try {
        const datakelas = await axios.get(
          "https://crudapilocalkuy.000webhostapp.com/api/kelas"
        );
        commit("SET_KELAS", datakelas.data.data);
      } catch (error) {
        alert("Ada error");
        console.log(error);
      }
    },

    async fetchkelasadd(context, student) {
      try {
        const response = await axios.post(
          "https://crudapilocalkuy.000webhostapp.com/api/kelas/add",
          student,
          {
            headers: { "content-type": "application/x-www-form-urlencoded" },
          }
        );
        context.commit("SET_siswa", response.data.data);
      } catch (error) {
        alert(error);
      } finally {
        window.location.href = "/admin/kelas";
      }
    },

    async fetchkelasshow({ commit }, id) {
      try {
        const datasiswa = await axios.get(
          `https://crudapilocalkuy.000webhostapp.com/api/kelas/show/${id}`
        );
        commit("SET_SINGLE_KELAS", datasiswa.data.data);
      } catch (error) {
        // alert("Ada error");
        console.log(error);
      }
    },

    async fetchkelasedit({ commit, getters }, data) {
      try {
        const response = await axios.post(
          `https://crudapilocalkuy.000webhostapp.com/api/kelas/edit/${getters.getkelasid.id}`,
          data,
          {
            headers: { "content-type": "application/x-www-form-urlencoded" },
          }
        );
  
        commit("SET_siswa", response.data);
      } catch (error) {
        alert(error);
      } finally {
        window.location.href = "/admin/kelas";
      }
    },

    async fectkelasdelete({ commit }, id) {
      try {
        const datakelas = await axios.post(
          `https://crudapilocalkuy.000webhostapp.com/api/kelas/delete/${id}`
        );
        commit("SET_siswa", datakelas);
      } catch (error) {
        alert("id ini mempunyai relasi");
        console.log(error);
      } finally {
        window.location.href = "/admin/kelas";
      }
    },
  },
  mutations: {
    SET_KELAS(state, kelas) {
      state.kelas = kelas;
    },
    SET_SINGLE_KELAS(state, siswa) {
      state.singelkelas = siswa;
    },
  },
};
