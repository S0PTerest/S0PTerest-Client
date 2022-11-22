import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { pinterestColors } from '../../styles/color';
import { ReactComponent as IPlus } from '../../assets/iPlus.svg';
import { ReactComponent as IOption } from '../../assets/iOption.svg';
import { Link } from 'react-router-dom';
import BoardItem from '../common/BoardItem';
import DropBox from '../common/DropBox';

const dropBoxData = { text: '노트 옵션', options: ['삭제', '수정'] };

function NoteList(props) {
  const { notes, handleNote } = props;
  const [noteStatus, setNoteStatus] = useState(new Array(notes.length).fill('close'));
  const [dropBoxStatus, setDropBoxStatus] = useState(new Array(notes.length).fill('close'));

  const toggleNoteStatus = (e, idx) => {
    if (e.target.closest('div').id === 'option') return;
    changeStatus(idx, noteStatus, setNoteStatus);
  };

  const openOptionModal = (idx) => {
    changeStatus(idx, dropBoxStatus, setDropBoxStatus);
  };

  const changeStatus = (idx, array, handler) => {
    let newStatus = new Array(notes.length).fill('close');
    if (array.some((val) => val) && array.indexOf('open') === idx) {
      handler(newStatus);
      return;
    }
    newStatus[idx] = newStatus[idx] === 'open' ? 'close' : 'open';
    handler(newStatus);
  };

  const openNote = (e, idx) => {
    toggleNoteStatus(e, idx);
    handleNote(idx);
  };

  return (
    <StyledRoot>
      <StyledCreateButton to="/todo" onClick={() => handleNote(null)}>
        <h1>노트 만들기</h1>
        <IPlus />
      </StyledCreateButton>

      <StyledNoteList>
        {notes.map(({ title, date, todo }, idx) => (
          <StyledNote key={title} isOpen={noteStatus[idx] === 'open'}>
            {dropBoxStatus[idx] === 'open' && (
              <DropBox text={dropBoxData.text} options={dropBoxData.options} />
            )}

            <div onClick={(e) => openNote(e, idx)}>
              <StyledTitle>
                <h1>{title}</h1>
                <div id="option">
                  <IOption onClick={() => openOptionModal(idx)} />
                </div>
              </StyledTitle>

              <StyledNoteInfo>
                {date} &#183; {todo}
              </StyledNoteInfo>
            </div>

            {noteStatus[idx] === 'open' && <BoardItem text="todo" />}
          </StyledNote>
        ))}
      </StyledNoteList>
    </StyledRoot>
  );
}

export default NoteList;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30.3rem;
  margin: 0 2.1rem 0 0.5rem;
`;

const StyledCreateButton = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 2rem;
  border: 1px solid #efefef;
  border-radius: 1rem;
  margin-bottom: 1rem;
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
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem 2.2rem;
  margin-top: ${({ isOpen }) => isOpen && '2.2rem'};
  cursor: pointer;
  ${({ isOpen }) =>
    isOpen &&
    css`
      background-color: ${pinterestColors.gray100};
      border-bottom: none;
      border-radius: 1.8rem;
    `}

  &:not(:last-child) {
    border-bottom: ${({ isOpen }) =>
      !isOpen ? '1.25px solid #e9e9e9' : '1.25px solid rgba(0,0,0,0)'};
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
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: ${pinterestColors.gray400};
`;