import React from 'react'

function TodoFilterItem ({ name, filterTodos, filter = 'all' }) {
  function handleFilter () {
    filterTodos(name)
  }

  const style = {
    color: 'pink',
    cursor: 'pointer',
    fontWeight: (filter === name) ? 'bold' : 'normal'
  }

  return <span style={style} onClick={handleFilter}>{name}</span>
}

export default function TodoFilter (props) {
  return (
    <div>
      <TodoFilterItem {...props} name="all" />{' / '}
      <TodoFilterItem {...props} name="active" />{' / '}
      <TodoFilterItem {...props} name="completed" />
    </div>
  )
}
