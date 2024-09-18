import { ObjectId } from 'mongodb'
import { Context } from 'backend/_types/context'
import { Note, NoteArgs } from 'backend/_types/notes'

export default async (_: undefined, { _id }: NoteArgs, { database }: Context): Promise<Note> => {
  const note = await database.notes.findOne({ _id: new ObjectId(_id), deleted: { $ne: true } })
  return note
}
