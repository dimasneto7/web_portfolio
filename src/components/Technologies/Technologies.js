import React from 'react';
import { DiReact, DiGit, DiJavascript1, DiDocker, DiSass, DiPostgresql, DiNodejsSmall} from 'react-icons/di';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, IconList} from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <br />
    <SectionTitle>Tecnologias</SectionTitle>
    <IconList>
      <DiJavascript1 size="6rem" />
      <DiReact size="6rem" />
      <DiNodejsSmall size="6rem" />
      <DiGit size="6rem" />
      <DiPostgresql size="6rem" />
      <DiDocker size="8rem" />
      <DiSass size="5.5rem" />
    </IconList>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Eperiência em <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Eperiência em <br />
            Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>UI-UX</ListTitle>
          <ListParagraph>
            Eperiência em <br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
