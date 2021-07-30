import React from 'react'
import tw, { styled } from 'twin.macro'

import { Logo } from '../atoms/logo'

const Nav = styled.nav(({ sticky }) => [
  tw`transition-all bg-transparent text-white`,
  tw`flex items-center justify-between px-4 py-2 left-0 top-0 w-full absolute z-10`,
  sticky && tw`bg-white text-black fixed shadow-lg animate-move-down-anim`,
])
const NavLogoHolder = tw.div`flex items-center justify-center`

const NavLinksContainer = tw.ul`flex list-none`
const NavLink = tw.li`cursor-pointer ml-2 mt-4 p-2 hover:text-blue-400`

export const Header = ({ sticky = false }) => (
  <Nav sticky={sticky}>
    <NavLogoHolder>
      <Logo spin={sticky} />
      <h1> Stick'Me</h1>
    </NavLogoHolder>
    <NavLinksContainer>
      <NavLink>Home</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Blog</NavLink>
    </NavLinksContainer>
  </Nav>
)
