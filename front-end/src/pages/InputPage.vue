<template>
  <q-page class="flex-center">
    <h1 class="flex flex-center">Times of 1 customer</h1>
    <div class="column flex flex-center" style="height: 0px">
      <!-- <div class="col">
        <h1>Input of customer</h1>
      </div>-->
      <div class="q-pa-md q-gutter-xl col">
        <div class="row">
          <div class="col d">
            <q-btn class="d" color="primary" label="T1" />
          </div>
          <div class="col d">
            <q-btn class="d" color="primary" label="T2" />
          </div>
        </div>
        <div class="row">
          <div class="col d">
            <q-btn class="d" color="primary" label="T3" />
          </div>
          <div class="col d">
            <q-btn class="d" color="primary" label="T4" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
.d {
  padding: 20px 30px;
}
</style>

<script>
export default {
  name: "InputPage"
};
</script>
