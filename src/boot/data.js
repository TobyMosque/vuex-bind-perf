// import something here
import inject from './inject'
import { generate } from 'src/utils/data'

export default inject(({ Vue }) => {
  const store = {}
  store.table = new Vue({
    data () {
      return {
        columns: [
          { name: 'avatar', label: 'Avatar', field: 'avatar', align: 'left', sortable: true },
          { name: 'firstName', label: 'First Name', field: 'firstName', align: 'left', sortable: true },
          { name: 'lastName', label: 'Last Name', field: 'lastName', align: 'left', sortable: true },
          { name: 'email', label: 'Email', field: 'email', align: 'left', sortable: true },
          { name: 'job', label: 'Job', field: 'job', align: 'left', sortable: true },
          { name: 'company', label: 'Company', field: 'company', align: 'left', sortable: true }
        ],
        pagination: {
          sortBy: 'desc',
          descending: false,
          page: 1,
          rowsPerPage: -1
        }
      }
    }
  })

  const collectionModule = function (list) {
    return new Vue({
      data () {
        return {
          list
        }
      },
      computed: {
        index () {
          return this.list.reduce((map, item, index) => {
            map.set(item.id, index)
            return map
          }, new Map())
        }
      },
      methods: {
        byId (id) {
          const index = this.index.get(id)
          if (index !== undefined) {
            return this.list[index]
          }
        }
      }
    })
  }
  const data = generate()
  store.people = collectionModule(data.people)
  store.jobs = collectionModule(data.jobs)
  store.companies = collectionModule(data.companies)
  return {
    s: store
  }
})
