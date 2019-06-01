/**
 * 2019-06-01
 * author: 李坤
 */
import React, { useContext } from "react";
import { RouterContext } from "./BrowserRouter";
import styled from "styled-components";

const A = styled.a`
  text-decoration: none;
  padding: 5px;
`;

function Link({ children, to }) {
  const { history } = useContext(RouterContext);
  const onClick = e => {
    e.preventDefault();
    history.push(to);
  };
  return (
    <A href={to} onClick={onClick}>
      {children}
    </A>
  );
}

export default Link;
