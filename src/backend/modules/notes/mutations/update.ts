import { Context } from '../../../_types/context'
import { ObjectId } from 'mongodb'

import { Note, UpdateNoteArgs } from 'backend/_types/notes'

export default async (_root: undefined, args: UpdateNoteArgs, context: Context): Promise<Note> => {
  const {
    _id,
    title,
    noteContent
  } = args

  const updateObject: Note = {}

  if (title) {
    updateObject.title = title
  }

  if (noteContent) {
    updateObject.noteContent = noteContent
  }

  const res = await context.database.notes.findOneAndUpdate(
    {
      _id: new ObjectId(_id)
    },
    {
      $set: {
        ...updateObject,
        updatedAt: new Date()
      }
    },
    { returnDocument: 'after' }
  )

  return res.value
}
