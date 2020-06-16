export default class Person {
  constructor ({
    id = '',
    avatar = '',
    firstName = '',
    lastName = '',
    email = '',
    company = null,
    job = null
  } = {}) {
    this.id = id
    this.avatar = avatar
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.company = company
    this.job = job
  }
}
