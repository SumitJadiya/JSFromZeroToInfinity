import React from 'react';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route path="*" component={Error} />
      </Switch>
    </>

  );
}

export default App;
