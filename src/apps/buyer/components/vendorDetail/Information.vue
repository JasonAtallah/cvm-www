<style scoped>
.information-content th {
  text-align: right;
  width: 150px;
}

i.el-icon-check {
  color: #13CE66;
}

i.el-icon-close {
  color: #FF4949;
}

i.el-icon-edit {
  cursor: pointer;
}

span.field-display {
  font-size: 1.2rem;
}
</style>

<template>
  <div class="information-content">
    <div class="card card-body bg-light">
      <div class="row">
        <div class="col-sm-6">
          <h3>Company</h3>
          <div v-if="isEditing">
            <div class="row">
              <div class="col-sm-12">
                <ElInput placeholder="Company Name" v-model="vendor.company.name" />
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-sm-12">
                <ElInput placeholder="Company Address" v-model="vendor.company.address" />
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-sm-4">
                <ElInput placeholder="Company City" v-model="vendor.company.city" />
              </div>
              <div class="col-sm-4">
                <ElInput placeholder="Company State" v-model="vendor.company.state" />
              </div>
              <div class="col-sm-4">
                <ElInput placeholder="Company Zip" v-model="vendor.company.zip" />
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-sm-12">
                <ElInput placeholder="SREA#" v-model="vendor.company.srea" />
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-sm-3">
                <ElCheckbox v-model="vendor.company.haveTaxId">Tax ID</ElCheckbox>
              </div>
              <div class="col-sm-5">
                <ElCheckbox v-model="vendor.company.partOfCollective">Part of Collective</ElCheckbox>
              </div>
              <div class="col-sm-4">
                <ElCheckbox v-model="vendor.company.haveSellerPermit">Seller Permit</ElCheckbox>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="row">
              <div class="col-sm-12">
                <span class="field-display">{{ vendor.company.name}}</span>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <span class="field-display">{{ vendor.company.address}} {{ vendor.company.city }}, {{ vendor.company.state }} {{ vendor.company.zip }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <span class="field-display"><a :href="vendor.company.website" target="_blank">{{ vendor.company.website }}</a></span>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <span class="field-display" v-if="vendor.company.srea">SREA#: {{ vendor.company.srea }}</span>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-sm-4">
                <span class="property-icon">
                  <i v-if="vendor.company.haveTaxId" class="el-icon-check"></i>
                  <i v-else class="el-icon-close"></i>
                </span>
                <span class="field-display">Tax ID</span>
              </div>
              <div class="col-sm-4">
                <span class="property-icon">
                  <i v-if="vendor.company.partOfCollective" class="el-icon-check"></i>
                  <i v-else class="el-icon-close"></i>
                </span>
                <span class="field-display">Part of Collective</span>
                </div>
              <div class="col-sm-4">
                <span class="property-icon">
                  <i v-if="vendor.company.haveSellerPermit" class="el-icon-check"></i>
                  <i v-else class="el-icon-close"></i>
                </span>
                <span class="field-display">Seller Permit</span>
              </div>
            </div>
          </div>

        </div>
        <div class="col-sm-5">
          <h3>Contact</h3>
          <div v-if="isEditing">
            <div class="row">
              <div class="col-sm-6">
                <ElInput placeholder="Fist Name" v-model="vendor.contact.firstName" />
              </div>
              <div class="col-sm-6">
                <ElInput placeholder="Last Name" v-model="vendor.contact.lastName" />
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-sm-12">
                <ElInput placeholder="Phone" v-model="vendor.contact.phone" />
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-sm-12">
                <ElInput placeholder="Email" v-model="vendor.contact.email" />
              </div>
            </div>
          </div>
          <div v-else>
            <div class="row">
              <div class="col-sm-12">
                <span class="field-display">{{ vendor.contact.firstName }} {{ vendor.contact.lastName }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <span class="field-display">{{ vendor.contact.phone }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <span class="field-display">{{ vendor.contact.email }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-1">
          <i class="el-icon-edit" @click="toggleEdit"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  Button as ElButton,
  Checkbox as ElCheckbox,
  Input as ElInput } from 'element-ui';

export default {
  props: ['vendor'],
  components: {
    ElButton,
    ElCheckbox,
    ElInput
  },
  data() {
    return {
      isEditing: false
    };
  },
  methods: {
    toggleEdit() {
      this.isEditing = !this.isEditing;
    }
  }
};
</script>
