<template>
  <b-row class="m-0 pt-2 pb-0">
    <b-col cols="12">
      <h6 class="text-uppercase font-weight-bold">{{object.name}}</h6>
      <p class="mb-1"><small>{{object.date}}</small></p>
      <p class="mb-4"><small>{{object.description}}</small></p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "ExplanationTexts",
  props: {
    object: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
};
</script>
