import React, { useContext } from 'react'
import { ThemeContext } from './contexts'
import {useTheme} from './hooks'

const Header = ({ text }) => {
  const {primaryColor} = useTheme()
  return <h1 style={{ color: primaryColor }}>{text}</h1>
}

export default Header
