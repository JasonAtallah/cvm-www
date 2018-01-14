import Vue from 'vue';
import CalendarButtons from '@/apps/buyer/components/calendarPage/CalendarButtons';

describe('CalendarButtons.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(CalendarButtons);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('button').textContent)
      .to.equal('Add Event');
  });
});
