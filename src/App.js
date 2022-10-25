import './App.css'

import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

const App = () => (
  <>
    <div className="Container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/team-matches/:id" component={TeamMatches} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </>
)

export default App
