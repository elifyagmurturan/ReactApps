import React, {useState, useReducer} from 'react'
import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import UserBar from './user/UserBar'

const user= 'Ringo Starr'

const defaultPosts = [
  {title:'Please Mister Postman', content:'A new song from us!', author:'John Lennon'},
  {title:'Hey Jude', content:'Let us know what you think', author:'George Harrison'},
  {title:'Long Tall Sally', content:'This is one of my favorite songs', author:'Paul McCartney'}
]
function userReducer(state, action){
  switch(action.type){
    case 'LOGIN':
    case 'REGISTER':
      return action.username;
    case 'LOGOUT':
      return '';
    default:
      throw new Error()
  }
}
function postReducer(state, action){
  switch(action.type){
    case 'CREATE_POST':
      const newPost = {title: action.title, content: action.content, author: action.author}
      return [newPost, ...state]
    default:
      throw new Error()
  }
}
export default function App() {
  const [user, dispatchUser] = useReducer(userReducer, '')
  const [posts, dispatchPosts] = useReducer(postReducer, defaultPosts) 
  return(
    <div style={{padding:8}}>
      <UserBar user={user} dispatch={dispatchUser}/>
      <br/>
      {user && <CreatePost user={user} posts={posts} dispatchPosts={dispatchPosts}/>}
      <br/>
      <hr/>
      <PostList posts={posts}/>
    </div>
  )
}