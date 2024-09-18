import React, { ReactElement } from 'react'
import { NextPage } from 'next'
import PageHeader from '../../components/_common/PageHeader'
import layout from 'frontend/layouts/layout'

const NotesPage: NextPage = (): ReactElement => {

  return (
    <>
      <PageHeader title={'Notes'} />
    </>
  )
}

export default layout(NotesPage)
