import './App.css';
import React, { useState, useEffect } from 'react';
import { Header, Tasks, AddTask } from './components'

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
      const res = await fetch('http://localhost:3001/tasks')
      const data = await res.json()

      return data
    }

    const fetchTask = async (id) => {
      const res = await fetch(`http://localhost:3001/tasks/${id}`)
      const data = await res.json()

      return data
    }

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks();
  }, [])

  const addTask = async (task) => {
    const res = await fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task)
    })

    const data = await res.json();

    setTasks([...tasks, data])

    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask]);
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(tasks.map(task => 
      task.id === id ? {...task, reminder: data.reminder} : task
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
