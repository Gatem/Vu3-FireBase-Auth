<template>
  <q-page class="flex flex-center">
    <!-- <Register /> -->
    <div class="row">
      <div class="col-12 q-mb-md">
        <p>Welcom Message :)</p>
      </div>
      <div class="col-12 q-mb-md">
        <q-btn
          color="secondary"
          label="Logout"
          class="full-width text-subtitle1"
          @click="logOut"
        />
        <q-btn
          color="secondary"
          label="logAout"
          class="full-width text-subtitle1"
          @click="logAout"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useGlobalStore } from "src/stores/global-store";
const { logOut, logAout } = useGlobalStore();
</script>
