import React, {setUser} from 'react'

export default function Login({setUser}){
    const [username, setUsername] = useState('')

    function handleUsername(evt){
        setUsername(evt.target.value)
    }
    return (
        <form onSubmit={e => {e.preventDefault(); setUsername(username) }}>
        <label htmlFor="login-username">Username:</label>
        <input type="text" name="login-username" id="login-username"/>
        <input type="password" name="login-password" id='login-password'/>
        <input type="submit" value="login" disabled={username.length===0}/>
        </form>
    )
}