<script src=//unpkg.com/vue></script>
<script src=//unpkg.com/vuetrend></script>

<template>
  <q-page class="flex flex-center">
    <h1>Chart la caterinca</h1>
    <div class="row">
      <trend
        :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
        auto-draw
        smooth
      ></trend>
    </div>
  </q-page>
</template>

<style></style>

<script>
import Vue from "vue";
import Trend from "vuetrend";
Vue.use(Trend);
export default {
  name: "TestChart"
};
</script>
