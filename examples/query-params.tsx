/// <reference path="../typings/main.d.ts" />
/// <reference path="../react-router.d.ts" />

import React from 'react';
import { render } from 'react-dom';
import {
	IRouterProps,
	Router,
	ILinkProps,
	Link,
	IndexLink,
	IRouterContext,
	IRouter,
	RouterContext,
	IRouteProps,
	Route,
	PlainRoute,
	IRedirectProps,
	Redirect,
	IndexRoute,
	IIndexRouteProps,
	IndexRedirect,
	IInjectedProps,
	browserHistory,
	hashHistory,
	createMemoryHistory,
	useRouterHistory,
	IMatchArgs,
	match,
	createRoutes
} from '../react-router'

class User extends React.Component<IInjectedProps,{}> {
  render() {
    let { userID } = this.props.params
    let { query } = this.props.location
    let age = query && query["showAge"] ? '33' : ''

    return (
      <div className="User">
        <h1>User id: {userID}</h1>
        {age}
      </div>
    )
  }
}

class App extends React.Component<React.Props<{}>,{}> {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/user/bob" activeClassName="active">Bob</Link></li>
          <li><Link to={{ pathname: '/user/bob', query: { showAge: true } }} activeClassName="active">Bob With Query Params</Link></li>
          <li><Link to="/user/sally" activeClassName="active">Sally</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="user/:userID" component={User} />
    </Route>
  </Router>
), document.getElementById('example'))