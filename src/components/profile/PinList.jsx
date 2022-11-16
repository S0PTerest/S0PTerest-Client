import React from 'react';
import styled from 'styled-components';
import { default as icDrop } from '../../asset/icon_drop.svg';

function PinList() {
  return (
    <StyledRoot>
      <StyledHeader>
        <h1>저장한 핀</h1>
        <h1>생성한 핀</h1>
        <p>알파벳 순</p>
        <img src={icDrop}></img>
      </StyledHeader>
    </StyledRoot>
  );
}

export default PinList;

const StyledRoot = styled.div`
  width: 158.4rem;
  height: 96.3rem;
  padding: 3rem;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 2.2rem 0 0 6.6rem;
  h1 {
    font-weight: 700;
    font-size: 2.4rem;
    &:nth-child(1) {
      border-bottom: 0.5rem solid black;
      margin-right: 3.3rem;
    }
    &:nth-child(2) {
      margin-right: 110rem; //피그마 기준 117.1이지만 유동적으로 수정
    }
  }
  p {
    font-weight: 700;
    font-size: 1.6rem;
    margin-right: 0.8rem;
  }
`;
