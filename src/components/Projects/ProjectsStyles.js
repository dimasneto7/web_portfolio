import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
`;

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
padding-bottom: 16rem;

place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 16rem;
}
`;

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 15px rgba(40, 78, 78, 0.7);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #dce3e7;
  padding: 2rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0 1rem;  
  display: flex;
  justify-content: space-around;
  margin: 2.5rem;
`;

export const ExternalLinks = styled.a`
color:#111113;
font-size: 1.4rem;
padding:1rem 1.1rem;
background: #dedede;
border-radius: 15px;
letter-spacing: 4px;
transition: 0.5s;
&:hover{
  background: #adadae;

}
@media ${(props) => props.theme.breakpoints.sm} {
  font-size: 1rem;

}
`;
