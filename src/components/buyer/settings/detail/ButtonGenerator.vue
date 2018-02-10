<style scoped>
div.btn-gen-field {
  margin-bottom: 1rem;
}
</style>

<template>
<Detail title="Button Generator"
  description="Customize your button and add it to your site to route vendors to your questionnaire."
  :showSave="false" :showCancel="false">
  <div class="row">
    <div class="col-sm-12">
      <div class="row btn-gen-field">
        <div class="col-sm-6">
          <label for="width">Width</label><br>
          <ElSlider name="width" v-model="button.width" :min="10" :max="520" />
        </div>
        <div class="col-sm-6 btn-gen-field">
          <label for="height">Height</label><br>
          <ElSlider name="height" v-model="button.height" :min="10" :max="520"/>
        </div>
      </div>
      <div class="row btn-gen-field">
        <div class="col-sm-6">
          <label for="borderRadius">Border Radius</label><br>
          <ElSlider name="borderRadius" v-model="button.borderRadius" :min="0" :max="280"/>
        </div>
        <div class="col-sm-6">
          <label for="fontSize">Font Size</label><br>
          <ElSlider name="fontSize" v-model="button.text.fontSize" :min="2" :max="120"/>
        </div>
      </div>
      <div class="row btn-gen-field">
        <div class="col-sm-3">
          <label for="backgroundColor">Background Color</label><br>
          <ElColorPicker name="backgroundColor" v-model="button.backgroundColor" />
        </div>
        <div class="col-sm-3">
          <label for="color">Text Color</label><br>
          <ElColorPicker name="color" v-model="button.text.color" />
        </div>
        <div class="col-sm-6">
          <label for="text">Text</label>
          <ElInput name="text" v-model="button.text.text" />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <ElButton type="danger" class="pull-right" @click="reset">Reset</ElButton>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-12">
      <br />
      <div v-html="generateButtonCode()"></div>
      <br />
    </div>
  </div>

  <div class="row">
    <div class="col-sm-12">
      <label>Paste the code below on your site to generate this button.</label>
      <ElCard>
        {{ generateButtonCode() }}
      </ElCard>
    </div>
  </div>
</Detail>
</template>

<script>
import Detail from '@/components/masterDetail/Detail';
import {
  Button as ElButton,
  Card as ElCard,
  ColorPicker as ElColorPicker,
  Input as ElInput,
  Slider as ElSlider } from 'element-ui';

export default {
  components: {
    Detail,
    ElButton,
    ElCard,
    ElColorPicker,
    ElInput,
    ElSlider
  },
  data() {
    return {
      button: {
        borderRadius: 12,
        backgroundColor: '#CCC',
        width: 200,
        height: 75,
        text: {
          fontSize: 30,
          text: 'Apply',
          color: '#000'
        }
      },
      defaultButton: {
        borderRadius: 12,
        backgroundColor: '#CCC',
        width: 200,
        height: 75,
        text: {
          fontSize: 30,
          text: 'Apply',
          color: '#000'
        }
      }
    };
  },
  props: ['buyer', 'questionnaire'],
  methods: {
    generateButtonCode() {
      return `<button type="button" style="border-radius:${this.button.borderRadius}px; background-color:${this.button.backgroundColor};
      width:${this.button.width}px; height:${this.button.height}px; font-size:${this.button.text.fontSize}px"><a href="${this.generateUrl()}" target="_blank"
      style="color:${this.button.text.color}; text-decoration:none;">${this.button.text.text}</a></button>`;
    },
    generateUrl() {
      return `http://localhost:8082/?qid=${this.questionnaire._id}#/`;
    },
    reset() {
      this.button = _.cloneDeep(this.defaultButton);
    }
  }
};
</script>
