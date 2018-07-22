import Vue from 'vue';
import sinon from 'sinon';
import CalendarButtons from '@/components/buyer/calendar/master/headers/Buttons';


describe('CalendarButtons.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(CalendarButtons);
    const vm = new Constructor().$mount();

    const addEventBtn = vm.$el.querySelector('button');

    // spying
    const addEventSpy = sinon.spy(vm, 'addEvent');

    // stubbing
    const addEventStub = sinon.stub(vm, 'getCalendars', () => {
      return [];
    });

    expect(addEventBtn.textContent).to.equal('Add Event');
    addEventBtn.click();

    expect(addEventStub.callCount).to.equal(0);
    expect(addEventStub.args[0]).to.equal('setGCalendar');

    addEventStub.restore();
  });
});
