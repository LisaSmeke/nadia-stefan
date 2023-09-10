import Navbar from './components/Navbar';
import Home from './components/Home';
import Boda from './components/Boda';
import Estadia from './components/Estadia';
import Regalos from './components/Regalos';
import Rsvp from './components/Rsvp';
import Footer from './components/Footer';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css';

function App() {
  // const title = 'Welcome to our party';

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/boda">
              <Boda />
            </Route>
            <Route exact path="/estadia">
              <Estadia />
            </Route>
            <Route exact path="/regalos">
              <Regalos />
            </Route>
            <Route exact path="/rsvp">
              <Rsvp />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
