import React, { useReducer, useEffect, useState } from 'react'
import {Router, View} from 'react-navi'
import {mount, route} from 'navi'
import appReducer from './reducers'
import { ThemeContext, StateContext } from './contexts'
import HeaderBar from './pages/HeaderBar'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'

const defaultPosts = [
  {title:'Please Mister Postman', content:'A new song from us!', author:'John Lennon'},
  {title:'Hey Jude', content:'Let us know what you think', author:'George Harrison'},
  {title:'Long Tall Sally', content:'This is one of my favorite songs', author:'Paul McCartney'}
]

const routes = mount({
    '/': route({ view: <HomePage /> }),
    '/view/:id': route(req => {
        return { view: <PostPage id={req.params.id} /> }
    }),
})

export default function App () {
    const [ theme, setTheme ] = useState({
        primaryColor: 'deepskyblue',
        secondaryColor: 'coral'
    })
    const [ state, dispatch ] = useReducer(appReducer, { user: '', posts: defaultPosts, error:'' })
    const { user, error } = state

    return (
        <StateContext.Provider value={{ state, dispatch }}>
            <ThemeContext.Provider value={theme}>
                <Router routes={routes}>
                    <div style={{ padding: 8 }}>
                        <HeaderBar setTheme={setTheme} />
                        <hr />
                        <View />
                    </div>
                </Router>
            </ThemeContext.Provider>
        </StateContext.Provider>
    )
}
