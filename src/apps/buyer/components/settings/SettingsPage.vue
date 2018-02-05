<style lang="scss" scoped>
.settings-page {
  height: 100%;
}

.settings-master {
  height: 100%;
  width: 100%;
  border-right: 1px solid $section-border-color;
}
</style>

<template>
  <BasePage pageName="Settings" v-if="buyer">
    <div slot="content" class="settings-page">
      <MasterDetail>
        <div slot="master" class="settings-master">
          <Master :buyer="buyer"/>
        </div>
        <div slot="detail" class="settings-detail">
          <Profile v-if="activeTab === 'profile'" :buyer="buyer" />
          <EmailTemplates v-if="activeTab === 'emailTemplates'" :buyer="buyer" />
          <Questionnaire v-if="activeTab === 'questionnaire'" :buyer="buyer" :questionnaire="questionnaire" :buyerSettings="buyerSettings" />
          <ButtonGenerator v-if="activeTab === 'buttonGenerator'" :buyer="buyer" :questionnaire="questionnaire" />
          <Calendar v-if="activeTab === 'calendar'" :buyer="buyer" />
        </div>
      </MasterDetail>
    </div>
  </BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import MasterDetail from '@/components/masterDetail/MasterDetail';
import BasePage from '../BasePage';
import ButtonGenerator from './detail/ButtonGenerator';
import Calendar from './detail/Calendar';
import EmailTemplates from './detail/EmailTemplates';
import Profile from './detail/Profile';
import Questionnaire from './detail/Questionnaire';
import Master from './master/Master';

export default {
  components: {
    BasePage,
    ButtonGenerator,
    Calendar,
    MasterDetail,
    EmailTemplates,
    Profile,
    Questionnaire,
    Master
  },
  computed: {
    ...mapGetters({
      buyer: 'buyer',
      questionnaire: 'questionnaire',
      buyerSettings: 'buyerSettings'
    }),
    activeTab() {
      return this.buyerSettings.activeTab;
    }
  }
};
</script>
