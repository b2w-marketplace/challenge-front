<template>
  <div id="app">
    <main class="content" v-for="profile in profiles" v-bind:key="profile.name">
      <section class="resume">
        <div class="user-info">
          <img src="./../files/avatar-dev.png" alt="" class="diamond-mask" />
          <h1 class="name">{{ profile.name }}</h1>
          <p class="profession">{{ profile.profession }}</p>
        </div>
        <hr class="division">
        <div class="profile-info">
          <div class="profile">
            <h2 class="subtitle">Profile</h2>
            <p>{{ profile.description }}</p>
          </div>
          <div class="contact">
            <h2 class="subtitle">Contact</h2>
            <p>
              {{ profile.contact.tel }} <br>
              {{ profile.contact.cel }}
            </p>
            <p>{{ profile.contact.address }}</p>
            <p>
              {{ profile.contact.website }}<br>
              {{ profile.contact.mail }}
            </p>
          </div>
          <div class="skills">
            <h2 class="subtitle">Skills</h2>
            <div class="skill" v-for="(skill) in profile.skills" v-bind:key="skill.name">
              <div class="skill-name">{{ skill.name }}</div>
              <progress :value="skill.value.replace('%', '')" max="100"></progress>
            </div>
          </div>
        </div>
      </section>

      <section class="work-education">
        <h2 class="title">Work experience</h2>
        <div class="experience" v-for="(experience) in profile.experience" v-bind:key="experience.name">
          <h2 class="subtitle">{{ experience.name }}</h2>
          <p>{{ experience.date }}</p>
          <p class="description">{{ experience.description }}</p>
        </div>
        <h1 class="title">Education</h1>
        <div class="education" v-for="(education) in profile.education" v-bind:key="education.date">
          <h2 class="subtitle">{{ education.name }}</h2>
          <p>{{ education.date }}</p>
          <p class="description">{{ education.description }}</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      profiles: []
    }
  },

  created () {
    axios.get(`//www.mocky.io/v2/5a5e38f3330000b0261923a5`)
      .then(response => {
        this.profiles = response.data
      })
  }
}
</script>
