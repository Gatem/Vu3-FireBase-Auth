<template>
  <div class="row">
    <div class="col-md-7 login-bg"></div>
    <div class="col-md-5">
      <router-view />
    </div>
  </div>
</template>
<style lang="scss">
.login-bg {
  background-image: url("src/assets/login-bg-shadow.png");
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: $grey-1;
}
</style>
