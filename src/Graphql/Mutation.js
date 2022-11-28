import { gql } from '@apollo/client'

export const ADD_EMPLOYEE = gql`
  mutation addEmployee(
    $firstname: String!,
    $lastname: String!,
    $location: String!
  ) {
    addEmployee(
        firstname: $firstname,
        lastname: $lastname,
        location: $locatioon
    ) {
        firstname
        lastname
        location
    }
  }
`