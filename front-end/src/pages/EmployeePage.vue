<template>
  <q-page class="flex flex-center column">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="q-ml-lg font-primary2 no-shadow">Employee Page</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <div class="text-center flex-center">
      <h4
        class="line-height-xl"
      >In aproximately {{randomMinutes}} minutes you have to open cashier #{{randomCashier}}</h4>
    </div>

    <q-btn push round icon="check" class="bg-green text-grey-1" size="30px" v-on:click="1"></q-btn>
    <!-- <q-btn
      align="around"
      class="btn-fixed-width"
      color="brown-5"
      label="Login"
      icon="exit_to_app"
      @click="$router.push('/display')"
    />-->
  </q-page>
</template>

<style></style>

<script>
export default {
  name: "EmployeePage",
  data() {
    return {
      randomMinutes: Math.floor(Math.random() * 16),
      randomCashier: Math.floor(Math.random() * 31)
    };
  }
};
</script>

<style >
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

h4 {
  font-family: "Montserrat", sans-serif;
}
</style>