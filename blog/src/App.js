import React, {useState, useReducer} from 'react'
import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import UserBar from './user/UserBar'
import appReducer from './reducers'


const user= 'Ringo Starr'
const defaultPosts = [
  {title:'Please Mister Postman', content:'A new song from us!', author:'John Lennon'},
  {title:'Hey Jude', content:'Let us know what you think', author:'George Harrison'},
  {title:'Long Tall Sally', content:'This is one of my favorite songs', author:'Paul McCartney'}
]

export default function App() {
  const[state, dispatch] = useReducer(appReducer, {user:'', posts:defaultPosts}) 
  const {user, posts}= state
  return(
    <div style={{padding:8}}>
      <UserBar user={user} dispatch={dispatch}/>
      <br/>
      {user && <CreatePost user={user} posts={posts} dispatchPosts={dispatch}/>}
      <br/>
      <hr/>
      <PostList posts={posts}/>
    </div>
  )
}