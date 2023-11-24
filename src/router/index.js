import { createRouter, createWebHistory } from "vue-router";

function cekToken(to, from, next) {
  if (
    !!localStorage.getItem("token") &&
    localStorage.getItem("token") != "undefined"
  ) {
    next();
  } else {
    alert("Mohon login terlebih dahulu!");
    next("/");
  }
}
function cekrolesiswa(to, from, next) {
  const userData = JSON.parse(localStorage.getItem("user"));
  if (userData && userData.roles === "siswa") {
    alert("Anda adalah siswa, Anda tidak diizinkan mengakses halaman ini!");
    next("/siswa/dashboard");
  } else {
    next();
  }
}

function cekroleadmin(to, from, next) {
  const userData = JSON.parse(localStorage.getItem("user"));
  if (userData && userData.roles === "admin") {
    alert("Anda adalah admin, Anda tidak diizinkan mengakses halaman ini!");
    next("/admin/dashboard");
  } else {
    next();
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LoginSiswa",
      component: () => import("../views/LoginSiswa.vue"),
    },
    {
      path: "/admin",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
    },

    {
      path: "/admin/kelas/tugas/:id",
      name: "TugasKelas",
      component: () => import("../views/Admin/tugas_kelas/IndexView.vue"),
      beforeEnter: cekroleadmin,
      beforeEnter: cekToken,
      props: true,
    },
    {
      path: "/admin/dashboard",
      name: "Dashboard",
      component: () => import("../views/Admin/indexView.vue"),
      beforeEnter: cekToken,
      beforeEnter: cekrolesiswa,
    },
    {
      path: "/admin/siswa",
      name: "Siswa",
      component: () => import("../views/Admin/siswa/indexView.vue"),
      beforeEnter: cekToken,
      beforeEnter: cekrolesiswa,
    },
    {
      path: "/admin/siswa/create",
      name: "SiswaCreate",
      component: () => import("../views/Admin/siswa/CreateView.vue"),
      beforeEnter: cekToken,
      beforeEnter: cekrolesiswa,
    },
    {
      path: "/admin/riwayat_tabungan",
      name: "RiwayatTabungan",
      component: () => import("../views/Admin/riwayat_tabungan/IndexView.vue"),
      beforeEnter: cekToken,
      beforeEnter: cekrolesiswa,
    },
    {
      path: "/admin/siswa/tabungan/:id",
      name: "RiwayatTabunganSiswa",
      component: () => import("../views/Admin/tabungan_siswa/IndexView.vue"),
      props: true,
      beforeEnter: cekToken,
      beforeEnter: cekrolesiswa,
    },
    {
      path: "/admin/siswa/detail/:id",
      name: "Siswadetail",
      component: () => import("../views/Admin/siswa/DetailView.vue"),
      props: true,
      beforeEnter: cekToken,
      beforeEnter: cekrolesiswa,
    },
    {
      path: "/admin/siswa/edit/:id",
      name: "SiswaEdit",
      component: () => import("../views/Admin/siswa/EditView.vue"),
      props: true,
      beforeEnter: cekToken,
      beforeEnter: cekrolesiswa,
    },


    // roles siswa

    {
      path: "/siswa/dashboard",
      name: "DashboardSiswa",
      component: () => import("../views/siswa/IndexView.vue"),
      beforeEnter: cekroleadmin,
      beforeEnter: cekToken,
    },
    {
      path: "/siswa/tugas",
      name: "TugasSsiwa",
      component: () => import("../views/siswa/tugas/IndexView.vue"),
      beforeEnter: cekroleadmin,
      beforeEnter: cekToken,
    },

    
    {
      path: "/siswa/tugas/filter",
      name: "TugasSsiwaFilter",
      component: () => import("../views/siswa/tugas/IndexView.vue"),
      beforeEnter: cekroleadmin,
      beforeEnter: cekToken,
    },


    {
      path: "/siswa/tugas/pengumpulan/:id",
      name: "TugasSsiwaPengerjaan",
      component: () => import("../views/siswa/tugas/CreateView.vue"),
      props:true,
      beforeEnter: cekroleadmin,
      beforeEnter: cekToken,
    },
    {
      path: "/siswa/tugas/show/:id",
      name: "TugasSsiwaPengerjaanShow",
      component: () => import("../views/siswa/tugas/ShowView.vue"),
      props:true,
      beforeEnter: cekroleadmin,
      beforeEnter: cekToken,
    },
    {
      path: "/siswa/absen",
      name: "Absensi",
      component: () => import("../views/siswa/absen/indexView.vue"),
      beforeEnter: cekroleadmin,
      beforeEnter: cekToken,
    },








    {
      path: "/admin/kelas",
      name: "Kelas",
      component: () => import("../views/Admin/kelas/IndexView.vue"),
      // beforeEnter: cekroleadmin,
      // beforeEnter: cekToken,
    },
    {
      path: "/admin/kelas/create",
      name: "MasterKelas",
      component: () => import("../views/Admin/kelas/CreateView.vue"),
      beforeEnter: cekroleadmin,
      beforeEnter: cekToken,
    },
    {
      path: "/admin/kelas/edit/:id",
      name: "EditKelas",
      component: () => import("../views/Admin/kelas/EditView.vue"),
      props: true,
      beforeEnter: cekroleadmin,
      beforeEnter: cekToken,
    },

    {
      path: "/admin/hari",
      name: "AdminHari",
      component: () => import("../views/Admin/hari/IndexView.vue"),
      beforeEnter: cekroleadmin,
      beforeEnter: cekToken,
    },
    {
      path: "/admin/mata-pelajaran",
      name: "AdminMapel",
      component: () => import("../views/Admin/mapel/IndexView.vue"),
      beforeEnter: cekroleadmin,
      beforeEnter: cekToken,
    },
    {
      path: "/admin/mata-pelajaran/create",
      name: "AdminMapelCreate",
      component: () => import("../views/Admin/mapel/CreateView.vue"),
      beforeEnter: cekroleadmin,
      beforeEnter: cekToken,
    },
    {
      path: "/admin/mata-pelajaran/edit/:id",
      name: "AdminMapelEdit",
      component: () => import("../views/Admin/mapel/EditView.vue"),
      props: true,
      beforeEnter: cekroleadmin,
      beforeEnter: cekToken,
    },
    {
      path: "/admin/tugas",
      name: "Admintugas",
      component: () => import("../views/Admin/tugas/IndexView.vue"),
      beforeEnter: cekroleadmin,
      beforeEnter: cekToken,
    },
    {
      path: "/admin/tugas/create",
      name: "AdmintugasCreate",
      component: () => import("../views/Admin/tugas/CreateView.vue"),
      beforeEnter: cekroleadmin,
      beforeEnter: cekToken,
    },
    {
      path: "/admin/tugas/edit/:id",
      name: "AdmintugasEdit",
      component: () => import("../views/Admin/tugas/EditView.vue"),
      props: true,
      beforeEnter: cekroleadmin,
      beforeEnter: cekToken,
    },
    
  ],
});

export default router;
