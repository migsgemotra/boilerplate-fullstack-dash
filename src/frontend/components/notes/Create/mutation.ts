import { gql } from '@apollo/client'

export default gql`
  mutation CreateNote(
    $title: String
    $noteContent: String
  ) {
    note: create_note(
      title: $title
      notContent: $noteContent
    ) {
      _id
    }
  }
`
