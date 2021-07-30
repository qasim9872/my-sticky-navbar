import React, { useContext } from 'react'
import tw from 'twin.macro'

import { Header } from '../organisms/header.organism'
import { UseStickyContext } from '../../store/use-sticky.store'

const AppContainer = tw.div`flex min-h-screen min-w-full bg-blue-100 justify-center`
const AppTemplateWrapper = tw.div`flex flex-col`
const AppContent = tw.div`space-y-6`

export const AppTemplate = ({ children }) => {
  const { isSticky } = useContext(UseStickyContext)

  return (
    <AppContainer>
      <AppTemplateWrapper>
        <Header sticky={isSticky} />

        <AppContent>{children}</AppContent>
      </AppTemplateWrapper>
    </AppContainer>
  )
}
