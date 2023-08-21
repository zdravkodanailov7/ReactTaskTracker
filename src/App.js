import './App.css';
import React, { useState } from 'react';
import { Header, Tasks } from './components'

function App() {
  const [tasks, setTasks] = useState([
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'Tuesday',
    reminder: true
  }
])

  return (
    <>
      <div className="container">
          <Header />
          <Tasks tasks={tasks} />
      </div>
    </>
  );
}

export default App;
