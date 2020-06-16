import { generate } from 'src/utils/data'
import { getField, updateField } from 'vuex-map-fields'

export default {
  namespaced: true,
  state () {
    return generate()
  },
  getters: {
    getField
  },
  mutations: {
    updateField
  }
}
