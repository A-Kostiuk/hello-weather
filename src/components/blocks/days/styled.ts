import styled from 'styled-components';
import { Div } from '../../styled';
import { Swiper } from 'swiper/react';

export const SwiperStyled = styled(Swiper)`
  width: 100%;
  padding-bottom: 12px;

  .swiper-pagination {
    display: none;
  }

  .swiper-scrollbar-drag {
    background-color: ${({theme}) => theme.colors.cardBg};
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const StyledDiv = styled(Div)`
  padding: 20px;
`;
