<template>
  <div class="row">
    <div class="col-md-7 login-bg"></div>
    <div class="col-md-5">
      <q-page class="flex flex-center">
        <div class="text-center row justify-center" style="flex: 1">
          <div class="col-8">
            <img src="~/assets/logo.png" alt="logo" style="width: 120px" />
            <p class="text-text-body2 q-mb-sm">
              Control your Income and Grow your Wealth with Wealthy
            </p>
            <router-view />
          </div>
        </div>
      </q-page>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const rout = ref(window.location);
</script>
<style lang="scss">
.login-bg {
  background-image: url("src/assets/login-bg-shadow.png");
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: $grey-1;
}
</style>
