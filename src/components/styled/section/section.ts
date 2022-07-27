import styled from 'styled-components';

const Section = styled.section`
  box-shadow: 2px 5px 25px rgba(180, 180, 180, 0.25);
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.secondaryBg};
`;

export default Section;
