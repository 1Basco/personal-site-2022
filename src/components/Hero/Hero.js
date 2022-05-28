import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import ParticleArea from "../ParticlesArea/ParticlesArea";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Salomemes Personal Website
      </SectionTitle>
      <SectionText>
        I'm here to learn and sometimes show dumb ideias heheXD.
      </SectionText>
      <Button onClick={() => (window.location = "/blog")}>Check my Blog</Button>
    </LeftSection>
  </Section>
);

export default Hero;
