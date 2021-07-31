export interface Pessoa {
  gender?: string
  name: {
    first: string,
    last: string
  };
  location: {
    city: string,
    country: string
  }
  email?: string
  login?: string
  registered?: string
  phone?: string
  cell?: string
  id?: string
  picture: {
    large: string,
  }
  nat?: string,
  seguido?: boolean,
  dob?: {
    age?: number
  }

}
