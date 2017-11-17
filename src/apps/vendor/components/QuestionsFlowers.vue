<style scoped>
.flowers-questions {
  margin-left: 0px;
}
.modal-dialog {
  text-align: left;
  display: block;
  max-width: 1024px;
}
#flower-strains {
  list-style: none;
}
</style>

<template>
<div>
  <div class="modal-dialog" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <h2 class="modal-title">Flowers</h2>
      </div>

      <div class="modal-body">
        <form>
          <div class="row">

            <div class="container col-lg-5">
              <h3>Strains:</h3>
              <ul id="flower-strains">
                <li v-for="strain in strains">
                  <a @click="selectStrain(strain)">{{ strain.name }}</a>
                </li>
                <li>
                  <button class="btn btn-primary" @click="addStrain">Add</button>
                </li>
              </ul>
            </div>

            <div class="container col-lg-6 flowers-questions">
              <StrainForm :questions="questions" :strain="strain"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import StrainForm from './StrainForm';

export default {
  components: {
    StrainForm
  },
  props: ['questions'],
  data() {
    return {
      strain: null
    };
  },
  computed: {
    ...mapGetters({
      response: 'response'
    }),
    strains() {
      return this.$store.getters.response.flowers.strains;
    }
  },
  methods: {
    selectStrain(strain) {
      this.strain = strain;
    },
    addStrain() {
      const strain = {
        name: 'New Strain'
      };
      this.$store.commit('addStrain', strain);
      this.strain = strain;
    }
  }
};
</script>
