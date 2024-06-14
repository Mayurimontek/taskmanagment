import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import TaskList from './components/Task/TaskList';
import TaskForm from './components/Task/TaskForm';
import { auth } from './firebase';

function App() {
  return (
    <div className="App">
      <TaskList/>
    </div>
  );
}

export default App;
