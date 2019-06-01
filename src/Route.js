/**
 * 2019-06-01
 * author: 李坤
 */
import React, { useContext } from "react";
import { RouterContext } from "./BrowserRouter";

function Route({ component, path }) {
  const { history, url } = useContext(RouterContext);
  const match = {
    path,
    url
  };
  const Component = component;
  return url === path && <Component history={history} match={match} />;
}

export default Route;
