import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Fone</LinkTitle>
          <LinkItem href="https://api.whatsapp.com/send?phone=5511972334851">(11) 97233-4851</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="mailto:dimas_fcn@outlook.com">dimas_fcn@outlook.com</LinkItem>
        </LinkColumn>
        <SocialIconsContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/dimasneto7">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/dimas-neto-136aa91a5/">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://instagram.com">
              <AiFillInstagram size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>        
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
 