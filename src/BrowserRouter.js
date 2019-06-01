/**
 * 2019-06-01
 * author: 李坤
 */
import React, { useState } from "react";
  
export const RouterContext = React.createContext(window.location.pathname);
let set;
function popstate(e) {
  set(window.location.pathname);
}

export default function({ children }) {
  const [url, setUrl] = useState(window.location.pathname);
  set = setUrl;

  window.addEventListener("popstate", popstate);

  const router = {
    history: {
      push: function(url, state, title) {
        window.history.pushState(state, title, url);
        setUrl(url);
      },
      replace: function(url, state, title) {
        window.history.replaceState(state, title, url);
        setUrl(url);
      },
      go: window.history.go,
      goBack: window.history.back,
      goForward: window.history.forward,
      length: window.history.length
    },
    url: url
  };

  return (
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
  );
}
