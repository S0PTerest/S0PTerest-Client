import React, { useState } from 'react';
import styled from 'styled-components';
import PinTitle from '../components/board/PinTitle';
import PinGallery from '../components/board/PinGallery';
import NoteList from '../components/todo/NoteList';

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

function Board() {
  const [currentNoteIndex, setCurrentNoteIndex] = useState(null);

  const handleNote = (idx) => {
    setCurrentNoteIndex(idx);
  };
  return (
    <StyledRoot>
      <PinTitle />
      <hr />
      <StyledMain>
        <NoteList notes={notes} handleNote={(idx) => handleNote(idx)} /> <PinGallery />
      </StyledMain>
    </StyledRoot>
  );
}

export default Board;

const StyledRoot = styled.div`
  hr {
    margin-top: 2.8rem;
    margin-bottom: 3.2rem;
  }
`;

const StyledMain = styled.main`
  display: flex;
`;
