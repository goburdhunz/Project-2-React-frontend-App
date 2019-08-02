import React from 'react'
import ReactDOM from 'react-dom'

import Home from './components/pages/Home'
import Show from './components/results/Show'
import Random from './components/results/Random'
import Popular from './components/results/Popular'
import Navbar from './common/Navbar'
import PopularShow from './components/results/PopularShow'

import './style.scss'

import { HashRouter, Route, Switch} from 'react-router-dom'



class App extends React.Component {


  render() {
    return (
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path= "/popular_podcasts/:id" component={PopularShow} />
          <Route path= "/popular_podcasts" component={Popular} />
          <Route path= "/just_listen" component={Random} />
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
