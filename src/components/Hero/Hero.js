import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Olá!<br />
        Eu sou Dimas Neto
      </SectionTitle>
      <SectionText>
        Desenvolvedor Front-End, com experiência em ReactJS, NextJS e NodeJS.
      </SectionText>
      <Button onClick={() => window.location = './images/dimasneto.pdf'}>Currículo</Button>
    </LeftSection>
  </Section>
);

export default Hero;  