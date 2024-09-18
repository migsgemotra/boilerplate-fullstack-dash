import { Context } from 'backend/_types/context'

import { NotesArgs } from 'backend/_types/notes'
import returnQuery from './_returnQuery'

export default async (_root: undefined, args: NotesArgs, context: Context): Promise<number> => {
  const query = await returnQuery(args)

  return await context.database.notes.countDocuments(
    {
      ...query,
      deleted: { $ne: true }
    },
    {}
  )
}
