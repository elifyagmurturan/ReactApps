import React, { useReducer, useEffect, useState } from 'react'

import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import UserBar from './user/UserBar'
import Header from './Header'
import { ThemeContext, StateContext } from './contexts'
import ChangeTheme from './ChangeTheme'
import appReducer from './reducers'
import {useResource} from 'react-request-hook'

const defaultPosts = [
  {title:'Please Mister Postman', content:'A new song from us!', author:'John Lennon'},
  {title:'Hey Jude', content:'Let us know what you think', author:'George Harrison'},
  {title:'Long Tall Sally', content:'This is one of my favorite songs', author:'Paul McCartney'}
]

export default function App () {
    const [ theme, setTheme ] = useState({
        primaryColor: 'deepskyblue',
        secondaryColor: 'coral'
    })

    const [ state, dispatch ] = useReducer(appReducer, { user: '', posts: defaultPosts, error:'' })
    const { user, error } = state
    const[posts, getPosts] = useResource(() => ({
        url: '/posts',
        method: 'get'
    }))
    useEffect(getPosts, [])
    useEffect(() => {
        if(posts && posts.error){
            dispatch({type: 'POST_ERROR'})
        }
        if(posts && posts.data){
            dispatch({type: 'FETCH_POSTS', posts: posts.data.reverse()})
        }
    }, [posts])

    return (
        <StateContext.Provider value={{ state, dispatch }}>
            <ThemeContext.Provider value={theme}>
                <div style={{ padding: 8 }}>
                    <Header text="React Hooks Blog" />
                    <ChangeTheme theme={theme} setTheme={setTheme} />
                    <br />
                    <React.Suspense fallback={"Loading..."}>
                    <UserBar />
                    </React.Suspense>
                    <br />
                    {user && <CreatePost />}
                    <br />
                    <hr />
                    {error && <b>{error}</b>}
                    <PostList />
                </div>
            </ThemeContext.Provider>
        </StateContext.Provider>
    )
}
