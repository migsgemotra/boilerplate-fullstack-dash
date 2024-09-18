import React, { ReactElement } from 'react'
import { NextPage } from 'next'
import CreateNoteComponent from '../../components/notes/Create'
import PageHeader from '../../components/_common/PageHeader'
import layout from 'frontend/layouts/layout'

const CreateNotePage: NextPage = (): ReactElement => {

  return (
    <>
      <PageHeader
        title={'Create Note'}
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
      <CreateNoteComponent />
    </>
  )
}

export default layout(CreateNotePage)
