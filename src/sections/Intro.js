import React from "react";
import styled from "styled-components";

const IntroHeading = styled.h1`
  font-size: 3rem;
  color: white;
  background-color: #0c192c; 
  text-align: center;
  margin-top: 0px;

  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }

  padding: 2.5rem;
  text-shadow: 0 0 0 rgba(0, 0, 0, 0.6);
  transform: translate(0, 0);
  transition: all 0.3s ease;

  &:hover {
    padding: 4rem;
    text-shadow: 5px 3px 2px rgba(0, 0, 0, 0.2);
    transform: translate(-8px, -4px);
  }
`;

const Intro = () => {
  return <IntroHeading>Jason Fan</IntroHeading>;
};

export default Intro;
