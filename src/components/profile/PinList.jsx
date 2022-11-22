import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { default as icDrop } from '../../asset/icon_drop.svg';
import DropBox from '../../components/common/DropBox';
import { pinterestColors } from '../../styles/color';
import BoardItem from '../common/BoardItem';

const dropBoxData = { text: '정렬 기준', options: ['알파벳순', '사용자 지정', '마지막 저장일'] };

const pinData = [1, 1, 1, 1, 1];

function PinList() {
  const [openModal, setOpenModal] = useState(false);

  const openSortingModal = () => {
    let newModalState = !openModal;
    setOpenModal(newModalState);
  };

  return (
    <StyledRoot>
      <StyledHeader>
        <h1>저장한 핀</h1>
        <h1>생성한 핀</h1>
        <div>
          <StyledSortingWrapper onClick={openSortingModal}>
            <p>알파벳 순</p>
            <img src={icDrop}></img>
          </StyledSortingWrapper>
          {openModal && <DropBox text={dropBoxData.text} options={dropBoxData.options} />}
        </div>
      </StyledHeader>
      <StyledPinWrapper>
        <StyledFirstBoard>
          {pinData.map((idx, index) => (
            <StyledFirstPins key={idx} idx={index} />

            // <div key={idx}>냐냐</div>
          ))}
        </StyledFirstBoard>
        <div>
          <BoardItem text="profile" />
        </div>
        <div>
          <BoardItem text="profile" />
        </div>
        <div>
          <BoardItem text="profile" />
        </div>
        <div>
          <BoardItem text="profile" />
        </div>
        <div>
          <BoardItem text="profile" />
        </div>
        <div>
          <BoardItem text="profile" />
        </div>
        <div>
          <BoardItem text="profile" />
        </div>
      </StyledPinWrapper>
    </StyledRoot>
  );
}

export default PinList;

const StyledRoot = styled.div`
  width: 158.4rem;
  height: 96.3rem;
  /* padding: 3rem; */
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 2.2rem 0 2.6rem 1rem;
  & > h1 {
    font-weight: 700;
    font-size: 2.4rem;

    &:nth-child(1) {
      border-bottom: 0.5rem solid black;
      margin-right: 3.3rem;
    }
    &:nth-child(2) {
      margin-right: 110rem; //피그마 기준 117.1이지만 유동적으로 수정
      padding-bottom: 0.5rem; // border가 없어서 center가 안 맞는 문제 해결
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: green; */
  }
`;

const StyledSortingWrapper = styled.div`
  display: flex;
  cursor: pointer;
  p {
    font-weight: 700;
    font-size: 1.6rem;
    margin-right: 0.8rem;
  }
`;

const StyledFirstBoard = styled.div`
  width: 23rem;
  height: 15.4rem;
`;

const StyledFirstPins = styled.div`
  position: relative;
  display: inline-block;
  width: 11.3rem;
  flex: none;
  height: 15.4rem;
  /* left: -2rem; */
  background-color: #d9d9d9;
  z-index: 5;
  ${({ idx }) =>
    idx === 1 &&
    css`
      position: relative;
      display: inline-block;
      top: -15.4rem;
      background-color: #c0c0c0;
      left: 3rem;
      z-index: 4;
    `}
  ${({ idx }) =>
    idx === 2 &&
    css`
      position: relative;
      display: block;
      top: -30.8rem;
      background-color: #adadad;
      left: 6rem;
      z-index: 3;
    `}
    ${({ idx }) =>
    idx === 3 &&
    css`
      position: relative;
      top: -46.2rem;
      background-color: #898989;
      left: 9rem;
      z-index: 2;
    `}
    ${({ idx }) =>
    idx === 4 &&
    css`
      position: relative;
      top: -61.6rem;
      background-color: #616161;
      left: 12rem;
      z-index: 1;
    `}
  /* background: #d9d9d9; */
  border-radius: 14px;
`;

const StyledPinWrapper = styled.div`
  width: 155.4rem;
  height: 84.2rem;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  & > div {
    display: flex;
    flex-direction: column;
    width: 23rem;
    height: 15.4rem;
    margin-right: 2rem;
    margin-top: 6.4rem;
  }
`;
