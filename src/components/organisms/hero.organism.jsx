import React, { useContext } from 'react'
import tw from 'twin.macro'

import { UseStickyContext } from '../../store/use-sticky.store'

export const Hero = ({ text = 'hero' }) => {
  const { element } = useContext(UseStickyContext)

  return (
    <div
      ref={element}
      tw="flex flex-col justify-center items-center min-h-screen bg-black w-screen"
    >
      {text}
    </div>
  )
}
