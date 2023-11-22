import React from "react";

import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import SectionList from "../components/SectionList";
import ProjectCard from "../components/ProjectCard";

import BCTA from "../components/screenshots/BCTA";


import Link from "../components/Link";

const Projects = () => (
  <Section>
    <SectionHeading>Projects</SectionHeading>
    <SectionList>
      <ProjectCard
        title="Boston College Teacher Assistant Portal"
        description="Streamlining the
            process of managing TA applications, course registrations, and user
            interactions within an academic environment."
        tech={["Django", "Python", "SQLite", "Bootstrap"]}
      >
        <BCTA />
        <ul>
          <li>
            Developed and deployed a TA Application Portal via Railway Cloud
            utilizing Django Web Framework and SQLite DB.
          </li>
          <li>
            Enabled distinct user role creation (admin, professor, student) with
            secure authentication and authorization.
          </li>
          <li>
            Integrated Django's crispy forms and bootstrap for enhanced user
            interface and form handling.
          </li>
          <li>
            Ensured real-time data handling and processing using Django's ASGI
            interface for asynchronous support.
          </li>
          <li>
            Implemented automated email notifications using Django's email
            backend.
          </li>
        </ul>
      </ProjectCard>
      <ProjectCard
        title="Personal Portfolio"
        description="My personal website!"
        tech={["React", "Gatsby", "styled-components"]}
      >
        <p>
          Built from scratch using the{" "}
          <Link href="https://reactjs.org/">React</Link> framework{" "}
          <Link href="https://www.gatsbyjs.com">Gatsby</Link>. I chose Gatsby for its fast, SEO-optimized static websites, and its extensive plugin ecosystem.
        </p>
      </ProjectCard>
    </SectionList>
  </Section>
);

export default Projects;
