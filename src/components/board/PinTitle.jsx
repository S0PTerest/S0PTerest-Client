import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as IMenu } from '../../assets/iMenu.svg';
import { ReactComponent as IClickedMenu } from '../../assets/iClickedMenu.svg';
import { ReactComponent as ActiveUser1 } from '../../assets/activeUser1.svg';
import { ReactComponent as ActiveUser2 } from '../../assets/activeUser2.svg';
import { ReactComponent as ActiveUser3 } from '../../assets/activeUser3.svg';
import { getBoards } from '../../services';
import { useParams } from 'react-router-dom';

function PinTitle() {
  const { uid } = useParams();
  const [isIconHover, setIsIconHover] = useState(false);
  const [boardTitle, setBoardTitle] = useState('');
  const fetchBoards = async () => {
    const { data } = await getBoards();
    const boardList = data.board;
    setBoardTitle(boardList.filter((board) => board.uid === uid)[0].title);
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  return (
    <StyledRoot>
      <StyledTitle>
        <span>{boardTitle}</span>
        <span onMouseOver={() => setIsIconHover(true)} onMouseOut={() => setIsIconHover(false)}>
          {isIconHover ? <IClickedMenu /> : <IMenu />}
        </span>
      </StyledTitle>

      <StyledActiveUser>
        <ActiveUser1 className="activeUser1" />
        <ActiveUser2 className="activeUser2" />
        <ActiveUser3 className="activeUser3" />
      </StyledActiveUser>
    </StyledRoot>
  );
}

export default PinTitle;

const StyledRoot = styled.div`
  height: 7.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 28px;
  border-bottom: 1px solid #e6e6e6; ;
`;

const StyledTitle = styled.div`
  font-size: 3.4rem;
  font-weight: bold;
  margin-left: 3rem;

  & > span:nth-child(2) {
    margin-left: 2.2rem;
    cursor: pointer;
    vertical-align: sub;
  }
`;

const StyledActiveUser = styled.div`
  .activeUser1 {
    position: relative;
    left: 3.2rem;
  }
  .activeUser2 {
    position: relative;
    left: 1.6rem;
  }
  .activeUser3 {
    position: relative;
  }
`;
