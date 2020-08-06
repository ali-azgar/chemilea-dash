import { STATE_LOGIN, STATE_SIGNUP } from "../src/components/AuthForm";
import { EmptyLayout, LayoutRoute, MainLayout } from "../src/components/Layout";
import PageSpinner from "../src/components/PageSpinner";
import AuthPage from "../src/pages/AuthPage";
import React from "react";
import componentQueries from "react-component-queries";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "../src/styles/chemileaStyles.scss";

const AuthModal = React.lazy(() => import("../src/pages/AuthModal"));
const AuthForm = React.lazy(() => import("../src/components/AuthForm"));
const ReferralPage = React.lazy(() => import("../src/pages/ReferralPage"));
const UserPage = React.lazy(() => import("../src/pages/UserPage"));
const RequestPage = React.lazy(() => import("../src/pages/RequestPage"));
const DashboardPage = React.lazy(() => import("../src/pages/DashboardPage"));
const NotifyPage = React.lazy(() => import("../src/pages/NotifyPage"));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split("/").pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>

        <Switch>
          <LayoutRoute
            exact
            path="/login"
            layout={EmptyLayout}
            component={(props) => (
              <AuthPage {...props} authState={STATE_LOGIN} />
            )}
          />
          <LayoutRoute
            exact
            path="/signup"
            layout={EmptyLayout}
            component={(props) => (
              <AuthPage {...props} authState={STATE_SIGNUP} />
            )}
          />

          <MainLayout breakpoint={this.props.breakpoint}>
            <React.Suspense fallback={<PageSpinner />}>
              <Route exact path="/" component={DashboardPage} />
              <Route exact path="/dashboard" component={DashboardPage} />
              <Route exact path="/refer" component={ReferralPage} />
              <Route exact path="/users" component={UserPage} />
              <Route exact path="/notify" component={NotifyPage} />
              <Route exact path="/request" component={RequestPage} />
            </React.Suspense>
          </MainLayout>
          <Redirect to="/" />
        </Switch>

      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: "xs" };
  }

  if (576 < width && width < 767) {
    return { breakpoint: "sm" };
  }

  if (768 < width && width < 991) {
    return { breakpoint: "md" };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: "lg" };
  }

  if (width > 1200) {
    return { breakpoint: "xl" };
  }

  return { breakpoint: "xs" };
};

export default componentQueries(query)(App);
