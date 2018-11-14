<template>
  <div class="home">
    <b-container>
      <b-row class="m-0">
        <b-col cols="12" md="5" class="bg-dark py-5">
          <app-candidate :candidate="candidate" class="border-bottom" />
          <app-candidate-profile :description="descriptionProfile" />
          <app-candidate-contact :contact="contactProfile" />
          <app-candidate-skills :skills="skillsProfile" />
        </b-col>
        <b-col cols="12" md="7" class="py-5">
          <app-candidate-explanation :array="experienceProfile" exp-title="Work Experience" />
          <app-candidate-explanation :array="educationProfile" exp-title="Education" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import CandidateComposition from "@/components/CandidateComposition.vue";
import CandidateProfile from "@/components/CandidateProfile.vue";
import CandidateContact from "@/components/CandidateContact.vue";
import CandidateSkills from "@/components/CandidateSkills.vue";
import CandidateExplanation from "@/components/CandidateExplanation.vue";

export default {
  name: "Home",
  components: {
    appCandidate: CandidateComposition,
    appCandidateProfile: CandidateProfile,
    appCandidateContact: CandidateContact,
    appCandidateSkills: CandidateSkills,
    appCandidateExplanation: CandidateExplanation
  },
  data() {
    return {
      candidateProfile: {},
      descriptionProfile: "",
      contactProfile: {},
      skillsProfile: [],
      experienceProfile: [],
      educationProfile: []
    };
  },
  computed: {
    candidate() {
      return this.candidateProfile;
    }
  },
  beforeCreate() {
    axios
      .get("http://www.mocky.io/v2/5a5e38f3330000b0261923a5")
      .then(res => res.data.profile)
      .then(data => {
        const candidate = {
          image: data.image
            .replace("https://github.com", "https://raw.githubusercontent.com")
            .replace("blob/", ""),
          name: data.name,
          profession: data.profession
        };
        this.candidateProfile = candidate;
        this.descriptionProfile = data.description;
        this.contactProfile = data.contact;
        this.skillsProfile = data.skills;
        this.experienceProfile = data.experience;
        this.educationProfile = data.education;
      });
  }
};
</script>
