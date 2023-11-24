// import axios from "axios";
export default {
  namespaced: true,
  state: {
    navbar: false,
    navbarsiswa: false,
  },
  getters: {
    getNavbar: (state) => state.navbar,
    getNavbarSiswa: (state) => state.navbarsiswa,
  },
  actions: {
    async fetchnavbar({ commit }, data) {
      try {
        commit("SET_NAVBAR", data);
      } catch (error) {
        alert(error);
      }
    },
    async fetchnavbarsiswa({ commit }, data) {
      try {
        commit("SET_NAVBAR_SISWA", data);
      } catch (error) {
        alert(error);
      }
    },
  },
  mutations: {
    SET_NAVBAR(state, navbar) {
      state.navbar = navbar;
    },
    SET_NAVBAR_SISWA(state, navbarsiswa) {
      state.navbarsiswa = navbarsiswa;
    },
  },
};
