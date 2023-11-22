import React, { useState } from "react";
import styled from "styled-components";

import * as Card from "./Card";
import Tech from "./Tech";
import Link from "./Link";

const Title = styled.h3`
  display: inline-block;
  margin: 0;
  font-size: 1rem;
`;

const Description = styled.h4`
  display: inline;
  margin: 0;
  font-weight: normal;
`;

const ProjectHeader = styled(Card.Header)`
  display: flex;
  align-items: center;
  padding: 0 1rem 0 0;
`;

const ProjectCard = ({ title, description, link, tech, children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Card.Body as="li">
      <ProjectHeader>
        <Card.Header>
          <Title>{link ? <Link href={link}>{title}</Link> : title}</Title>{" "}
          &mdash; <Description>{description}</Description>
        </Card.Header>
        <Card.Button
          expanded={expanded}
          onClick={() => setExpanded((expanded) => !expanded)}
        />
      </ProjectHeader>
      <Card.Collapse expanded={expanded}>
        <Card.Content>
          {children}
          <Tech tech={tech} />
        </Card.Content>
      </Card.Collapse>
    </Card.Body>
  );
};

export default ProjectCard;
