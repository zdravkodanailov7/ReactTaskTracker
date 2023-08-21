import './App.css';
import React, { useState } from 'react';
import { Header, Tasks } from './components'

function App() {
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
        <Header />
        {tasks.length !== 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onDoubleClick={toggleReminder} /> : <p>There are currently no tasks, try adding a task!</p>}
      </div>
    </>
  );
}

export default App;
