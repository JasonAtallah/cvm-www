<template>
  <div>
    <h3>Email</h3>
    <p class="lead">
      Send an email to {{ params.vendor.name }} after reviewing their application.
    </p>
      <div class="card card-body bg-light">
        <div class="row">
          <div class="col-sm-12">
            <label for="subject">Subject</label>
            <ElInput placeholder="Subject" v-model="email.subject" />
            <label for="body">Body</label>
            <ElInput type="textarea" :rows="15" placeholder="Body" v-model="email.body" />
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-lg btn-primary" @click="send">Send</button>
        <button type="button" class="btn btn-lg btn-default" @click="cancel">Cancel</button>
      </div>

  </div>
</template>

<script>
import { Input as ElInput } from 'element-ui';

export default {
  components: {
    ElInput
  },
  props: ['params'],
  computed: {
    email() {
      return this.$store.getters.buyer.emails[this.params.type];
    }
  },
  methods: {
    cancel() {
      this.$store.commit('cancelDetailOverride');
    },
    send() {
      return this.$store.dispatch(this.params.type, {
        vendor: this.params.vendor,
        email: this.email
      });
    }
  }
};
</script>
