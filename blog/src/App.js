import React, {useState} from 'react'

import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import UserBar from './user/UserBar'

const user= 'Ringo Starr'

const defaultPosts = [
  {title:'Please Mister Postman', content:'A new song from us!', author:'John Lennon'},
  {title:'Hey Jude', content:'Let us know what you think', author:'George Harrison'},
  {title:'Long Tall Sally', content:'This is one of my favorite songs', author:'Paul McCartney'}
]

export default function App() {
  const [user, setUser] = useState('')
  const [posts, setPosts] = useState(defaultPosts)
  return(
    <div style={{padding:8}}>
      <UserBar user={user} setUser={setUser}/>
      <br/>
      {user && <CreatePost user={user} posts={posts} setPosts={setPosts}/>}
      <br/>
      <hr/>
      <PostList posts={posts}/>
    </div>
  )
}