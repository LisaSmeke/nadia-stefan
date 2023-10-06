import Navbar from './components/Navbar';
import Home from './components/Home';
import Boda from './components/Boda';
import Hospedaje from './components/Hospedaje';
import Regalos from './components/Regalos';
import Rsvp from './components/Rsvp';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
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
            <Route exact path="/hospedaje">
              <Hospedaje />
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
