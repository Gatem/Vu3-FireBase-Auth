import { defineStore } from "pinia";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { ref } from "vue";
import { useStorageComposable } from "src/composables/storage-composable";

export const useGlobalStore = defineStore("global", () => {
  const errMsg = ref("");
  const { setProfile, removeProfile } = useStorageComposable();
  function register(email, password) {
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((data) => {
        setProfile(data._tokenResponse);
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  }

  function login(email, password) {
    console.log(email, password);
    signInWithEmailAndPassword(getAuth(), email, password)
      .then((data) => {
        setProfile(data._tokenResponse);
        errMsg.value = "";
      })
      .catch((err) => {
        console.log("Error : ", err.message);
        errMsg.value = err.message;
      });
  }

  function logOut() {
    this.router.push("/login");
    signOut(getAuth()).then(() => {
      removeProfile();
      this.router.push("/login");
    });
  }
  return { register, login, logOut, errMsg };
});
