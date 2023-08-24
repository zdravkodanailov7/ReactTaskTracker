import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Task = ({ task, onDelete, onDoubleClick }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onDoubleClick(task.id)}>
      <h3>{task.text} <FaTimes onClick={() => onDelete(task.id)} style={{ color: "red", cursor: "pointer"}} /></h3>
      <p>{task.day}</p>
      <p><Link to={`/task/${task.id}`}>View Details</Link></p>
    </div>
  )
}

export default Task