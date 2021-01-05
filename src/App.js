import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout'
import Home from './pages/Home'
import Transitions from './components/Transitions'
import NotFound from './pages/NotFound'

function App(){
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/transitions" component={Transitions}/>
          <Route component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}


export default App;
