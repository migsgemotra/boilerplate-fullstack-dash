import { Db } from 'mongodb'
import { Database } from '../_types/database'
import { User } from '../_types/users'
import { Note } from '../_types/notes'

export const initializeIndexes = async (database: Database): Promise<void> => {
  await database.notes.createIndex({
    name: 'text'
  })

  return
}

export default (db: Db): Database => {
  return {
    notes: db.collection<Note>('notes'),
    users: db.collection<User>('users')
  }
}
