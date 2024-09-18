import { ObjectId } from 'mongodb'
import { SortDirectionType } from './enums/sortDirectionType'

export interface Note {
  _id?: ObjectId
  title?: string
  noteContent?: string
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
  noteContent?: string
}

export interface UpdateNoteArgs {
  _id?: string
  title?: string
  noteContent?: string
}

export interface DeleteNoteArgs {
  _id?: string
}
