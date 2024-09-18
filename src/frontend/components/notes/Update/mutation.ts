import { gql } from '@apollo/client'

export default gql`
  mutation UpdateNote(
    $_id: ID!
    $title: String
    $noteContent: String
  ) {
    note: update_note(
      _id: $_id
      title: $title
      noteContent: $noteContent
    ) {
      _id
    }
  }
`
