<template>
  <b-row class="m-0 mb-3">
    <b-col cols="12" class="text-center">
      <p class="text-uppercase text-white mb-2"><small>{{ skill.name }}</small></p>
      <div class="progress-bar m-auto">
        <div class="bar" :style="{width: skill.value}"></div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "SkillProgressBar",
  props: {
    skill: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.progress-bar {
  width: 100%;
  height: 15px;
  border: 1px solid #fff;
  background: #353535;
  .bar {
    content: "";
    height: 100%;
    background-color: #fff;
  }
}
</style>
