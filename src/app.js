import React from 'react'
import ReactDOM from 'react-dom'

import Home from './components/pages/Home'
import Result from './components/results/Result'

import './style.scss'

import { HashRouter, Route, Switch} from 'react-router-dom'


class App extends React.Component {


  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path= "/" component={Home}/>
          <Route path= "/searchresults" component={Result}/>

        </Switch>
      </HashRouter>
    )
  }



}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
