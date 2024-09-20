import { Collection } from 'mongodb'
import { Note } from './notes'
import { User } from './users'

export interface Database {
  notes: Collection<Note>
  users: Collection<User>
}
