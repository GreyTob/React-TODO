import React from 'react'
import PropTypes from 'prop-types'
import Todoitem from './TodoItem'


const St = {
  ul: {
    listStyle: 'none',
    margin: '0',
    padding: '0',
  }
}

function TodoList(props) {
  return (
    <ul style={St.ul}>
      { props.todos.map((todo, index) => {
        return <Todoitem
          todo={todo}
          key={todo.id}
          index={index}
          onChange={props.onToggle}
        />
      })}
    </ul>
  )
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default TodoList