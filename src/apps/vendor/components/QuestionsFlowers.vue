<style scoped>
.modal-dialog {
  text-align: left;
  display: block;
  max-width: 1024px;
}
ul#strains {
  list-style: none;
  padding: 0;
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
        <div class="row">
          <div class="col-sm-3">
            <h4>Strains</h4>
          </div>
        </div>

        <div class="row">
          <div class="container col-sm-3">
            <ul id="strains">
              <li v-for="strain in strains" :key="strain.id">
                <a href="#" @click.prevent="selectStrain(strain)">{{ strain.name }}</a>
              </li>
            </ul>

            <button class="btn btn-success" @click="addStrain">Add Strain</button>
          </div>

          <div class="container col-sm-9">
            <StrainForm v-if="strain" :questions="strainQuestions" :strain="strain"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import data from '@/lib/data';
import { mapGetters } from 'vuex';
import StrainForm from './StrainForm';

export default {
  components: {
    StrainForm
  },
  props: ['questions', 'response'],
  data() {
    return {
      strain: null
    };
  },
  computed: {
    strains() {
      return this.response.strains;
    },
    strainQuestions() {
      return _.values(_.find(this.questions, { name: 'Strains' }).items);
    }
  },
  methods: {
    selectStrain(strain) {
      this.strain = strain;
    },
    addStrain() {
      this.$store.commit('newStrain');
      this.strain = this.strains[this.strains.length - 1];
    }
  }
};
</script>
