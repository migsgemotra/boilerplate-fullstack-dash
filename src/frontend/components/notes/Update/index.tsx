import { useRouter } from 'next/router'
import React, { ReactElement, useState } from 'react'

import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { ApolloError, useMutation, useQuery } from '@apollo/client'
import mutation from './mutation'

import { Chip, FormControlLabel, LinearProgress, Checkbox } from '@mui/material'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'

import { Note, NoteArgs, UpdateNoteArgs } from '../../../../backend/_types/notes'
import query from './query'

const UpdateNoteComponent = (): ReactElement => {
  const router = useRouter()
  const _noteId = router.query.noteId as string

  const [title, setTitle] = useState<string>('')
  const [noteContent, setNoteContent] = useState<string>('')

  const queryVariables: NoteArgs = {
    _id: _noteId
  }

  const { data, loading: queryLoading } = useQuery(query, {
    skip: !_noteId,
    fetchPolicy: 'network-only',
    variables: queryVariables,
    onCompleted: (e: { note: Note }) => {
      setTitle(e.note?.title)
      setNoteContent(e.note?.noteContent)
    }
  })

  const updateVariables: UpdateNoteArgs = {
    _id: _noteId,
    title,
    noteContent
  }

  const [updateNote] = useMutation(mutation, {
    variables: updateVariables,
    onCompleted: (): void => {
      global.setNotification('success', 'Update successful')
    },
    onError: (e: ApolloError): void => {
      global.setNotification('error', e.message)
    }
  })

  if (queryLoading) {
    return <LinearProgress />
  }

  const disableSubmit = queryLoading || !title

  return (
    <>
      <form
        onSubmit={(e): void => {
          e.preventDefault()
        }}
      >
        <Typography variant='h5' gutterBottom>
          {'Note'}
        </Typography>
        <TextField
          disabled={queryLoading}
          label={'Title'}
          value={title}
          onChange={(e): void => {
            setTitle(e.target.value)
          }}
        />
        <TextField
          disabled={queryLoading}
          label={'Note content'}
          value={noteContent}
          onChange={(e): void => {
            setNoteContent(e.target.value)
          }}
        />
        <Button
          type={'submit'}
          color={'primary'}
          variant={'contained'}
          onClick={(): void => {
            updateNote()
          }}
          disabled={disableSubmit}
        >
          {'Update'}
        </Button>
      </form>
    </>
  )
}

export default UpdateNoteComponent
