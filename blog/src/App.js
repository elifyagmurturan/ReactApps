import React from 'react'

import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import UserBar from './user/UserBar'

const user= 'Ringo Starr'

const posts = [
  {title:'Please Mister Postman', content:'A new song from us!', author:'John Lennon'},
  {title:'Hey Jude', content:'Let us know what you think', author:'George Harrison'},
  {title:'Long Tall Sally', content:'This is one of my favorite songs', author:'Paul McCartney'}
]

export default function App() {
  return(
    <div style={{padding:8}}>
      <UserBar/>
      <br/>
      <CreatePost user={user}/>
      <br/>
      <hr/>
      <PostList posts={posts}/>
    </div>
  )
}