import axios from "axios";
export default {
  namespaced: true,
  state: {
    hari: [],
  },
  getters: {
    gethari: (state) => state.hari,
  },
  actions: {
    async fecthari({ commit }) {
      try {
        const darihari = await axios.get(
          "https://crudapilocalkuy.000webhostapp.com/api/hari"
        );
        commit("SET_HARI", darihari.data.data);
      } catch (error) {
        // alert("Ada error");
        console.log(error);
      }
    },
  },
  mutations: {
    SET_HARI(state, hari) {
      state.hari = hari;
    },
  },
};
