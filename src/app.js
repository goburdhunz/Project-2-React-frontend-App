import React from 'react'
import ReactDOM from 'react-dom'

import Home from './components/pages/Home'
import Show from './components/results/Show'

import './style.scss'

import { HashRouter, Route, Switch} from 'react-router-dom'


class App extends React.Component {


  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path= "/searchresults/:id" component={Show}/>
          <Route path= "/" component={Home}/>
        </Switch>
      </HashRouter>
    )
  }



}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
