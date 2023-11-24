import axios from "axios";
const auth = {
  namespaced: true,
  state: {
    token: localStorage.getItem("token") || "",
    userdata: [],
  },
  getters: {
    isAuthenticated: (state) => !!state.token && state.token != "undefined",
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(
          "https://crudapilocalkuy.000webhostapp.com/api/auth/login",
          credentials,
          {
            headers: { "content-type": "application/x-www-form-urlencoded" },
          }
        );
        const token = response.data.token;
        const user = response.data.user;
        if (token != "undefined" && user.roles == "admin") {
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          commit("SET_TOKEN", token);
          return true;
        }
      } catch (error) {
        console.log(error);
      }
    },
    logout({ commit }) {
      try {
        const token = localStorage.getItem("token");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        commit("SET_TOKEN", token);
      } catch (err) {
        alert(err);
      } finally {
        location.reload();
      }
    },

    logoutsiswa({ commit }) {
      try {
        const token = localStorage.getItem("token");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        commit("SET_TOKEN", token);
      } catch (err) {
        alert(err);
      } finally {
        location.reload();
      }
    },

    async loginSiswa({ commit }, credentials) {
      try {
        const response = await axios.post(
          "https://crudapilocalkuy.000webhostapp.com/api/auth/login",
          credentials,
          {
            headers: { "content-type": "application/x-www-form-urlencoded" },
          }
        );
        const token = response.data.token;
        const user = response.data.user;
        if (token != "undefined" && user.roles == "siswa") {
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          commit("SET_TOKEN", token);
          return true;
        } else {
          console.log("roles admin");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_TOKEN_user(state, token) {
      state.userdata = token;
    },
  },
};

export default auth;
