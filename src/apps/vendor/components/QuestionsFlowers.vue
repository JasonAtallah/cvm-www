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
            <div class="container col-lg-6 flowers-questions">
              <div class="row">
                <div class="form-group col-lg-6" v-if="showField('Strain')">
                  <label for="exampleFormControlSelect1">Strain Name:</label>
                  <input type="text" class="form-control" id="strain" v-model="response.flowers.strain">
                </div>
                <div class="form-group col-lg-6" v-if="showField('WeightAvailable')">
                  <label for="exampleFormControlSelect1">Weight Available (lbs):</label>
                  <input type="number" class="form-control" id="weightavailable" v-model="response.flowers.weightavailable">
                </div>
              </div>
                <div class="row">              
                  <div class="form-group col-lg-6" v-if="showField('Potency')">
                    <label for="exampleFormControlSelect1">Potency:</label>
                    <input type="text" class="form-control" id="potency" v-model="response.flowers.potency">
                  </div>

                  <div class="form-group col-lg-6" v-if="showField('BudSize')">
                    <label for="exampleFormControlSelect1">Bud Size:</label>
                    <input type="text" class="form-control" id="budsize" v-model="response.flowers.budsize">
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-lg-6" v-if="showField('GrowStyle')">
                    <label for="exampleFormControlSelect1">Grow Style:</label>
                    <select v-model="response.flowers.growstyle"><option value="" /><option value="indoor">Indoor</option><option value="outdoor">Outdoor</option></select>
                  </div>
                  <div class="form-group col-lg-6" v-if="showField('ShelfReady')">
                    <label for="exampleFormControlSelect1">Shelf Ready:</label>
                    <select v-model="response.flowers.shelfready"><option value="" /><option value="no">No</option><option value="yes">Yes</option></select>
                  </div>
                </div>                    
                <div class="row">
                  <div class="form-group col-lg-6" v-if="showField('Photo')">
                    <label for="exampleFormControlSelect1">Photo:</label>
                    <button>Upload File</button>
                  </div>
                  <div class="form-group col-lg-6" v-if="showField('TestResults')">
                    <label for="exampleFormControlSelect1">Test Results:</label>
                    <button>Upload File</button>
                  </div>
                </div>
              </div>
              <div class="container col-lg-5">
                <h3>Strains:</h3>
                <ul id="flower-strains">
                  <li v-for="strain in flowerStrains">
                    <h5>{{ strain.strain }}</h5>
                  </li>
                </ul>
              </div>
            </div>
            <hr>
            <button class="btn btn-primary" @click="addFlowerToList">Add</button>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['questions'],
  data() {
    return {
      response: {
        flowers: {
          strain: null,
          weightavailable: null,
          growstyle: null,
          budsize: null,
          shelfready: null,
          potency: null,
          photo: null,
          testresults: null
        }
      },
      flowerStrains: [

      ]
    };
  },
  methods: {
    addFlowerToList() {
      this.flowerStrains.push(this.response.flowers);
    },
    getField(fieldName) {
      return _.find(this.questions, { name: fieldName });
    },
    showField(fieldName) {
      return this.getField(fieldName).enabled;
    }
  }
};
</script>
