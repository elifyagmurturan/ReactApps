import React, {useState} from 'react'

export default function Register({dispatch}){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')

    function handleUsername( evt){
        setUsername(evt.target.value)
    }
    function handlePassword (evt){
        setPassword(evt.target.value)
    }
    function handlePasswordRepeat(evt){
        setPasswordRepeat(evt.target.value)
    }
    return(
        <form onSubmit={e => {e.preventDefault(); dispatch({type:'REGISTER', username})}}>
        <label htmlFor="register-username">Username:</label>
        <input type="text" name="register-username" value={username} onChange={handleUsername} id="register-username"/>
        <label htmlFor="register-password">Password:</label>
        <input type="password" name="register-password" value={password} onChange={handlePassword} id="register-password"/>
        <label htmlFor="register-password-repeat">Repeat Password:</label>
        <input type="password" name="register-password-repeat" value={passwordRepeat} onChange={handlePasswordRepeat} id="register-password-repeat"/>
        <input type="submit" value="Register" disabled={username.length===0}/>
        </form>
    )
}