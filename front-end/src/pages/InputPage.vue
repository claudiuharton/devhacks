<template>
  <q-page class="flex-center">
    <h1 class="flex flex-center">Times of customer</h1>
    <div class="column flex flex-center" style="height: 0px">
      <div class="q-pa-md q-gutter-xl col">
        <div class="row">
          <div class="col d">
            <q-btn class="q-px-xl q-py-lg bg-green text-white" v-on:click="1" label="T1" />
          </div>
          <div class="col d">
            <q-btn class="q-px-xl q-py-lg bg-green text-white" v-on:click="2" label="T2" />
          </div>
        </div>
        <div class="row">
          <div class="col d">
            <q-btn class="q-px-xl q-py-lg bg-green text-white" v-on:click="3" label="T3" />
          </div>
          <div class="col d">
            <q-btn class="q-px-xl q-py-lg bg-green text-white" v-on:click="4" label="T4" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>




<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

h1 {
  font-family: "Montserrat", sans-serif;
}
.d {
  padding: 20px 30px;
}
</style>

<script>
export default {
  name: "InputPage"
};
</script>
