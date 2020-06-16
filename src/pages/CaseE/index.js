import { createHelpers } from 'vuex-map-fields'
const { mapMultiRowFields } = createHelpers({
  getterType: 'dataB/getField',
  mutationType: 'dataB/updateField'
})

export default {
  name: 'PageCaseE',
  computed: mapMultiRowFields(['people', 'jobs', 'companies'])
}
