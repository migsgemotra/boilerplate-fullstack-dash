import { Collection } from 'mongodb'
import { Note } from './notes'

export interface Database {
  users: Collection<User>
  notes: Collection<Note>
}
