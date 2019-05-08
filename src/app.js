import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import Group from './button-group'
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group',Group)
new Vue({
  el:'#app',
  data:{
    loading1: false,
    loading2: false,
    loading3: false,
  }
})
import chai from 'chai'
const expect = chai.expect
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon:'setting'
    }
  })
  button.$mount('#test')
  let useEle = button.$el.querySelector('use')
  expect(useEle.getAttribute('xlink:href')).to.eq('#icon-setting')
}