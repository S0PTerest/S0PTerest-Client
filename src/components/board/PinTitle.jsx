import React, { useState } from 'react';
import styled from 'styled-components';
// import { pinterestColors } from '../../styles/color';
import { ReactComponent as IMenu } from '../../assets/iMenu.svg';
import { ReactComponent as IClickedMenu } from '../../assets/iClickedMenu.svg';

function PinTitle() {
  const [isIconHover, setIsIconHover] = useState(false);
  return (
    <StyledRoot>
      <StyledTitle>
        <span>민본포_7조 제목이 길어진다면 (50자 제한이라고 함)</span>
        <span onMouseOver={() => setIsIconHover(true)} onMouseOut={() => setIsIconHover(false)}>
          {isIconHover ? <IClickedMenu /> : <IMenu />}
        </span>
      </StyledTitle>

      <StyledActiveUser>
        <img class="activeUser1" src="activeUser1.svg" alt="activeUser1" />
        <img class="activeUser2" src="activeUser2.svg" alt="activeUser2" />
        <img class="activeUser3" src="activeUser3.svg" alt="activeUser3" />
      </StyledActiveUser>
    </StyledRoot>
  );
}

export default PinTitle;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledTitle = styled.div`
  font-size: 3.4rem;
  font-weight: bold;

  & > span:nth-child(2) {
    margin-left: 2.2rem;
    cursor: pointer;
    vertical-align: sub;
  }
`;

const StyledActiveUser = styled.div`
  .activeUser1 {
    position: relative;
    right: 10px;
  }
  .activeUser2 {
    position: absolute;
    right: 28px;
  }
  .activeUser3 {
    position: relative;
  }
`;
