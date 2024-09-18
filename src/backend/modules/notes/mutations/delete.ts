import { Context } from '../../../_types/context'
import { ObjectId } from 'mongodb'

import { Note, DeleteNoteArgs } from 'backend/_types/notes'

export default async (_root: undefined, args: DeleteNoteArgs, context: Context): Promise<Note> => {

  const res = await context.database.notes.findOneAndUpdate(
    {
      _id: new ObjectId(args._id)
    },
    {
      $set: {
        deleted: true,
        deletedAt: new Date(),
      }
    },
    { returnDocument: 'after' }
  )

  return res.value
}
