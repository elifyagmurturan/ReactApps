import React, {useContext} from 'react'
import useWindowSize from '@rehooks/window-size'
import CreatePost from './../post/CreatePost'
import UserBar from './../user/UserBar'
import Header from './../Header'
import ChangeTheme from './../ChangeTheme'
import { ThemeContext, StateContext } from './../contexts'

export default function HeaderBar({setTheme}){
    const {innerWidth} = useWindowSize()
    const mobilePhone = innerWidth < 640
    const theme = useContext(ThemeContext)
    const {state} = useContext(StateContext)
    const {user} = state

    return(
        <div>
            <Header text="React Hooks Blog" />
            {!mobilePhone && <ChangeTheme theme={theme} setTheme={setTheme} />}
            {!mobilePhone && <br />}
            {!mobilePhone && <React.Suspense fallback={"Loading..."}>
                <UserBar />
                </React.Suspense>}
            {!mobilePhone && <br />}
            {user && <CreatePost />}
        </div>
    )
}