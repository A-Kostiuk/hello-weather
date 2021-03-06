import styled from 'styled-components';
import { Div } from '../../styled';

interface IText {
  $marginBottom?: number;
}

export const StyledDiv = styled(Div)`
  padding: 20px;
  margin-bottom: 20px;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    margin-bottom: 50px;
  }

  @media (min-width: ${({theme}) => theme.viewports.laptopWidth}) {
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;

export const Image = styled.div`


  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    align-self: flex-end;
    width: 120px;
    height: 120px;
  }

  svg {
    width: 100px;
    height: 100px;
    @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
      width: 120px;
      height: 120px;
    }
  }
`;

export const Temperature = styled.p`
  font-weight: 500;
  font-size: 96px;
  line-height: 1.2;
  color: ${({theme}) => theme.colors.baseBlue};
  margin: 0;
`;

export const Today = styled.p`
  margin: 0;
  font-size: 40px;
`;

export const Text = styled.p<IText>`
  font-size: 25px;
  color: ${({theme}) => theme.colors.baseGrey};
  margin: 0 0 ${(props) => props.$marginBottom ? `${props.$marginBottom}px` : 0};
`;
