import { Context } from '../../../_types/context'
import { ObjectId } from 'mongodb'

import { Note, CreateNoteArgs } from 'backend/_types/notes'

export default async (_root: undefined, args: CreateNoteArgs, context: Context): Promise<Note> => {

  const {
    title,
    noteContent
  } = args

  const createObject: Note = {
    title,
    noteContent
  }

  if (title) {
    createObject.title = title
  }

  if (noteContent) {
    createObject.noteContent = noteContent
  }

  const res = await context.database.notes.insertOne({
    ...createObject,
    createdAt: new Date()
  })

  const note: Note = await context.database.notes.findOne({ _id: res.insertedId })

  return note
}
