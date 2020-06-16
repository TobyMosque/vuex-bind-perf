import { generate } from 'src/utils/data'
import { Company, Job, Person } from 'models'
import { factory } from '@toby.mosque/utils'

class StateModel {
  constructor () {
    const state = generate()
    this.people = state.people
    this.jobs = state.jobs
    this.companies = state.companies
  }
}

const options = {
  model: StateModel,
  collections: [
    { single: 'person', plural: 'people', id: 'id', type: Person },
    { single: 'job', plural: 'jobs', id: 'id', type: Job },
    { single: 'company', plural: 'companies', id: 'id', type: Company }
  ]
}

const store = factory.store({
  options
})

export default store
export { options }
