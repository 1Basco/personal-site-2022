import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { commons, Tabs } from "../../constants/constants";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size={32} /> <Span>Salomão</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      {Tabs.map((tab) => (
        <li key={tab.href.slice(1)}>
          <Link href={tab.href}>
            <NavLink>{tab.name}</NavLink>
          </Link>
        </li>
      ))}
    </Div2>
    <Div3>
      <SocialIcons href={commons.github_url} target="_blank">
        <AiFillGithub size={18} />
      </SocialIcons>
      <SocialIcons href={commons.instagram_url} target="_blank">
        <AiFillInstagram size={18} />
      </SocialIcons>
      <SocialIcons href={commons.linkedin_url} target="_blank">
        <AiFillLinkedin size={18} />
      </SocialIcons>
      <SocialIcons href={commons.twitter_url} target="_blank">
        <AiFillTwitterSquare size={18} />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
