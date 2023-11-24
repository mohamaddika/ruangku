import axios from "axios";

export default {
  namespaced: true,
  state: {
    siswa: [],
    singlesiswa: [],
  },
  getters: {
    getsiswa: (state) => state.siswa,
    getsiswaid: (state) => state.singlesiswa,
  },
  actions: {
    async fetchsiswa({ commit }) {
      try {
        const datasiswa = await axios.get(
          "https://crudapilocalkuy.000webhostapp.com/api/user-siswa",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        // console.log(datasiswa);
        commit("SET_siswa", datasiswa.data.data);
      } catch (error) {
        alert("hem");
        console.log(error);
      }
    },

    async fetchsiswaadd(context, student) {
      console.log(student)
      try {
        const response = await axios.post(
          "https://crudapilocalkuy.000webhostapp.com/api/siswa/add",
          student,
          {
            headers: { "content-type": "application/x-www-form-urlencoded" },
          }
        );
        context.commit("SET_siswa", response.data.data);
      } catch (error) {
        alert(error);
      } 
    },

    async fetchsiswaid(context, id) {
      try {
        const response = await axios.get(
          `https://crudapilocalkuy.000webhostapp.com/api/siswa/show/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        context.commit("SET_SINGLE_SISWA", response.data.data);
      } catch (error) {
        alert(error);
      } 
      finally {
        window.location.href = "/admin/siswa";
      }
    },

    async fecteditsiswa({ commit, getters }, data) {
      try {
        const response = await axios.post(
          `https://crudapilocalkuy.000webhostapp.com/api/siswa/edit/${getters.getsiswaid.id}`,
          data,
          {
            headers: { "content-type": "application/x-www-form-urlencoded" },
          }
        );
        commit("SET_siswa", response.data);
      } catch (error) {
        console.log(error);
      }
      finally {
        window.location.href = "/admin/siswa";
      }
    },


    async fectsiswadelete({ commit }, id) {
      try {
        const datasiswa = await axios.post(
          `https://crudapilocalkuy.000webhostapp.com/api/siswa/delete/${id}`
        );
        commit("SET_siswa", datasiswa);
      } catch (error) {
        alert("id ini mempunyai relasi");
        console.log(error);
      } finally {
        window.location.href = "/admin/siswa";
      }
    },

    

  },
  mutations: {
    SET_siswa(state, siswa) {
      state.siswa = siswa;
    },
    SET_SINGLE_SISWA(state, siswa) {
      state.singlesiswa = siswa;
    },
  },
};
