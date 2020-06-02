import React from 'react';
import 'startbootstrap-clean-blog/vendor/bootstrap/css/bootstrap.min.css';
import 'startbootstrap-clean-blog/vendor/fontawesome-free/css/all.min.css';
import 'startbootstrap-clean-blog/css/clean-blog.min.css';
import 'startbootstrap-clean-blog/vendor/bootstrap/js/bootstrap.bundle.min.js';
import Navigation from '/components/Navigation';
import Home from '/components/Home';
import Post from '/components/Post';
import About from '/components/About';
import Footer from '/components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class MainComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/:slug" component={Post} />
            </Switch>
          </div>
        </BrowserRouter>
        <Footer />
      </React.Fragment>
    );
  }
}
