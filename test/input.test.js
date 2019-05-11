const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.exist
  })
  it('props', ()=>{
    it('接收 value',() =>{
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData:{
          value: '123'
        }
      }).$mount()
      const inputEle = vm.$el.querySelector('input')
      expect(inputEle.value).to.eq('123')
      vm.$destroy()
    })
    it('接收 disabled',() =>{
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData:{
          disabled: true
        }
      }).$mount()
      const inputEle = vm.$el.querySelector('input')
      expect(inputEle.disabled).to.eq(true)
      vm.$destroy()
    })
    it('接收 readonly',() =>{
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData:{
          readonly: true
        }
      }).$mount()
      const inputEle = vm.$el.querySelector('input')
      expect(inputEle.readOnly).to.eq(true)
      vm.$destroy()
    })
    it('接收 error', ()=>{
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData:{
          error: '你错了'
        }
      }).$mount()
      const useEle = vm.$el.querySelector('use')
      expect(useEle.getAttribute('xlink:href')).to.eq('#icon-error')
      const errorMessage = vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerText).to.eq('你错了')
    })
  })

})