import React, { Suspense, Component } from "react";
import { HashRouter, Route, Switch, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./style.css";

import routes from "./routes"; //路由配置文件
import LoadingPage from "@src/components/loading-page"; //路由切换loading

import store from "./store";

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
