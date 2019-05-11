const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.exist
  })
  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('接收 value', () => {
      vm = new Constructor({
        propsData: {
          value: '123'
        }
      }).$mount()
      const inputEle = vm.$el.querySelector('input')
      expect(inputEle.value).to.eq('123')
    })
    it('接收 disabled', () => {
      const vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputEle = vm.$el.querySelector('input')
      expect(inputEle.disabled).to.eq(true)
    })
    it('接收 readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputEle = vm.$el.querySelector('input')
      expect(inputEle.readOnly).to.eq(true)
    })
    it('接收 error', () => {
      vm = new Constructor({
        propsData: {
          error: '你错了'
        }
      }).$mount()
      const useEle = vm.$el.querySelector('use')
      expect(useEle.getAttribute('xlink:href')).to.eq('#icon-error')
      const errorMessage = vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerText).to.eq('你错了')
    })
  })
  describe('事件', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('支持 change/input/focus/blur 事件', () => {
      ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback)
        let event = new Event(eventName)
        let inputEle = vm.$el.querySelector('input')
        inputEle.dispatchEvent(event)
        expect(callback).to.have.been.called
        // expect(callback).to.have.been.callWith(event) 测change事件的第一次个传参数。
      })
    })
  })
})