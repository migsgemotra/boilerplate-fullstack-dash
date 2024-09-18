import { gql } from '@apollo/client'

export default gql`
  query NoteQuery($_id: ID!) {
    note: note(_id: $_id) {
      _id
      title
    }
  }
`