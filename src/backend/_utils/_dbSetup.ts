import { Db } from 'mongodb'
import { Database } from '../_types/database'
import { Test } from '../_types/test'
import { User } from '../_types/users'
import { Note } from '../_types/notes'

export default (db: Db): Database => {
  return {
    notes: db.collection<Note>('notes'),
    tests: db.collection<Test>('tests'),
    users: db.collection<User>('users')
  }
}
