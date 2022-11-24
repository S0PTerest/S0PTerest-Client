import React from 'react';
import styled, { css } from 'styled-components';
import { pinterestColors } from '../../styles/color';

function BoardItem(props) {
  const { pins, status } = props;

  return (
    <StyledBoardItemWrapper status={status}>
      {(pins.length < 3
        ? [...pins, ...Array(3 - pins.length).fill({ imageUrl: null })]
        : pins.slice(0, 3)
      ).map(({ imageUrl }, idx) => (
        <StyledBoardItem key={idx} idx={idx} status={status}>
          {imageUrl ? <img src={imageUrl} /> : <div></div>}
        </StyledBoardItem>
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
      max-height: 15.4rem;
    `}
  border-radius: 1rem;
  overflow: hidden;
`;

const StyledBoardItem = styled.div`
  overflow: hidden;

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
    & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
