import faker from 'faker'
import { Company, Job, Person } from 'models'
import { uid } from 'quasar'

export function generate () {
  const companies = []
  const jobs = []
  const people = []

  faker.locale = 'en_US'
  for (let i = 0; i < 5; i++) {
    const company = new Company({
      id: uid(),
      name: faker.company.companyName()
    })
    companies.push(company)
  }

  for (let i = 0; i < 10; i++) {
    const job = new Job({
      id: uid(),
      name: faker.name.jobTitle()
    })
    jobs.push(job)
  }

  for (let i = 0; i < 50; i++) {
    const companyIndex = Math.floor(Math.random() * Math.floor(5))
    const jobIndex = Math.floor(Math.random() * Math.floor(10))
    const company = companies[companyIndex]
    const job = jobs[jobIndex]
    const person = new Person({
      id: uid(),
      avatar: faker.internet.avatar(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      company: company.id,
      job: job.id
    })
    people.push(person)
  }
  return { companies, jobs, people }
}
