import React, { useState, useRef, useLayoutEffect } from "react";
import styled from "styled-components";

import { hoverLift } from "../styles/mixins";

export const Body = styled.div`
  padding: 0;
  border: 0.2px solid #eee;
  border-radius: 3px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.07);
  list-style-type: none;
  transition: box-shadow 0.1s linear;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &:last-child {
    margin-bottom: 1.45rem;
  }

  ${hoverLift(0, 3)}
`;

export const Header = styled.div`
  margin: 0;
  padding: 1rem;
`;

export const Content = styled.div`
  padding: 0 1rem 1rem;
`;

const Collapsing = styled.div`
  margin: 0;
  padding: 0;
  max-height: ${(props) => (props.expanded ? props.contentHeight : 0)}px;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
`;

export const Collapse = ({ expanded, children }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(9999);
  useLayoutEffect(() => {
    const handleResize = () =>
      setContentHeight(contentRef.current.scrollHeight);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <Collapsing
      expanded={expanded}
      contentHeight={contentHeight}
      ref={contentRef}
    >
      {children}
    </Collapsing>
  );
};

const Arrow = styled.svg.attrs({
  focusable: "false",
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
})`
  fill: rgba(0, 0, 0, 0.54);
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
  flex-shrink: 0;
  user-select: none;
`;

const ArrowButton = styled.button.attrs({ type: "button" })`
  margin-left: auto;
  padding: 12px;

  background-color: white;
  outline: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  transform: rotate(${(props) => (props.expanded ? 180 : 0)}deg);
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const Button = ({ expanded = false, onClick }) => (
  <ArrowButton expanded={expanded} onClick={onClick}>
    <div style={{ display: "flex" }}>
      <Arrow>
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
      </Arrow>
    </div>
  </ArrowButton>
);
