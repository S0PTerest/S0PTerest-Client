import React from 'react';
import styled from 'styled-components';
import { pinterestColors } from '../styles/color';
import { ReactComponent as IPlus } from '../assets/iPlus.svg';
import { ReactComponent as IOption } from '../assets/iOption.svg';

const noteList = [
  { title: '제목1', date: '2022년 11월 14일 (월)', todo: '할 일 2개' },
  { title: '제목2', date: '2022년 11월 14일 (월)', todo: '할 일 2개' },
  { title: '제목3', date: '2022년 11월 14일 (월)', todo: '할 일 2개' },
  { title: '제목4', date: '2022년 11월 14일 (월)', todo: '할 일 2개' },
];

function NoteList() {
  return (
    <StyledRoot>
      <StyledCreateButton>
        <h1>노트 만들기</h1>
        <IPlus />
      </StyledCreateButton>

      <StyledNoteList>
        {noteList.map((note) => (
          <Note key={note.title} note={note} />
        ))}
      </StyledNoteList>
    </StyledRoot>
  );
}

function Note({ note }) {
  const { title, date, todo } = note;
  return (
    <StyledNote>
      <StyledTitle>
        <h1>{title}</h1>
        <IOption />
      </StyledTitle>
      <StyledNoteInfo>
        <span>
          {date} &#183; {todo}
        </span>
      </StyledNoteInfo>
    </StyledNote>
  );
}

export default NoteList;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.8rem;
  overflow-y: scroll;
`;

const StyledCreateButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 2rem;
  border: 1px solid #efefef;
  border-radius: 1rem;
  margin-bottom: 3rem;
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
  display: flex;
  flex-direction: column;
  padding: 0 2.2rem 2rem 2.2rem;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1.25px solid #e9e9e9;
    margin-bottom: 1.6rem;
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
