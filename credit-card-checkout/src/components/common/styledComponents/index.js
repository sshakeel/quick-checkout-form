// Collection of commonly used styled components

import styled, { css } from 'styled-components';

// reuseable clearfix CSS to avoid floating components from collapsing within a container
export const clearfix = css`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const Card = styled.div`
  background: #f0f0f0;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; // "borrowed" from Stripe
  margin: 30px auto 0;
  max-width: 400px;
  padding: 30px;
`;


export const Heading1 = styled.h1`
  font-size: 22px;
  margin-bottom: 30px;
`;