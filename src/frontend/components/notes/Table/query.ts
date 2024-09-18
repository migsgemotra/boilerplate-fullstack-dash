import { gql } from '@apollo/client'

export default gql`
  query NotesQuery(
    $limit: Int!
    $searchText: String
    $skip: Int!
    $sortBy: String
    $sortDirection: SortDirectionType
  ) {
    notes: notes(
      limit: $limit
      searchText: $searchText
      skip: $skip
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
      _id
      title
      noteContent
      createdAt
    }

    notesCount: notes_count(
      limit: $limit
      searchText: $searchText
      skip: $skip
      sortBy: $sortBy
      sortDirection: $sortDirection
    )
  }
`
