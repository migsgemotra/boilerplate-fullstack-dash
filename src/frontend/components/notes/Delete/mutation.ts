import { gql } from '@apollo/client'

export default gql`
  mutation DeleteNote($_id: ID!) {
    note: delete_note(_id: $_id) {
      _id
    }
  }
`
