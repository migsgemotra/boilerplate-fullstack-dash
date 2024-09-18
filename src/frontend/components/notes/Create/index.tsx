import { useRouter } from 'next/router'
import React, { ReactElement, useState } from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { ApolloError, useMutation } from '@apollo/client'
import mutation from './mutation'

import { CreateNoteArgs } from '../../../../backend/_types/notes'

const CreateNoteComponent = (): ReactElement => {
  const router = useRouter()

  const [title, setTitle] = useState<string>('')
  const [noteContent, setNoteContent] = useState<string>('')


  const createVariables: CreateNoteArgs = {
    title,
    noteContent
  }

  const [createNote, mutationState] = useMutation(mutation, {
    variables: createVariables,
    onCompleted: (e): void => {
      global.setNotification('success', 'Create successful')

      router.push('/notes/[noteId]', `/notes/${e?.note._id}`)
    },
    onError: (e: ApolloError): void => {
      global.setNotification('error', e.message)
    }
  })

  const disableSubmit = mutationState.loading || !title

  return (
    <>
      <form
        onSubmit={(e): void => {
          e.preventDefault()
        }}
      >
        <TextField
          disabled={mutationState.loading}
          label={'Title'}
          value={title}
          required
          onChange={(e): void => {
            setTitle(e.target.value)
          }}
        />
        <TextField
          disabled={mutationState.loading}
          label={'Note Content'}
          value={noteContent}
          required
          onChange={(e): void => {
            setNoteContent(e.target.value)
          }}
        />
        <Button
          type={'submit'}
          color={'primary'}
          variant={'contained'}
          onClick={(): void => {
            createNote({ variables: { ...createVariables } })
          }}
          disabled={disableSubmit}
        >
          {'Create'}
        </Button>
      </form>
    </>
  )
}

export default CreateNoteComponent