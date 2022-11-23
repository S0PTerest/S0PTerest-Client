import React from 'react';
import styled, { css } from 'styled-components';
import { pinterestColors } from '../../styles/color';

function BoardItem(props) {
  const { status } = props;

  return (
    <StyledBoardItemWrapper status={status}>
      {Array.from({ length: 3 }, (_v, i) => i).map((idx) => (
        <StyledBoardItem key={idx} idx={idx} status={status}></StyledBoardItem>
      ))}
    </StyledBoardItemWrapper>
  );
}

export default BoardItem;

const StyledBoardItemWrapper = styled.article`
  display: grid;
  ${({ status }) =>
    status == 'todo' &&
    css`
      grid-template-columns: 16.8rem;
      grid-template-rows: 9.5rem;
      margin-top: 2.2rem;
    `}
  ${({ status }) =>
    status == 'profile' &&
    css`
      grid-template-columns: 15.4rem;
      grid-template-rows: 7.7rem;
    `}
  border-radius: 1rem;
  overflow: hidden;
`;

const StyledBoardItem = styled.div`
  ${({ idx, status }) =>
    idx === 0 &&
    status == 'todo' &&
    css`
      height: 18.8rem;
      grid-row: 1/3;
      background-color: ${pinterestColors.gray300};
    `}

  ${({ idx, status }) =>
    idx === 0 &&
    status == 'profile' &&
    css`
      height: 15.4rem;
      grid-row: 1/3;
      background-color: ${pinterestColors.gray300};
    `}

  ${({ idx }) =>
    idx === 1 &&
    css`
      grid-column: 2/3;
      grid-row: 1/2;
      background-color: #a9a9a9;
    `}
  ${({ idx }) =>
    idx === 2 &&
    css`
      grid-column: 2/3;
      grid-row: 2/3;
      background-color: #c0c0c0;
    `}
`;
