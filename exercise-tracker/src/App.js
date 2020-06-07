import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';

import NavComponent from './components/nav';
import ExercisesList from './components/exercises-list.js';
import EditExercise from './components/edit-exercise.js';
import CreateExercise from './components/create-exercise.js';
import CreateUser from './components/create-user.js';

class App extends React.Component {
  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <NavComponent/>
          <Route path="/" exact component={ExercisesList}/>
          <Route path="/edit/:id"  component={EditExercise}/>
          <Route path="/create"  component={CreateExercise}/>
          <Route path="/user"  component={CreateUser}/>
          
        </Container>
      </Router>
    );
  };
}

export default App;
