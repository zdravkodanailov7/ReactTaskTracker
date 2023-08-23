import React from 'react'
import Button from './Button.js'

const Header = ({ title, showAddTask, setShowAddTask }) => {
  const onClick = (e) => {
    setShowAddTask(!showAddTask);
  }

  return (
    <div className="header">
        <h1 className="">{title}</h1>
        <Button onClick={onClick} text={showAddTask ? "Close" : "Add"} showAddTask={showAddTask} />
    </div>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header