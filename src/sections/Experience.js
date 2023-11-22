import React from "react";

import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import SectionList from "../components/SectionList";
import ExperienceCard from "../components/ExperienceCard";
import JCILogo from "../components/logos/JCILogo"
// Other logo imports are commented out


const Experience = () => (
  <Section>
    <SectionHeading>Experience</SectionHeading>
    <SectionList>
      <ExperienceCard
        logo={<JCILogo />}
        company="Johnson Controls"
        position="2023 // Software Engineer Intern"
        link="https://www.johnsoncontrols.com/" // Updated to Johnson Controls link
        tech={[
          "C#",
          ".NET",
          "SQLite",
          "DB Browser",
          "GIT",
          "Jira",
          "Code Collaborator",
        ]}
      >
        <ul>
          <li>
            Implemented thousands of status configurations into a SQLite
            database for fire devices in the Next Generation Fire Workstation
            .NET app. Designed unit tests and utilized DB Browser to validate
            changes.
          </li>
          <li>
            Developed and repaired numerous features and defects in both the
            frontend and backend by leveraging .NET framework and debugging
            capabilities in Visual Studio.
          </li>
          <li>
            Designed an algorithm to validate thousands of strings between the
            runtime and the API server database by accessing multiple json
            files, libraries, and tables. Flagged strings were added to the
            database accordingly.
          </li>
          <li>
            Collaborated in a scrum team, utilized GIT, Code Collaborator, and
            Jira.
          </li>
        </ul>
      </ExperienceCard>
      <ExperienceCard
        logo={<JCILogo />}
        company="Johnson Controls"
        position="2022 // Software Engineer Intern"
        link="https://www.johnsoncontrols.com/" // Updated to Johnson Controls link
        tech={["C", "Makefile","Linux","PTC Integrity"]}
      >
        <ul>
          <li>
            Developed and maintained embedded fire panel software in C. Utilized
            both Windows and Linux VM in order to develop different fire panels.
          </li>
          <li>
            Fixed hundreds of warnings and errors flagged by the compiler that
            caused defects for customers. Utilized Windows, Linux commands, PTC
            Integrity, communication, and procedural programming knowledge, to
            efficiently understand hundreds of lines of code.
          </li>
        </ul>
      </ExperienceCard>
    </SectionList>
  </Section>
);

export default Experience;
