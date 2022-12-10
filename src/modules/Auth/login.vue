<template>
  <q-page class="flex flex-center">
    <div class="text-center">
      <p class="text-h1 q-mb-xl">Login</p>
      <div class="row">
        <div class="col-12 q-mb-md">
          <q-input rounded outlined v-model="email" label="E-mail" />
        </div>
        <div class="col-12 q-mb-xl">
          <q-input
            rounded
            outlined
            v-model="password"
            label="Password"
            type="password"
          />
        </div>
        <p class="text-negative" v-if="errMsg">{{ errMsg }}</p>
      </div>
      <div class="row">
        <div class="col-12 q-mb-md">
          <q-btn
            color="secondary"
            label="Login"
            class="full-width text-subtitle1"
            @click="login(email, password)"
          />
        </div>
        <div class="col-12">
          <q-btn
            color="secondary"
            icon-right="login"
            label="Sign In With Google"
            @click="signInWithGoogle"
            class="full-width text-subtitle1"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useGlobalStore } from "src/stores/global-store";
import { storeToRefs } from "pinia";
const password = ref("");
const email = ref("");
const { login } = useGlobalStore();
const { errMsg } = storeToRefs(useGlobalStore());
const signInWithGoogle = () => {
  // alertData("Works");
};
</script>
