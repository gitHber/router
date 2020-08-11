/**
 * 2019-06-01
 * author: 李坤
 */
import React, { useState, useCallback } from "react";
  
export const RouterContext = React.createContext(window.location.pathname);
let set;


export default function({ children }) {
  const [url, setUrl] = useState(window.location.pathname);
  
  useEffect(() => {
    const popstate = (e) => {
      setUrl(window.location.pathname);
    }
    window.addEventListener("popstate", popstate);
    return () => window.removeEventListener("popstate", popstate);
  }, [])

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
