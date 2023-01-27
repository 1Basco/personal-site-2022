import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { commons } from "../../constants/constants";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  return (
    <FooterWrapper id="contact">
      <LinkList>
        <LinkColumn>
          {number && (
            <>
              <LinkTitle>Call</LinkTitle>
              <LinkItem href={`https://api.whatsapp.com/send?phone=${number}`}>
                {`+${number}`}
              </LinkItem>
            </>
          )}
        </LinkColumn>
        <LinkColumn>
          {email && (
            <>
              <LinkTitle>E-mail</LinkTitle>
              <LinkItem
                href={`mailto:${email}`}
              >{`Contact: ${email}`}</LinkItem>
            </>
          )}
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Don't mind me. I'm just trying</Slogan>
        </CompanyContainer>
      </SocialIconsContainer>
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
    </FooterWrapper>
  );
};

export default Footer;
