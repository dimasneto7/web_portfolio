import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Olá!<br />
        Seja bem vindo ao meu Portifólio
      </SectionTitle>
      <SectionText>
        Sou Desenvolvedor Front-end, com experiência em ReactJS, NextJS e NodeJS.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Saiba Mais</Button>
    </LeftSection>
  </Section>
);

export default Hero;  