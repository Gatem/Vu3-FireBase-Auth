import { LocalStorage } from "quasar";
import { APP_PROFILE_KEY } from "src/configs/storageKeys";
export function useStorageComposable() {
  function setProfile(data) {
    LocalStorage.set(APP_PROFILE_KEY, data);
  }
  function getProfile() {
    LocalStorage.getItem(APP_PROFILE_KEY);
  }
  function removeProfile() {
    LocalStorage.remove(APP_PROFILE_KEY);
  }
  return { setProfile, getProfile, removeProfile };
}
