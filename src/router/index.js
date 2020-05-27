import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from '../containers/layouts/Main'
import MainAdmin from '../containers/layouts/MainAdmin'

// views
import About from '../containers/views/Main/About'
import Home from '../containers/views/Main/Home'
import Login from '../containers/views/Main/Login'

// admin Views

import Dashboard from '../containers/views/Admin/Dashboard'
import Setting from '../containers/views/Admin/Setting'
import DashboardHome from '../containers/views/Dashboard/Home'

export default () => {

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/login' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        {/*<Route path='/admin/:path?' exact>*/}
        <Route>
          <MainAdmin>
            <Switch>
              <Route path='/admin' exact component={Dashboard} />
              <Route path='/setting' component={Setting} />
              <Route path='/dashboard' component={DashboardHome} />
              <Route component={() => (<div>404 Main Admin</div>)} exact path='/admin/*' />
            </Switch>
          </MainAdmin>
        </Route>
        
        <Route>
          <Main>
            <Switch>
              <Route path='/' exact component={Login} />
              <Route path='/home' component={Home} />
              <Route path='/about' component={About} />
              <Route component={() => (<div>404 Main</div>)} exact path="/*" />
            </Switch>
          </Main>
        </Route>


      </Switch>
    </Router>
  )

}

