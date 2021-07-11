import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import { getProfile } from "../store/action";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  permission,
  permission_type,
  profile,
  loadProfile,
  ...rest
}) => {
  const token = localStorage.getItem("token");
  useEffect(() => {
    loadProfile();
  }, [loadProfile]);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token != null) {
          if (permission) {
            if (profile && profile.group) {
              if (profile.group[permission_type]) {
                return (
                  <Layout>
                    <Component {...props} />
                  </Layout>
                );
              }
              return (
                <Redirect
                  to={{
                    pathname: "/",
                    state: { from: props.location },
                  }}
                />
              );
            }
          }
          return (
            <Layout>
              <Component {...props} />
            </Layout>
          );
        }
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadProfile: () => dispatch(getProfile()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
