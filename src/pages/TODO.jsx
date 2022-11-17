import React, { useState } from 'react';
import styled from 'styled-components';
import NoteList from '../components/todo/NoteList';
import Palette from '../components/todo/Palette';
import { pinterestColors } from '../styles/color';
import { ReactComponent as IcMenu } from '../assets/icMenu.svg';

function Todo() {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  return (
    <StyledRoot>
      <StyledTitle>
        민본포_7조 제목이 길어진다면 (50자 제한이라고 함)
        <StyledIconWrapper>
          <IcMenu />
        </StyledIconWrapper>
      </StyledTitle>
      <StyledMain>
        <NoteList />
        <StyledNote>
          <StyledNoteDate>2022년 11월 17일 (목)</StyledNoteDate>
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
