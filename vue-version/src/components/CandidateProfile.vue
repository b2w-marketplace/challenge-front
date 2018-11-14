<template>
  <b-row class="m-0 text-white text-center px-1 px-md-5 pt-5 pb-0">
    <b-col cols="12">
      <app-skill-title skill-title="Profile" />
      <p><small>{{ description }}</small></p>
    </b-col>
  </b-row>
</template>

<script>
import SkillTitle from "@/components/SkillTitle.vue";

export default {
  name: "CandidateProfile",
  components: {
    appSkillTitle: SkillTitle
  },
  props: {
    description: {
      type: String,
      required: true,
      default: () => ""
    }
  }
};
</script>

<style>
</style>
