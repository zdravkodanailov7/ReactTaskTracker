import './App.css';
import React, { useState } from 'react';
import { Header, Tasks, AddTask } from './components'

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Eat a Banana',
      day: 'Tuesday',
      reminder: true
    },
    {
      id: 2,
      text: 'Mop The Ceilings',
      day: 'Friday',
      reminder: true
    },
    {
      id: 3,
      text: 'Walk The Plant',
      day: 'Some time this year',
      reminder: false
    },
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, reminder: !task.reminder} : task
    ));
  }

  return (
    <>
      <div className="container">
        <Header showAddTask={showAddTask} setShowAddTask={setShowAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length !== 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onDoubleClick={toggleReminder} /> : <p>There are currently no tasks, try adding a task!</p>}
      </div>
    </>
  );
}

export default App;
