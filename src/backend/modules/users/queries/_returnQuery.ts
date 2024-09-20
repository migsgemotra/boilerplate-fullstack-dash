import { Filter } from 'mongodb'

import { Note, NotesArgs } from 'backend/_types/notes'

import prepareSearchText from '../../../_utils/prepareSearchText'

const returnQuery = async (args: NotesArgs): Promise<Filter<Note>> => {
  const query: Filter<Note> = {}

  if (args.searchText) {
    query['$text'] = {
      $search: prepareSearchText(args.searchText),
      $caseSensitive: false
    }
  }

  return query
}

export default returnQuery
