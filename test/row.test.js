const expect = chai.expect
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', ()=>{
  it('存在',()=>{
    expect(Row).to.exist
  })
})