<template>
  <b-row class="m-0 px-1 px-md-5 pt-2 pb-3">
    <b-col cols="12">
      <app-explanation-title :explanation-title="expTitle" />
      <app-explanation-texts v-for="(object, index) in array" :key="index" :object="object" />
    </b-col>
  </b-row>
</template>

<script>
import ExplanationTitle from "@/components/ExplanationTitle.vue";
import ExplanationTexts from "@/components/ExplanationTexts.vue";

export default {
  name: "CadidateExplanation",
  components: {
    appExplanationTitle: ExplanationTitle,
    appExplanationTexts: ExplanationTexts
  },
  props: {
    expTitle: {
      type: String,
      required: true,
      default: () => ""
    },
    array: {
      type: Array,
      required: true,
      default: () => []
    }
  }
};
</script>
