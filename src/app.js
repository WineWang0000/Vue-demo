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
import spies from 'chai-spies'
chai.use(spies)
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
  button.$el.remove()
  button.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon:'setting',
      loading: true
    }
  })
  button.$mount()
  let useEle = button.$el.querySelector('use')
  expect(useEle.getAttribute('xlink:href')).to.eq('#icon-loading')
  button.$el.remove()
  button.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon:'setting'
    }
  })
  button.$mount(div)
  let svg = button.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  button.$el.remove()
  button.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon:'setting',
      iconPosition: 'right'
    }
  })
  button.$mount(div)
  let svg = button.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  button.$el.remove()
  button.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'setting',
    }
  })
  vm.$mount()
  let spy = chai.spy(function(){})
  vm.$on('click', spy)
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
}