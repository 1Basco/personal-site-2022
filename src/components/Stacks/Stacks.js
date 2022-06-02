import React from "react";

import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  Hr,
  TitleContent,
  Img,
  ParticleAreaWrapper,
} from "./StacksStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { stacks } from "../../constants/constants";
import ParticleArea from "../ParticlesArea/ParticlesArea";

const Stacks = () => (
  <Section nopadding id="tech">
    <SectionDivider />
    <SectionTitle>Stacks & Skills</SectionTitle>
    <ParticleAreaWrapper>
      <ParticleArea />
    </ParticleAreaWrapper>
    <GridContainer>
      {stacks.map(
        ({ id, image, title, description, source, proeficiency, visit }) => (
          <BlogCard key={id}>
            {/* <Img src={image} /> */}
            <TitleContent>
              <HeaderThree>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <Hr />
            <CardInfo
              style={{
                textAlign: "center",
                minHeight: "50px",
              }}
            >
              Proeficiency: {proeficiency}
            </CardInfo>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Stacks;
