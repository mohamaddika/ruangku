import axios from "axios";
export default {
  namespaced: true,
  state: {
    mapel: [],
    singlemapel: [],
  },
  getters: {
    getmapel: (state) => state.mapel,
    getmapelsingle: (state) => state.singlemapel,
  },
  actions: {
    async fectmapel({ commit }) {
      try {
        const darimapel = await axios.get(
          "https://crudapilocalkuy.000webhostapp.com/api/mapel"
        );
        commit("SET_MAPEL", darimapel.data.data);
      } catch (error) {
        alert("Ada error");
        console.log(error);
      }
    },
    async fetchmapeladd({ commit }, data) {
      try {
        const darimapel = await axios.post(
          "https://crudapilocalkuy.000webhostapp.com/api/mapel/add",
          data,
          {
            headers: { "content-type": "application/x-www-form-urlencoded" },
          }
        );
        commit("SET_MAPEL", darimapel.data.data);
      } catch (error) {
        alert("Ada error");
        console.log(error);
      } finally {
        window.location.href = "/admin/mata-pelajaran";
      }
    },

    async fetchmapeledit({ commit, getters }, data) {
      try {
        const darimapel = await axios.post(
          `https://crudapilocalkuy.000webhostapp.com/api/mapel/edit/${getters.getmapelsingle.id}`,
          data,
          {
            headers: { "content-type": "application/x-www-form-urlencoded" },
          }
        );
        commit("SET_MAPEL", darimapel.data.data);
      } catch (error) {
        alert("Ada error");
        console.log(error);
      } finally {
        window.location.href = "/admin/mata-pelajaran";
      }
    },

    async fectmapelshow({ commit }, id) {
      try {
        const darimapel = await axios.get(
          `https://crudapilocalkuy.000webhostapp.com/api/mapel/show/${id}`
        );
        commit("SET_MAPEL_SINGLE", darimapel.data.data);
      } catch (error) {
        alert("Ada error");
        console.log(error);
      }
    },
    async fectmapeldelete({ commit }, id) {
      try {
        const datakelas = await axios.post(
          `https://crudapilocalkuy.000webhostapp.com/api/mapel/delete/${id}`
        );
        commit("SET_siswa", datakelas);
      } catch (error) {
        alert("id ini mempunyai relasi");
        console.log(error);
      } finally {
        window.location.href = "/admin/mata-pelajaran";
      }
    },
  },
  mutations: {
    SET_MAPEL(state, mapel) {
      state.mapel = mapel;
    },
    SET_MAPEL_SINGLE(state, mapel) {
      state.singlemapel = mapel;
    },
  },
};
