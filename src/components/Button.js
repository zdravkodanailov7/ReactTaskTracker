import React from 'react'

const Button = ({ onClick, text, showAddTask }) => {
  return (
    <button onClick={onClick} className={`btn ${showAddTask && "showingAddTask"}`}>{text}</button>
  )
}

export default Button