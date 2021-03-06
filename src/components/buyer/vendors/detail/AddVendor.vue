<template>
  <Detail title="Add A New Vendor" description="Add your already existing vendors."
    :canSave="true" :canCancel="true" @save="save" @cancel="cancel">
    <ElForm :model="vendor.company" :rules="companyFormRules" ref="vendor.company">
      <div class="row">
        <div class="col-sm-12">
          <h3>Company</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6">
          <ElFormItem label="Name" prop="name">
            <ElInput v-model="vendor.company.name" placeholder="Name" />
          </ElFormItem>
        </div>
        <div class="col-12 col-sm-6">
          <ElFormItem label="Address" prop="address">
            <ElInput v-model="vendor.company.address" placeholder="Address" />
          </ElFormItem>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6">
          <ElFormItem label="City" prop="city">
            <ElInput v-model="vendor.company.city" placeholder="City" />
          </ElFormItem>
        </div>
        <div class="col-12 col-sm-2">
          <ElFormItem label="State" prop="state">
            <ElInput v-model="vendor.company.state" placeholder="State" />
          </ElFormItem>
        </div>
        <div class="col-12 col-sm-3">
          <ElFormItem label="Zip" prop="zip">
            <ElInput v-model="vendor.company.zip" placeholder="Zip Code" />
          </ElFormItem>
        </div>
      </div>
    </ElForm>
    <ElForm :model="vendor.contact" :rules="contactFormRules" ref="vendor.contact">
      <div class="row">
        <div class="col-12 col-sm-6">
          <ElFormItem label="First Name" prop="firstName">
            <ElInput v-model="vendor.contact.firstName" placeholder="First Name" />
          </ElFormItem>
        </div>
        <div class="col-12 col-sm-6">
          <ElFormItem label="Last Name" prop="lastName">
            <ElInput v-model="vendor.contact.lastName" placeholder="Last Name" />
          </ElFormItem>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6">
          <ElFormItem label="Phone" prop="phone">
            <ElInput v-model="vendor.contact.phone" placeholder="Phone" />
          </ElFormItem>
        </div>
        <div class="col-12 col-sm-6">
          <ElFormItem label="Email" prop="email">
            <ElInput v-model="vendor.contact.email" placeholder="Email" />
          </ElFormItem>
        </div>
      </div>
    </ElForm>
  </Detail>
</template>

<script>
import { mapGetters } from 'vuex';
import Detail from '@/components/masterDetail/Detail';
import {
  Form as ElForm,
  FormItem as ElFormItem,
  Input as ElInput } from 'element-ui';
import { notifySuccess, notifyError } from '@/lib/followups';

export default {
  components: {
    Detail,
    ElForm,
    ElFormItem,
    ElInput
  },
  data() {
    return {
      vendor: {
        company: {
          name: null,
          address: null,
          zip: null,
          city: null,
          state: null
        },
        contact: {
          firstName: null,
          lastName: null,
          phone: null,
          email: null
        }
      }
    };
  },
  computed: {
    ...mapGetters({
      settings: 'settings'
    }),
    companyFormRules() {
      return this.settings.rules['buyer-company'];
    },
    contactFormRules() {
      return this.settings.rules['buyer-contact'];
    }
  },
  methods: {
    cancel() {
      this.$store.commit('cancelDetailOverride');
    },
    save() {
      this.validateForm('vendor.contact')
        .then(() => {
          return this.validateForm('vendor.company');
        })
        .then(() => {
          return this.$store.dispatch('createVendor', _.cloneDeep(this.vendor));
        })
        .then(notifySuccess('Vendor Created!'))
        .catch(notifyError());
    },
    validateForm(formRef) {
      return new Promise((res, rej) => {
        this.$refs[formRef].validate(function (valid) {
          if (valid) {
            res();
          } else {
            rej();
          }
        });
      });
    }
  }
};
</script>
