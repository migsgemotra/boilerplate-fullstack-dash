import React, { ReactElement } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import PageHeader from '../../../components/_common/PageHeader'
import { Note, NoteArgs } from 'backend/_types/notes'
import { useQuery, gql } from '@apollo/client'
import DeleteNoteComponent from 'frontend/components/notes/Delete'
import layout from 'frontend/layouts/layout'

const query = gql`
  query NoteUpdatePageQuery($_id: ID!) {
    note: note(_id: $_id) {
      _id
      title
    }
  }
`

const DeleteNotePage: NextPage = (): ReactElement => {
  const router = useRouter()
  const _id = router.query.noteId as string

  const queryVariables: NoteArgs = {
    _id: _id
  }

  const { data } = useQuery(query, {
    skip: !_id,
    variables: queryVariables
  })

  const note: Note = data?.note
  return (
    <>
      <PageHeader
        title={note ? `${'Delete' + note?.title}` : 'Delete Note'}
        routes={[
          {
            title: 'Notes',
            href: {
              pathname: '/notes',
              query: {}
            }
          },
          {
            title: 'Note',
            href: {
              pathname: '/notes/[notedId]',
              query: {
                noteId: String(note?._id)
              }
            }
          }
        ]}
      />
      <DeleteNoteComponent />
    </>
  )
}

export default layout(DeleteNotePage)
