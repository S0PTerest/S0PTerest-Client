import React, { useState } from 'react';
import styled from 'styled-components';
import { default as icDrop } from '../../asset/icon_drop.svg';
import DropBox from '../../components/common/DropBox';

const dropBoxData = { text: '정렬 기준', options: ['알파벳순', '사용자 지정', '마지막 저장일'] };

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
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
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

const StyledPinWrapper = styled.div`
  width: 155.4rem;
  height: 84.2rem;
  background-color: green;
  display: flex;
  flex-wrap: wrap;
  & > div {
    width: 230px;
    height: 150px;
    /* align-items: flex-start; */
    background-color: red;
    margin-right: 2rem;
  }
`;
