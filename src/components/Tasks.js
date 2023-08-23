import React from 'react';
import Task from "./Task"

const Tasks = ({ tasks, onDelete, onDoubleClick}) => {

  return (
    <>{tasks.map((task) => (
        <Task key={task.id} onDelete={onDelete} onDoubleClick={onDoubleClick} task={task}/>
    ))}</>
  )
}

export default Tasks