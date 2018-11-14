<template>
  <b-row class="m-0 mb-2">
    <b-col cols="12">
      <h5 class="skill-title text-uppercase pb-1 font-weight-bold pb-3">{{explanationTitle}}</h5>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "ExplanationTitle",
  props: {
    explanationTitle: {
      type: String,
      required: true,
      default: () => ""
    }
  }
};
</script>

<style lang="scss" scoped>
.skill-title {
  position: relative !important;
  &::before {
    content: "";
    border-bottom: 2px solid #353535;
    position: absolute !important;
    width: 100%;
    bottom: 0;
  }
}
</style>
