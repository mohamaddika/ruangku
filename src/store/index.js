import { createStore } from "vuex";
import navbar from "./modules/navbar";
import siswa from "./modules/siswa";
import auth from "./modules/auth";
import kelas from "./modules/kelas";
import hari from "./modules/hari";
import mapel from "./modules/mapel";
import tugas_siswa from "./modules/tugas_siswa";
import absensi from "./modules/absensi";
import tugas from "./modules/tugas";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  modules: {
    kelas,
    navbar,
    siswa,
    absensi,
    auth,
    tugas_siswa,
    hari,
    mapel,
    tugas,
  },
  plugins: [createPersistedState()],
});
