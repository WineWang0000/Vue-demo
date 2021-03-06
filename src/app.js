import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import Group from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from 'plugin'
import Collapse from './collapse'
import CollapseItem from './collapse-item'



Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group',Group)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)
Vue.use(plugin)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)

new Vue({
  el:'#app',
  data:{
    selectedTab: '2'
  },
  created(){

  },
  methods:{
    showToast(){
      this.$toast('I am Wine')
    }
  },

})
