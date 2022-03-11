import styled from 'styled-components';

export const ContainerSC = styled.section`
  grid-area: contentInf;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;

  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.fontFamily.fontDefault};

  border: 10px ${(props) => props.theme.color.primary} dashed;
  border-radius: 15px;

  @media (max-width: 1025px) {
    margin: 7rem 0;
    padding: 1rem;
  }

  @media (max-width: 870px) {
    display: block;
    margin: 4rem;
  }
`;

export const TitleSC = styled.h2`
  text-transform: uppercase;
`;
