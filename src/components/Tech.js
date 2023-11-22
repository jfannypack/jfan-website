import React from "react";
import styled from "styled-components";

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  margin-top: -0.3rem;
  list-style-type: none;
`;

const TechItem = styled.li`
  font-size: 0.8rem;
  margin: 0.3rem 0.5rem 0 0;
  padding: 0.1rem 0.7rem;
  background-color: #f1f8ff;
  color: dodgerblue;
  border: 0.5px solid dodgerblue;
  border-radius: 3px;
`;

const Tech = ({ tech }) => (
  <TechList>
    {React.Children.map(tech, (item) => (
      <TechItem>{item}</TechItem>
    ))}
  </TechList>
);

export default Tech;
