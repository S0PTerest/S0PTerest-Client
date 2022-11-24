import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NoteList from '../components/todo/NoteList';
import Palette from '../components/todo/Palette';
import { pinterestColors } from '../styles/color';
import PinTitle from '../components/board/PinTitle';
import { getNotes, createNote, updateNote } from '../services';

const getToday = (type) => {
  const week = ['월', '화', '수', '목', '금', '토', '일'];
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = today.getDay();
  if (type === 'withDay') return `${year}년 ${month}월 ${date}일 (${week[day - 1]})`;
  return `${year}-${month}-${date}`;
};

const BOARD_ID = '2474a7ac-6b9f-47c9-b113-a3422d902cbe';

function Todo() {
  const [notes, setNotes] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
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
    if (title.length > 50) {
      setTitle(title.slice(0, 50));
    }
  };

  const triggerSaveButton = () => {
    if (title && description) {
      return true;
    }
    return false;
  };

  const setNoteData = () => {
    if (!currentNoteIndex) {
      setTitle('');
      setDescription('');
      return;
    }
    setTitle(notes[currentNoteIndex].title);
    setDescription(notes[currentNoteIndex].description);
  };

  const onClickSaveButton = async (pinIds) => {
    const body = {
      title,
      date: getToday(),
      description,
      pinIds: !pinIds.length ? [] : pinIds,
    };
    if (!currentNoteIndex) {
      await createNote(BOARD_ID, body);
    } else {
      await updateNote(BOARD_ID, notes[currentNoteIndex].uid, body);
    }
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    checkTitleMaxLength();
    setActiveSaveButton(triggerSaveButton());
  }, [title, description]);

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
            {currentNoteIndex ? notes[currentNoteIndex].date : getToday('withDay')}
          </StyledNoteDate>
          <StyledNoteTitle
            type="text"
            placeholder="노트 제목 추가"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <StyledNoteContent
            type="text"
            placeholder="내용을 입력해보세요."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </StyledNote>

        <Palette
          isActive={activeSaveButton}
          onClickSaveButton={(pinIds) => onClickSaveButton([pinIds])}
        />
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
