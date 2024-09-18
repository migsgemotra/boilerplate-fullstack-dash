import React, { ReactElement } from 'react'
import { NextPage } from 'next'
import PageHeader from '../../components/_common/PageHeader'
import layout from 'frontend/layouts/layout'
import NotesTable from 'frontend/components/notes/Table'

const NotesPage: NextPage = (): ReactElement => {

  return (
    <>
      <PageHeader title={'Notes'} />
      <NotesTable/>
    </>
  )
}

export default layout(NotesPage)
