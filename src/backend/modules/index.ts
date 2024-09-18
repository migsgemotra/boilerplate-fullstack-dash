import sample from './sample'
import notes from './notes'
import { gql } from 'apollo-server-express'

const emptyDefs = gql`
  scalar Date
  type Query
  type Mutation

  enum SortDirectionType {
    ASC
    DESC
  }
`

export const resolvers = [sample.resolvers, notes.resolvers]

export const typeDefs = [emptyDefs, sample.typeDefs, notes.typeDefs]
