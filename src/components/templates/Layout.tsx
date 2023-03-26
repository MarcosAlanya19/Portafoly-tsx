import { FC } from 'react'
import { JSXElement } from '../../types'
import { Sidebar } from '../organisms'

interface Props{
  children?: JSXElement
  classname: string
  onClick  : () => void
}

export const Layout: FC<Props> = ({ children, classname, onClick }) => {

  return (
    <>
      <Sidebar onClick={onClick} classname={classname} />
      {children}
    </>
  )
}
