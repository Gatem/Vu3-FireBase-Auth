import { defineStore } from "pinia";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
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
        this.router.push("/home");
      })
      .catch((err) => {
        errMsg.value = err.message;
      });
  }
  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
      .then((data) => {
        setProfile(data._tokenResponse);
        errMsg.value = "";
        this.router.push("/home");
      })
      .catch((err) => {
        errMsg.value = err.message;
      });
  }
  function logOut() {
    signOut(getAuth()).then(() => {
      removeProfile();
      this.router.push("/login");
    });
  }
  function logAout() {
    console.log(getAuth());
  }
  return { register, login, signInWithGoogle, logOut, logAout, errMsg };
});
