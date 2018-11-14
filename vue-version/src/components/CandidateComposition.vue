<template>
  <b-row class="m-0 py-5 px-1 px-md-5">
    <b-col cols="12">
      <b-container class="text-center text-uppercase text-white">
        <app-skill-avatar :skill-image-url="candidate.image" />
        <h1 class="font-weight-bold mt-5">{{ candidate.name }}</h1>
        <p>{{ candidate.profession }}</p>
      </b-container>
    </b-col>
  </b-row>
</template>

<script>
import SkillAvatar from "@/components/SkillAvatar.vue";

export default {
  name: "CandidateComposition",
  components: {
    appSkillAvatar: SkillAvatar
  },
  props: {
    candidate: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
