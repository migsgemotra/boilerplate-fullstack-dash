import React, { ReactElement, useState } from 'react'
import { useRouter } from 'next/router'

import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

import { useMutation, ApolloError, useQuery } from '@apollo/client'
import mutation from './mutation'
import query from './query'
import { DeleteNoteArgs, Note } from 'backend/_types/notes'

const DeleteNoteComponent = (): ReactElement => {
  const router = useRouter()
  const noteId = router?.query?.noteId as string

  const [checked, setChecked] = useState<boolean>(false)

  const variables: DeleteNoteArgs = {
    _id: noteId
  }

  const { data } = useQuery(query, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'network-only',
    variables
  })

  const [deleteNote, mutationState] = useMutation(mutation, {
    variables,
    onCompleted: (): void => {
      global.setNotification('success', 'Delete successful')
      router.push({
        pathname: '/notes'
      })
    },
    onError: (e: ApolloError): void => {
      global.setNotification('error', e.message)
    }
  })

  const note: Note = data?.note
  const disableSubmit = mutationState.loading || !checked

  return (
    <form
      onSubmit={(e): void => {
        e.preventDefault()
      }}
    >
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant={'h6'} color={'text.primary'}>
          {note?.title || ''}
        </Typography>
      </Paper>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(): void => {
              setChecked(!checked)
            }}
          />
        }
        label={'Delete note'}
      />
      <Button
        type={'submit'}
        color={'primary'}
        variant={'contained'}
        disabled={disableSubmit}
        onClick={(): void => {
          deleteNote()
        }}
      >
        {'Delete'}
      </Button>
    </form>
  )
}

export default DeleteNoteComponent
