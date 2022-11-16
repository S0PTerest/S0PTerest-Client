import React from 'react';
import styled from 'styled-components';
import PinTitle from '../components/board/PinTitle';
import PinGallery from '../components/board/PinGallery';
import NoteList from '../components/NoteList';

function Board() {
  return (
    <StyledRoot>
      <PinTitle />
      <hr />
      <StyledMain>
        <NoteList />
        <PinGallery />
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
