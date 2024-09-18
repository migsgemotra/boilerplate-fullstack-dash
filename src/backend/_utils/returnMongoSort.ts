import { SortDirectionType } from '../_types/enums/sortDirectionType'
import { Sort } from 'mongodb'

const returnMongoSort = (sortBy: string, sortDirection: SortDirectionType): Sort => {
  if (!sortBy || !sortDirection) {
    return null
  }

  if (sortDirection === SortDirectionType.ASC) {
    return [[sortBy, 1]]
  }

  return [[sortBy, -1]]
}

export default returnMongoSort