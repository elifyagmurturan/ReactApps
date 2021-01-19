import React from 'react'

export default function CreatePost({user, posts, setPosts}){
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    function handleTitle(evt){
        setTitle(evt.target.value)
    }
    function handleContent(evt){
        setContent(evt.target.value)
    }
    return(
        <form onSubmit={e => e.preventDefault()}>
            <div>Author: <b>{user}</b></div>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" name="create-title" id="create-title"/>
            </div>
            <textarea />
            <input type="submit" value="Create"/>
        </form>
    )
}