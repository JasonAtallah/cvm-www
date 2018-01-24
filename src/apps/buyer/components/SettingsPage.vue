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
          <SettingsMaster :buyer="buyer"/>
        </div>
        <div slot="detail" class="settings-detail">
          <Profile v-if="activeTab === 'profile'" :buyer="buyer" />
          <EmailTemplates v-if="activeTab === 'emailTemplates'" :buyer="buyer" />
          <Questionnaire v-if="activeTab === 'questionnaire'" :buyer="buyer" :questionnaire="questionnaire" :buyerSettings="settings" />
          <ButtonGenerator v-if="activeTab === 'buttonGenerator'" :buyer="buyer" :questionnaire="questionnaire" />
        </div>
      </MasterDetail>
    </div>
  </BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import MasterDetail from '@/components/MasterDetail';
import BasePage from './BasePage';
import ButtonGenerator from './detail/buyerSettings/ButtonGenerator';
import EmailTemplates from './detail/buyerSettings/EmailTemplates';
import Profile from './detail/buyerSettings/Profile';
import Questionnaire from './detail/buyerSettings/Questionnaire';
import SettingsMaster from './master/SettingsMaster';

export default {
  components: {
    BasePage,
    ButtonGenerator,
    MasterDetail,
    EmailTemplates,
    Profile,
    Questionnaire,
    SettingsMaster
  },
  computed: {
    ...mapGetters({
      buyer: 'buyer',
      questionnaire: 'questionnaire',
      settings: 'buyerSettings'
    }),
    activeTab() {
      return this.settings.activeTab;
    }
  }
};
</script>
