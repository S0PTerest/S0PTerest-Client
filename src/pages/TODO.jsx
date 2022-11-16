import React from 'react';
import styled from 'styled-components';
import NoteList from '../components/todo/NoteList';
import Palette from '../components/todo/Palette';

function Todo() {
  return (
    <StyledRoot>
      <StyledTitle>제목</StyledTitle>
      <StyledMain>
        <NoteList />
        <StyledNote>Note</StyledNote>

        <Palette />
      </StyledMain>
    </StyledRoot>
  );
}

export default Todo;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h1``;

const StyledMain = styled.main`
  display: flex;
`;

const StyledNote = styled.article`
  width: 100%;
`;
