import React, { useState, useContext, useEffect } from 'react'
import { StateContext } from '../contexts'
import {useResource, userResource} from 'react-request-hook'
import {useNavigation} from 'react-navi'
import {useInput} from 'react-hookedup'
import useUndo from 'use-undo'
import {useUserState, useDispatch, useAPICreatePost} from '../hooks'

export default function CreatePost () {
  const user = useUserState()
  const dispatch = useDispatch()
  
  const {value: title, bindToInput: bindTitle} = useInput('')
  const [undoContent, {
    set: setContent,
    undo,
    redo,
    canUndo,
    canRedo
  }] = useUndo('')
  const content = undoContent.present
  
  const [post, createPost] = useAPICreatePost()

  const navigation = useNavigation()

  useEffect(()=> {
    if(post && post.data){
      dispatch({type: 'CREATE_POST', ...post.data})
      navigation.navigate(`/view/${post.data.id}`)
    }
  }, [post])


  function handleCreate () {
    createPost({title, content, author:user})
  }
  function handleContent (e) {
    setContent(e.target.value)
  }

  return (
    <form onSubmit={e => { e.preventDefault(); handleCreate() }}>
      <div>Author: <b>{user}</b></div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input type="text" value={title} {...bindTitle} name="create-title" id="create-title" />
      </div>
      <textarea value={content} onChange={handleContent}/>
      <button type="button" onClick={undo} disabled={!canUndo}>Undo</button>
      <button type="button" onClick={redo} disabled={!canRedo}>Redo</button>
      <input type="submit" value="Create" />
    </form>
  )
}
