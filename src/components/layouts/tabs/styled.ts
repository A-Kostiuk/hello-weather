import styled, { css } from 'styled-components';
import { Li, Ul } from '../../styled';
import { ThemeEnum } from '../../../interfaces/styled';

export const TabsList = styled(Ul)`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    flex-direction: row;
  }
`;

export const ListItem = styled(Li)`
  :not(:last-child) {
    margin-bottom: 10px;
  }

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    :not(:last-child) {
      margin-bottom: 0;
      margin-right: 10px;
    }
  }
`;

interface ITab {
  $active?: boolean;
}

export const TabItem = styled.button<ITab>`
  width: 100%;
  padding: 15px 20px 15px;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border: none;
  color: ${({theme}) => theme.colors.mainText};
  background-color: ${({theme}) => theme.type === ThemeEnum.light ? theme.colors.baseWhite : theme.colors.secondaryBg};

  :hover {
    background-color: ${({theme}) => theme.colors.blue100};
  }

  :active {
    background-color: ${({theme}) => theme.colors.baseBlue};
    color: ${({theme}) => theme.colors.baseWhite};
  }

  ${(props) => props.$active ?
          css`
            color: ${({theme}) => theme.colors.baseWhite};
            background-color: ${({theme}) => theme.colors.baseBlue};

            :hover {
              background-color: ${({theme}) => theme.colors.baseBlue};
            }
          ` : null};

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    padding: 7px 20px 9px;
    width: auto;
  }
`;
