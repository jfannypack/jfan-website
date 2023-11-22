import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MyCV from "../../images/Resume.pdf";



import Link from "../Link";


const Socials = styled.address`
  margin: 0;
  padding: 4rem 0;
  background-color: #0c192c;
  font-style: normal;
`;

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 960px;
  list-style-type: none;
`;

const Social = styled.li`
  margin: 0.1rem 0;
`;

const SocialLink = styled(Link)`
  margin: 0 1rem;
  color: white;
  text-decoration: none;
`;

const LinkText = styled.span`
  margin-left: 0.5rem;
`;

const Footer = () => (
  <Socials>
    <SocialList>
      <Social>
        <SocialLink href="https://github.com/jfannypack">
          <FontAwesomeIcon icon={faGithub} />
          <LinkText>jfannypack</LinkText>
        </SocialLink>
      </Social>
      <Social>
        <SocialLink href="https://www.linkedin.com/in/jason-fan-919137238/">
          <FontAwesomeIcon icon={faLinkedin} />
          <LinkText>Jason Fan</LinkText>
        </SocialLink>
      </Social>
      <Social>
        <SocialLink href="mailto:fanje@bc.edu">
          <FontAwesomeIcon icon={faEnvelope} />
          <LinkText>fanje@bc.edu</LinkText>
        </SocialLink>
      </Social>
      <Social>
        <SocialLink as="a" href={MyCV} download="Jason Fan Resume.pdf">
          <FontAwesomeIcon icon={faFile} />
          <LinkText>Download my CV</LinkText>
        </SocialLink>
      </Social>
    </SocialList>
  </Socials>
);

export default Footer;
