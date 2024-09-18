import { Context } from '../../../_types/context'

import { Note, NotesArgs } from 'backend/_types/notes'
import returnQuery from './_returnQuery'
import { SortDirectionType } from '../../../_types/enums/sortDirectionType'
import returnMongoSort from '../../../_utils/returnMongoSort'

export default async (_root: undefined, args: NotesArgs, context: Context): Promise<Note[]> => {
  const query = await returnQuery(args)

  const { limit, skip, sortBy = 'createdAt', sortDirection = SortDirectionType.DESC } = args

  return await context.database.notes
    .find(
      {
        ...query,
        deleted: { $ne: true }
      },
      {
        skip,
        limit,
        sort: returnMongoSort(sortBy, sortDirection)
      }
    )
    .toArray()
}
