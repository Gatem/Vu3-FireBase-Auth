<template>
  <q-page class="flex flex-center">
    <div class="text-center">
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
      </div>
      <div class="row">
        <div class="col-12 q-mb-md">
          <q-btn
            color="primary"
            label="Register"
            class="full-width text-subtitle1"
            @click="register(email, password)"
          />
        </div>
        <div class="col-12">
          <q-btn
            color="accent"
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

const password = ref("");
const email = ref("");
const { register } = useGlobalStore();

const signInWithGoogle = () => {
  // alertData("Works");
};
</script>
