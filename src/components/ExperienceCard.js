import React from "react";
import styled from "styled-components";

import * as Card from "./Card";
import Tech from "./Tech";
import Link from "./Link";

const Logo = styled.div`
  margin-right: 1rem;
  min-width: 80px;
`;

const Company = styled.h3`
  margin: 0;
`;

const Position = styled.h4`
  margin: 0;
  font-weight: normal;
`;

const ExperienceHeader = styled(Card.Header)`
  display: flex;
  align-items: center;
`;

const ExperienceLink = styled(Link)`
  text-decoration: none;
`;

const ExperienceCard = ({ logo, company, position, link, tech, children }) => (
  <Card.Body as="li">
    <ExperienceLink href={link}>
      <ExperienceHeader>
        <Logo>{logo}</Logo>
        <div>
          <Company>{company}</Company>
          <Position>{position}</Position>
        </div>
      </ExperienceHeader>
    </ExperienceLink>
    <Card.Content>
      {children}
      <Tech tech={tech} />
    </Card.Content>
  </Card.Body>
);

export default ExperienceCard;
