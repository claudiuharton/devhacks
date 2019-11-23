<template>
  <q-layout view="hHh lpR fFf">
    <div v-if="casa===0">
      <div class="row">
        <div class="text-center flex-center">
          <h3 class="line-height-xl">Wait here until a new cashier appears</h3>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="row">
        <div class="text-center fixed-center">
          <h3 class="line-height-lg">Go to cashier</h3>
          <br />

          <h2 class="q-ma-sm text-center text-green">#{{something}}</h2>
        </div>
      </div>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      something: "001",
      casa: Math.floor(Math.random() * 31)
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

h3 {
  font-size: 117px;
  font-family: "Montserrat", sans-serif;
}

h2 {
  font-size: 170px;
}

.line-height-xl {
  line-height: 1.1;
}

.line-height-lg {
  line-height: 1.05;
}
</style>