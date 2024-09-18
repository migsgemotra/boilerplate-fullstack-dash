import React, { ReactElement, FunctionComponent } from 'react'
import PageWrapper from '../PageWrapper'

// eslint-disable-next-line react/display-name
const layout = (Page: FunctionComponent) => (): ReactElement => {

  return (
    <PageWrapper>
      <Page />
    </PageWrapper>
  )
}

export default layout