import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { BackTech, FrontTech } from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import ParticleArea from "../ParticlesArea/ParticlesArea";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section>
    <SectionText>
      I have work with the following technologies on each stack:
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size={32} />
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          {FrontTech.map((tech) => (
            <>
              {tech.name}: {tech.knowledge}
              <br />
            </>
          ))}
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size={28} />
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          {BackTech.map((tech) => (
            <div>
              <span>
                {tech.name}: {tech.knowledge}
              </span>
              <br />
            </div>
          ))}
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
