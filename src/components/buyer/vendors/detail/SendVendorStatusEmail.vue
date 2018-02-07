<template>
  <Detail title="Email" :description="genDescription" :canSave="canSend" @save="send" @cancel="cancel">
    <div class="row">
      <div class="col-sm-12">
        <label for="subject">Subject</label>
        <ElInput placeholder="Subject" v-model="email.subject" />
        <label for="body">Body</label>
        <ElInput type="textarea" :rows="15" placeholder="Body" v-model="email.body" />
      </div>
    </div>
  </Detail>
</template>

<script>
import Detail from '@/components/masterDetail/Detail';
import { Input as ElInput } from 'element-ui';

export default {
  components: {
    Detail,
    ElInput
  },
  props: ['params'],
  computed: {
    canSend() {
      return this.email.subject.length > 0 && this.email.body.length > 0;
    },
    email() {
      return this.$store.getters.buyer.emails[this.params.type];
    },
    genDescription() {
      return `Send an email to ${this.params.vendor.name} after reviewing their application.`;
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
      })
        .then(() => {
          this.$store.dispatch('successNotification', 'Email Sent');
        });
    }
  }
};
</script>
