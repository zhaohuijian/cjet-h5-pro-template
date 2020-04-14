import React, { Suspense, Component } from "react";
import { HashRouter, Route, Switch, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { CSSTransition, TransitionGroup } from "react-transition-group"; //动画路由

import routes from "./routes"; //路由配置文件
import LoadingPage from "../../components/loading-page"; //路由切换loading

import store from "./store";

import "./style.css";

/**
 * 动画路由
 */
const TransitionRoutes = withRouter(({ location, history }) => (
  <Suspense fallback={<LoadingPage />}>
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
        <Switch location={location}>
          {routes.map((route, idx) => {
            return route.component ? (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={(props) => <route.component {...props} />}
              />
            ) : null;
          })}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </Suspense>
));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Provider {...store}>
          <TransitionRoutes />
        </Provider>
      </HashRouter>
    );
  }
}

export default App;
