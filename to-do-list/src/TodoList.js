import React from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component{
    render(){
        const items = [
            {id:1, title:'Do not procrastinate', completed:true},
            {id:2, title:'Learn Flutter', completed:false},
            {id:3, title:'Do abstract algebra hw', completed:false}]
        
        return items.map(item =>
            <TodoItem{...item} key={item.id}/>)
    }
}