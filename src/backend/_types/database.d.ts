import { Collection } from 'mongodb'
import { Test } from 'test'
import { Note } from './notes'

export interface Database {
  tests: Collection<Test>
  users: Collection<User>
  notes: Collection<Note>
}
