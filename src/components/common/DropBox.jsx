import React from 'react';
import styled, { css } from 'styled-components';
import { pinterestColors } from '../../styles/color';

function DropBox(props) {
  const { text, options, onClick } = props;

  const dropBoxStatus = {
    '노트 옵션': css`
      top: 5.1rem;
      right: -11rem;
    `,

    '정렬 기준': css`
      top: 4rem;
      right: -2rem;
    `,
  };

  return (
    <StyledRoot status={dropBoxStatus[text]}>
      <StyledText>{text}</StyledText>
      {options.map((option) => (
        <StyledOption key={option} onClick={() => onClick(option)}>
          {option}
        </StyledOption>
      ))}
    </StyledRoot>
  );
}

export default DropBox;

const StyledRoot = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 18.1rem;
  background: ${pinterestColors.white};
  box-shadow: 0px 0px 3rem 0.4rem rgba(0, 0, 0, 0.06);
  border-radius: 2rem;
  padding: 2.2rem 2.4rem;
  z-index: 9;
  ${({ status }) => status};
`;

const StyledText = styled.h1`
  font-weight: 400;
  font-size: 1.4rem;
  cursor: default;
  line-height: 1.7rem;
  color: ${pinterestColors.gray400};
  margin-bottom: 1.6rem;
`;
const StyledOption = styled.span`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.9rem;
  cursor: pointer;
  color: ${pinterestColors.black};
  border-radius: 1.5rem;
  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }
  &:hover {
    background-color: ${pinterestColors.gray100};
  }
`;
