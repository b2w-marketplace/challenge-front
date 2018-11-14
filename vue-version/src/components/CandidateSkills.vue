<template>
  <b-row class="m-0 text-white text-center px-1 px-md-5 pt-4 pb-0">
    <b-col cols="12">
      <app-skill-title skill-title="Skills" />
      <app-skill-progress-bar v-for="(skill, index) in skills" :key="index" class="pb-2" :skill="skill" />
    </b-col>
  </b-row>
</template>

<script>
import SkillTitle from "@/components/SkillTitle.vue";
import SkillProgressBar from "@/components/SkillProgressBar.vue";

export default {
  name: "CandidateSkills",
  components: {
    appSkillTitle: SkillTitle,
    appSkillProgressBar: SkillProgressBar
  },
  props: {
    skills: {
      type: Array,
      required: true,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  letter-spacing: 3px;
}
</style>
