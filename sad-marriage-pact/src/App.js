import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Error from './components/Error/Error';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/form" component={Form}/>
            <Route component={Error}/>
          </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;