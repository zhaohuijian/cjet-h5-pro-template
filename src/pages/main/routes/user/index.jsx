import React, { Suspense, Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styles from "./index.module.less";
import routes from "./routes";
import LoadingPage from "@src/components/loading-page";
import { Provider } from "mobx-react";
import { observer, inject } from "mobx-react";
import store from "./store";

const LoginTitle = inject("loginStore")(
  observer((props) => {
    const { loginStore } = props;
    return <span className={styles.title}>{loginStore.loginTitle}</span>;
  })
);

class LoginLayout extends React.PureComponent {
  render() {
    return (
      <Provider {...store}>
        <Fragment>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.top}>
                <div className={styles.header}>
                  <LoginTitle></LoginTitle>
                </div>
                <div className={styles.desc}>企业级H5应用开发框架-专业版</div>
              </div>

              <Suspense fallback={<LoadingPage />}>
                <Switch>
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
                  <Redirect from="/user" to="/user/phone" />
                </Switch>
              </Suspense>
            </div>
          </div>
        </Fragment>
      </Provider>
    );
  }
}

export default LoginLayout;
