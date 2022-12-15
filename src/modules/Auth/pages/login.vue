<template>
  <div class="row">
    <p class="text-h2 full-width q-mb-lg">LOGIN</p>
    <div class="col-12 q-mb-md">
      <q-input rounded outlined v-model="email" label="E-mail" />
    </div>
    <div class="col-12 q-mb-md">
      <q-input
        rounded
        outlined
        v-model="password"
        label="Password"
        type="password"
      />
    </div>
    <div class="col-6 text-left text-subtitle1">
      <q-checkbox v-model="remember" label="Remember Me" />
    </div>
    <div class="col-6 text-right text-primary">
      <p class="text-subtitle1 q-pt-sm q-px-md">Forget Password?</p>
    </div>
    <p class="text-negative" v-if="errMsg">{{ errMsg }}</p>
    <div class="col-12 text-left q-px-md q-mb-xl">
      <p class="text-subtitle2 q-pt-sm">
        Not registered yet?
        <router-link to="/join">Create an Account</router-link>
      </p>
    </div>
    <div class="col-12 q-mb-md">
      <q-btn
        rounded
        size="lg"
        color="primary"
        label="Login"
        class="full-width text-subtitle1"
        @click="login(email, password)"
      />
    </div>
    <div class="col-12">
      <q-btn
        rounded
        size="lg"
        color="white"
        text-color="black"
        label="Sign In With Google"
        @click="signInWithGoogle"
        class="full-width text-subtitle1"
      >
        <img
          src="~/assets/google.png"
          alt="google"
          style="height: 30px; margin-inline-start: 10px"
        />
      </q-btn>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useGlobalStore } from "src/stores/global-store";
import { storeToRefs } from "pinia";
const password = ref("");
const email = ref("");
const remember = ref(true);
const { login, signInWithGoogle } = useGlobalStore();
const { errMsg } = storeToRefs(useGlobalStore());
console.log(window.location.pathname.includes("login"));
</script>
