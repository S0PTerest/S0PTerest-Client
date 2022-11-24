import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { default as icDrop } from '../../assets/icon_drop.svg';
import DropBox from '../../components/common/DropBox';
import { pinterestColors } from '../../styles/color';
import BoardItem from '../common/BoardItem';
import { boardData, board1_pinData, board2_pinData } from './testData.js';
import { getBoards } from '../../services';

const dropBoxData = { text: '정렬 기준', options: ['알파벳순', '사용자 지정', '마지막 저장일'] };
const test = [1, 1, 1, 1, 1];

function PinList() {
  const [boards, setBoards] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const getBoardData = async () => {
    const { data } = await getBoards();
    setBoards(data['board']);
  };
  useEffect(() => {
    getBoardData();
  }, []);

  const openSortingModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <StyledRoot>
      <StyledNavigation>
        <h1>저장한 핀</h1>
        <h1>생성한 핀</h1>
        <StyledSortWrapper>
          <StyledSortingWrapper onClick={openSortingModal}>
            <p>알파벳 순</p>
            <img src={icDrop}></img>
          </StyledSortingWrapper>
          {openModal && <DropBox text={dropBoxData.text} options={dropBoxData.options} />}
        </StyledSortWrapper>
      </StyledNavigation>
      <StyledPinWrapper>
        <StyledBoardWrapper>
          <StyledFirstBoard>
            {test.map((idx, index) => (
              <StyledFirstPins key={index} idx={index} />
            ))}
          </StyledFirstBoard>
          <StyledBoardTitle>
            모든 핀
            <p>
              핀 n개 <span>n주</span>
            </p>
          </StyledBoardTitle>
        </StyledBoardWrapper>
        {boardData['board'].map((board, index) => (
          <StyledBoardWrapper key={index}>
            <div>
              <BoardItem status="profile" />
            </div>
            <StyledBoardTitle>
              {board.title}
              <p>
                핀 n개 <span>n주</span>
              </p>
            </StyledBoardTitle>
          </StyledBoardWrapper>
        ))}
      </StyledPinWrapper>
    </StyledRoot>
  );
}

export default PinList;

const StyledRoot = styled.div`
  width: 158.4rem;
  height: 96.3rem;
`;

const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  margin: 2.2rem 0rem 2.6rem 1rem;
  & > h1 {
    font-weight: 700;
    font-size: 2.4rem;
    margin-right: 0rem;

    &:nth-child(1) {
      border-bottom: 0.5rem solid;
      margin-right: 5rem;
    }
    &:nth-child(2) {
      margin-right: 110rem; //피그마 기준 117.1이지만 유동적으로 수정
      padding-bottom: 0.5rem;
    }
  }
`;

const StyledSortWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 6rem;
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
  width: 11.3rem;
  height: 15.4rem;
  position: absolute;
  display: inline-block;
  top: 0;
  border-radius: 1.4rem;
  ${({ idx }) =>
    idx === 0 &&
    css`
      left: 0rem;
      background-color: #d9d9d9;
      z-index: 5;
    `}
  ${({ idx }) =>
    idx === 1 &&
    css`
      left: 3rem;
      background-color: #c0c0c0;
      z-index: 4;
    `}
  ${({ idx }) =>
    idx === 2 &&
    css`
      background-color: #adadad;
      left: 6rem;
      z-index: 3;
    `}
    ${({ idx }) =>
    idx === 3 &&
    css`
      background-color: #898989;
      left: 9rem;
      z-index: 2;
    `}
    ${({ idx }) =>
    idx === 4 &&
    css`
      background-color: #616161;
      left: 12rem;
      z-index: 1;
    `}
`;

const StyledPinWrapper = styled.div`
  width: 155.4rem;
  height: 84.2rem;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const StyledBoardTitle = styled.div`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
  color: ${pinterestColors.black};
  margin-top: 1rem;

  p {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.4rem;
    margin: 0.5rem 0rem 6.4rem 0rem;

    span {
      margin-left: 1rem;
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 1.4rem;
      color: ${pinterestColors.gray400};
    }
  }
`;

const StyledBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 23rem;
  margin-right: 2rem;
  position: relative;
`;
