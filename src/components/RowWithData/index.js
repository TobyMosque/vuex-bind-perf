export default {
  name: 'ComponentRowWithData',
  props: {
    props: Object,
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    person () {
      return this.$s.people.byId(this.id)
    }
  }
}
