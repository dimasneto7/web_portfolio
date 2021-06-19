import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, TitleContent, UtilityList, Img} from './ProjectsStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitle main>Projetos</SectionTitle>
    <GridContainer>
     {projects.map(({ id, image, title, description, source, visit }) => (
       <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <UtilityList>
            <ExternalLinks href={visit}>GITHUB</ExternalLinks>
            <ExternalLinks href={source}>SITE</ExternalLinks>
          </UtilityList>
       </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;