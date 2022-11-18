import React from 'react';
import styled, { css } from 'styled-components';

function BoardItem() {
  return (
    <StyledBoardItemWrapper>
      {Array.from({ length: 3 }, (_v, i) => i).map((idx) => (
        <StyledBoardItem key={idx} idx={idx}>
          <div></div>
        </StyledBoardItem>
      ))}
    </StyledBoardItemWrapper>
  );
}

export default BoardItem;

const StyledBoardItemWrapper = styled.article`
  display: grid;
  grid-template-columns: 16.8rem;
  grid-template-rows: 9.5rem 9.3rem;
  border-radius: 1rem;
  overflow: hidden;
  margin-top: 2.2rem;
`;

const StyledBoardItem = styled.div`
  height: 18.8rem;
  background-color: #d9d9d9;

  ${({ idx }) =>
    idx === 1 &&
    css`
      grid-column: 2/3;
      background-color: #a9a9a9;
    `}
  ${({ idx }) =>
    idx === 2 &&
    css`
      grid-column: 2/3;
      background-color: #c0c0c0;
    `}
`;
