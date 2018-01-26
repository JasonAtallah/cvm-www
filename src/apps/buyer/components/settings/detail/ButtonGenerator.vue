<style scoped>
div.btn-gen-field {
  margin-bottom: 1rem;
}

span#code-paste-text {
  margin-left: 10px;
}
</style>

<template>
<div>
  <h3>Button Generator</h3>
  <p class="lead">
    Customize your button and add it to your site to route vendors to your questionnaire.
  </p>
  <div class="card card-body bg-light">
    <div slot="header" class="clearfix">

      <div class="row">
        <div class="col-sm-8">
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

        <div class="col-sm-4">
          <div v-html="generateButtonCode()"></div>
        </div>

      </div>
      <br>
      <div class="row">
        <div class="col-sm-12">
          <span id="code-paste-text">Paste the code below on your site to generate this button.</span>
          <ElCard>
            {{ generateButtonCode() }}
          </ElCard>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import {
  Button as ElButton,
  Card as ElCard,
  ColorPicker as ElColorPicker,
  Input as ElInput,
  Slider as ElSlider } from 'element-ui';

export default {
  components: {
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
        backgroundColor: '#00e64d',
        width: 200,
        height: 75,
        text: {
          fontSize: 30,
          text: 'Apply',
          color: '#f2f2f2'
        }
      },
      defaultButton: {
        borderRadius: 12,
        backgroundColor: '#00e64d',
        width: 200,
        height: 75,
        text: {
          fontSize: 30,
          text: 'Apply',
          color: '#f2f2f2'
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

