import React, { ReactElement } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import PageHeader from '../../../components/_common/PageHeader'
import { Note, NoteArgs } from 'backend/_types/notes'
import { useQuery, gql } from '@apollo/client'
import PageNavigation from 'frontend/components/_common/PageNavigation'
import { DeleteOutline, Edit } from '@mui/icons-material'
import layout from 'frontend/layouts/layout'

const query = gql`
  query NoteUpdatePageQuery($_id: ID!) {
    note: note(_id: $_id) {
      _id
      title
    }
  }
`

const NotePage: NextPage = (): ReactElement => {
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
        title={note ? `${note?.title}` : 'Note'}
        routes={[
          {
            title: 'Notes',
            href: {
              pathname: '/notes',
              query: {}
            }
          }
        ]}
      />
      <PageNavigation
        routes={[
          {
            primary: 'Update',
            secondary: 'Update this note',
            icon: <Edit />,
            href: {
              pathname: '/notes/[noteId]/update',
              query: {
                noteId: _id
              }
            }
          },
          {
            primary: 'Delete',
            secondary: 'Delete this note',
            icon: <DeleteOutline />,
            href: {
              pathname: '/notes/[notedId]/delete',
              query: {
                noteId: _id
              }
            }
          }
        ]}
      />
    </>
  )
}

export default layout(NotePage)
