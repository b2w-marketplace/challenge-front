<template>
  <b-row class="m-0 text-white text-center px-1 px-md-5 pt-2 pb-0">
    <b-col cols="12">
      <app-skill-title skill-title="Contact" />
      <p class="mb-0"><small><a class="text-white" :href="`tel:${contact.tel}`">{{contact.tel}}</a></small></p>
      <p><small><a class="text-white" :href="`tel:${contact.cel}`">{{contact.cel}}</a></small></p>
      <p><small>{{ contact.address }}</small></p>
      <p class="mb-0"><small><a class="text-white" :href="`${contact.website}`">{{contact.website}}</a></small></p>
      <p class="mb-1"><small><a class="text-white" :href="`mailto:${contact.mail}`">{{contact.mail}}</a></small></p>
    </b-col>
  </b-row>
</template>

<script>
import SkillTitle from "@/components/SkillTitle.vue";

export default {
  name: "CandidateContact",
  components: {
    appSkillTitle: SkillTitle
  },
  props: {
    contact: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  letter-spacing: 3px;
}
</style>
