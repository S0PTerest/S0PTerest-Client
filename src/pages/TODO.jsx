import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NoteList from '../components/todo/NoteList';
import Palette from '../components/todo/Palette';
import { pinterestColors } from '../styles/color';
import PinTitle from '../components/board/PinTitle';
import { getNotes } from '../services';

const getToday = () => {
  const week = ['월', '화', '수', '목', '금', '토', '일'];
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = today.getDay();
  return `${year}년 ${month}월 ${date}일 (${week[day - 1]})`;
};

const BOARD_ID = '2474a7ac-6b9f-47c9-b113-a3422d902cbe';

function Todo() {
  const [notes, setNotes] = useState(null);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [currentNoteIndex, setCurrentNoteIndex] = useState(null);
  const [activeSaveButton, setActiveSaveButton] = useState(false);

  const handleNote = (idx) => {
    setCurrentNoteIndex(idx);
  };

  const fetchNotes = async () => {
    const { data } = await getNotes(BOARD_ID);
    setNotes(data.notes);
  };

  const checkTitleMaxLength = () => {
    if (noteTitle.length > 50) {
      setNoteTitle(noteTitle.slice(0, 50));
    }
  };

  const triggerSaveButton = () => {
    if (noteTitle && noteContent) {
      return true;
    }
    return false;
  };

  const setNoteData = () => {
    if (!currentNoteIndex) {
      setNoteTitle('');
      setNoteContent('');
      return;
    }
    setNoteTitle(notes[currentNoteIndex].title);
    setNoteContent(notes[currentNoteIndex].description);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    checkTitleMaxLength();
    setActiveSaveButton(triggerSaveButton());
  }, [noteTitle, noteContent]);

  useEffect(() => {
    setNoteData();
  }, [currentNoteIndex]);

  if (!notes) return;

  return (
    <StyledRoot>
      <PinTitle />
      <StyledMain>
        <NoteList notes={notes} handleNote={(idx) => handleNote(idx)} />
        <StyledNote>
          <StyledNoteDate>
            {currentNoteIndex ? notes[currentNoteIndex].date : getToday()}
          </StyledNoteDate>
          <StyledNoteTitle
            type="text"
            placeholder="노트 제목 추가"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
          <StyledNoteContent
            type="text"
            placeholder="내용을 입력해보세요."
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
          />
        </StyledNote>

        {/* <Palette pins={ notes[currentNoteIndex].pins} isActive={activeSaveButton} /> */}
      </StyledMain>
    </StyledRoot>
  );
}

export default Todo;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
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
