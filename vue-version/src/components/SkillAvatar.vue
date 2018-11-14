<template>
  <b-row class="m-0">
    <b-col cols="12">
      <div class="avatar-block">
        <div class="avatar-img" :style="{background: `url(${url}) center center no-repeat`}"></div>
        <div class="moudure"></div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "SkillAvatar",
  props: {
    skillImageUrl: {
      type: String,
      required: true,
      default: () => ""
    }
  },
  computed: {
    url() {
      return this.skillImageUrl;
    }
  }
};
</script>

<style lang="scss" scoped>
.avatar-block {
  padding-left: calc(50% - 55px);
}
.avatar-img {
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  // background-color: #1e824c;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  background-size: cover !important;
  &::before {
    content: "";
    width: 120px;
    height: 120px;
    position: absolute;
    left: -10px;
    top: -10px;
    background: inherit;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
.moudure {
  position: relative;
  top: 0;
  left: 0;
  &::after {
    content: "";
    padding: 5px;
    border: 2px solid #fff;
    position: absolute;
    top: -105px;
    left: -5px;
    width: 110px;
    height: 110px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
</style>
