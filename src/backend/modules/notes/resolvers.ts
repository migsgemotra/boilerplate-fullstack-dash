import { Context } from 'backend/_types/context'
import { Note } from 'backend/_types/notes'

export default {
  Note: {
    __resolveReference: async (note: Note, context: Context): Promise<Note> => {
      if (!note._id) {
        return null
      }

      return await context.database.notes.findOne(note._id)
    },
    title: (note: Note): string => {
      return String(note.title || '')
    }
  }
}
