<template>
  <q-page class="flex flex-center">
    <q-circular-progress
      v-if="!loaded"
      indeterminate
      size="40vw"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
      class="q-ma-md"
    />
    <q-banner
      v-else-if="!status && loaded"
      class="bg-grey-3"
    >Nu mai faci parte din procesul de recrutare</q-banner>
    <q-circular-progress
      v-else
      show-value
      font-size="15vw"
      :value="level"
      size="60vw"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
      class="q-ma-md"
    >{{level }}%</q-circular-progress>
  </q-page>
</template>

<style></style>

<script>
export default {
  name: "PageIndex",
  mounted() {
    this.$store.dispatch("promoData/initStore");
  },
  computed: {
    level() {
      return (this.$store.getters["promoData/getLevel"] / 5) * 100;
    },
    status() {
      return this.$store.getters["promoData/getStatus"];
    },
    loaded() {
      return this.$store.getters["promoData/getLoaded"];
    }
  }
};
</script>
