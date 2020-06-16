import { store } from '@toby.mosque/utils'
import Person from 'models/Person'

const state = store.mapCollectionItemState(null, { id: 'pk', single: 'person', type: Person })

export default {
  name: 'ComponentRowWithState',
  props: {
    props: Object,
    pk: {
      required: true,
      type: String
    },
    module: {
      type: String,
      default: 'dataA'
    }
  },
  created () {
    state.setModuleName(this.module)
  },
  computed: {
    ...state.computed,
    jobs () {
      return this.$store.state[this.module].jobs
    },
    companies () {
      return this.$store.state[this.module].companies
    }
  }
}
