import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NoteList from '../components/todo/NoteList';
import Palette from '../components/todo/Palette';
import { pinterestColors } from '../styles/color';
import PinTitle from '../components/board/PinTitle';

const getToday = () => {
  const week = ['월', '화', '수', '목', '금', '토', '일'];
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = today.getDay();
  return `${year}년 ${month}월 ${date}일 (${week[day - 1]})`;
};

const notes = [
  {
    title: '제목1',
    date: '2022년 11월 14일 (월)',
    todo: '할 일 2개',
    pins: [{ uid: '', title: '핀 제목', creatorId: '', imageUrl: '' }],
    contents: '콘텐츠1',
  },
  {
    title: '제목2',
    date: '2022년 11월 14일 (월)',
    todo: '할 일 2개',
    pins: [{ uid: '', title: '핀 제목', creatorId: '', imageUrl: '' }],
    contents: '콘텐츠1',
  },
  {
    title: '제목3',
    date: '2022년 11월 14일 (월)',
    todo: '할 일 2개',
    pins: [{ uid: '', title: '핀 제목', creatorId: '', imageUrl: '' }],
    contents: '콘텐츠1',
  },
  {
    title: '제목4',
    date: '2022년 11월 14일 (월)',
    todo: '할 일 2개',
    pins: [{ uid: '', title: '핀 제목', creatorId: '', imageUrl: '' }],
    contents: '콘텐츠1',
  },
];

function Todo() {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [currentNoteIndex, setCurrentNoteIndex] = useState(null);
  const [activeSaveButton, setActiveSaveButton] = useState(false);

  const handleNote = (idx) => {
    setCurrentNoteIndex(idx);
  };

  useEffect(() => {
    if (noteTitle.length > 50) setNoteTitle(noteTitle.slice(0, 50));
    noteTitle && noteContent ? setActiveSaveButton(true) : setActiveSaveButton(false);
  }, [noteTitle, noteContent]);

  return (
    <StyledRoot>
      <PinTitle />
      <StyledMain>
        <NoteList notes={notes} handleNote={(idx) => handleNote(idx)} />
        <StyledNote>
          <StyledNoteDate>
            {currentNoteIndex !== null ? notes[currentNoteIndex].date : getToday()}
          </StyledNoteDate>
          <StyledNoteTitle
            type="text"
            placeholder="노트 제목 추가"
            value={currentNoteIndex !== null ? notes[currentNoteIndex].title : noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
          <StyledNoteContent
            type="text"
            placeholder="내용을 입력해보세요."
            value={currentNoteIndex !== null ? notes[currentNoteIndex].contents : noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
          />
        </StyledNote>

        <Palette isActive={activeSaveButton} />
      </StyledMain>
    </StyledRoot>
  );
}

export default Todo;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  display: flex;
  font-weight: 700;
  font-size: 3.4rem;
  line-height: 4.1rem;
  color: ${pinterestColors.black};
  padding: 0 0 2.2rem 2.1rem;
  margin-bottom: 3.2rem;
  border-bottom: 1px solid ${pinterestColors.gray200};
`;

const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.7rem;
  height: 3.7rem;
  border-radius: 50%;
  background-color: ${pinterestColors.gray200};
  margin-left: 2rem;
  cursor: pointer;
`;

const StyledMain = styled.main`
  display: flex;
`;

const StyledNote = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 7.3rem;
`;

const StyledNoteDate = styled.span`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: ${pinterestColors.gray400};
  margin-bottom: 0.6rem;
`;

const CommonInput = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
`;

const StyledNoteTitle = styled(CommonInput)`
  font-weight: 700;
  font-size: 3.4rem;
  line-height: 4.1rem;
  margin-bottom: 2.4rem;
  &::placeholder {
    color: ${pinterestColors.gray300};
  }
`;

const StyledNoteContent = styled(CommonInput)`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.2rem;
  &::placeholder {
    color: ${pinterestColors.gray300};
  }
`;
