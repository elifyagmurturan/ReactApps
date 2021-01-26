import React, { useContext } from 'react'
import { StateContext } from '../contexts'
import {useDispatch, useUserState} from '../hooks'

export default function Logout () {
  const dispatch = useDispatch()
  const user = useUserState()
  
  return (
    <form onSubmit={e => { e.preventDefault(); dispatch({ type: 'LOGOUT' }) }}>
      Logged in as: <b>{user}</b>
      <input type="submit" value="Logout" />
    </form>
  )
}
