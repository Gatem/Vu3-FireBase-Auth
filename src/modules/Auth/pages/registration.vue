<template>
  <div class="row">
    <p class="text-h2 full-width q-mb-lg">SIGN UP</p>
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
    <div class="col-6 text-left text-subtitle1 q-mb-sm">
      <q-checkbox v-model="remember" label="Remember Me" />
    </div>
    <div class="col-12 text-left q-px-md q-mb-xl">
      <p class="text-subtitle2 q-pt-sm">
        Already have Account?
        <router-link to="join/login">Login</router-link>
      </p>
    </div>
    <div class="col-12 q-mb-md">
      <q-btn
        rounded
        size="lg"
        color="primary"
        label="Register"
        class="full-width text-subtitle1"
        @click="register(email, password)"
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

const password = ref("");
const email = ref("");
const remember = ref(true);
const { register, signInWithGoogle } = useGlobalStore();
</script>
