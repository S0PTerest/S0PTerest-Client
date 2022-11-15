import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { pinterestColors } from '../styles/color';
import { ReactComponent as IPlus } from '../assets/iPlus.svg';
import { ReactComponent as IOption } from '../assets/iOption.svg';
import { Link } from 'react-router-dom';
import DropBox from '../components/common/DropBox';

const noteList = [
  { title: '제목1', date: '2022년 11월 14일 (월)', todo: '할 일 2개' },
  { title: '제목2', date: '2022년 11월 14일 (월)', todo: '할 일 2개' },
  { title: '제목3', date: '2022년 11월 14일 (월)', todo: '할 일 2개' },
  { title: '제목4', date: '2022년 11월 14일 (월)', todo: '할 일 2개' },
];

const dropBoxData = { text: '노트 옵션', options: ['삭제', '수정'] };

function NoteList() {
  const [noteStatus, setNoteStatus] = useState(new Array(noteList.length).fill(false));
  const [openDropBox, setOpenDropBox] = useState(new Array(noteList.length).fill(false));

  const toggleNoteStatus = (e, idx) => {
    if (e.target.closest('div').id === 'option') return;
    changeStatus(idx, noteStatus, setNoteStatus);
  };

  const openOptionModal = (idx) => {
    changeStatus(idx, openDropBox, setOpenDropBox);
  };

  const changeStatus = (idx, array, handler) => {
    let newStatus = new Array(noteList.length).fill(false);
    if (array.some((val) => val) && array.indexOf(true) === idx) {
      handler(newStatus);
      return;
    }
    newStatus[idx] = !newStatus[idx];
    handler(newStatus);
  };

  return (
    <StyledRoot>
      <StyledCreateButton to="/todo">
        <h1>노트 만들기</h1>
        <IPlus />
      </StyledCreateButton>

      <StyledNoteList>
        {noteList.map(({ title, date, todo }, idx) => (
          <StyledNote
            key={title}
            onClick={(e) => toggleNoteStatus(e, idx)}
            status={noteStatus[idx]}
          >
            {openDropBox[idx] && <DropBox text={dropBoxData.text} options={dropBoxData.options} />}
            <StyledTitle>
              <h1>{title}</h1>
              <div id="option">
                <IOption onClick={() => openOptionModal(idx)} />
              </div>
            </StyledTitle>

            <StyledNoteInfo>
              <span>
                {date} &#183; {todo}
              </span>
            </StyledNoteInfo>
          </StyledNote>
        ))}
      </StyledNoteList>
    </StyledRoot>
  );
}

export default NoteList;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.8rem;
  margin-left: 0.5rem;
`;

const StyledCreateButton = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 2rem;
  border: 1px solid #efefef;
  border-radius: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;

  & > h1 {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${pinterestColors.black};
  }
`;

const StyledNoteList = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledNote = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem 2.2rem;
  cursor: pointer;
  ${({ status }) =>
    status &&
    css`
      background-color: ${pinterestColors.gray100};
      border-bottom: none;
      border-radius: 1.8rem;
    `}

  &:not(:last-child) {
    border-bottom: ${({ status }) =>
      !status ? '1.25px solid #e9e9e9' : '1.25px solid rgba(0,0,0,0)'};
  }
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  & > h1 {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${pinterestColors.black};
  }
`;

const StyledNoteInfo = styled.div`
  display: flex;
  & > span {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: ${pinterestColors.gray400};
  }
`;
