import React from 'react';
import styled from 'styled-components';
import NoteList from '../components/NoteList';

function TODO() {
  return (
    <StyledRoot>
      <StyledTitle>제목</StyledTitle>
      <StyledMain>
        <NoteList />
        <StyledNote>Note</StyledNote>
      </StyledMain>
    </StyledRoot>
  );
}

export default TODO;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h1``;

const StyledMain = styled.main`
  display: flex;
`;

const StyledNote = styled.article``;
