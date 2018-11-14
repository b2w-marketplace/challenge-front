<template>
  <b-row class="m-0 mb-2">
    <b-col cols="12" class="text-center">
      <h5 class="skill-title text-uppercase text-white pb-3 font-weight-bold">{{skillTitle}}</h5>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "SkillTitle",
  props: {
    skillTitle: {
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
    border-bottom: 2px solid #fff;
    position: absolute !important;
    width: 70%;
    left: 15%;
    bottom: 0;
  }
}
</style>
