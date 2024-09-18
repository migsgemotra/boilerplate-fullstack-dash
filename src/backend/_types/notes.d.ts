import { ObjectId } from 'mongodb'
import { SortDirectionType } from './enums/sortDirectionType'

export interface Note {
  _id?: ObjectId
  title?: string
  note?: string
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
  deleted?: boolean
}

export interface NotesArgs {
  limit?: number
  searchText?: string
  skip?: number
  sortBy?: string
  sortDirection?: SortDirectionType
}

export interface NoteArgs {
  _id: string
}

export interface CreateNoteArgs {
  title?: string
  note?: string
}

export interface UpdateNoteArgs {
  _id?: string
  title?: string
  note?: string
}

export interface DeleteLeadArgs {
  _id?: string
}
