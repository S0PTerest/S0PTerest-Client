import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PinTitle from '../components/board/PinTitle';
import PinGallery from '../components/board/PinGallery';
import NoteList from '../components/todo/NoteList';
import { getNotes } from '../services';

function Board() {
  const { uid } = useParams();
  const [notes, setNotes] = useState();
  const [currentNoteIndex, setCurrentNoteIndex] = useState(null);

  const handleNote = (idx) => {
    setCurrentNoteIndex(idx);
  };

  const fetchNotes = async () => {
    const { data } = await getNotes(uid);
    setNotes(data.notes);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  if (!notes) return;

  return (
    <StyledRoot>
      <PinTitle />
      <StyledMain>
        <NoteList notes={notes} handleNote={(idx) => handleNote(idx)} />
        <PinGallery />
      </StyledMain>
    </StyledRoot>
  );
}

export default Board;

const StyledRoot = styled.div``;

const StyledMain = styled.main`
  display: flex;
  margin-top: 3.2rem;
`;
