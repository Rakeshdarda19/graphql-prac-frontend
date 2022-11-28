import{ gql } from '@apollo/client'

export const GET_ALl_EMPLOYEE = gql`
query RootQueryType{
    employee{
      firstname
      lastname
      location
    }
  }
`