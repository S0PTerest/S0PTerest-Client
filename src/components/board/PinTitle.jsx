import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as IMenu } from '../../assets/iMenu.svg';
import { ReactComponent as IClickedMenu } from '../../assets/iClickedMenu.svg';
import { ReactComponent as ActiveUser1 } from '../../assets/activeUser1.svg';
import { ReactComponent as ActiveUser2 } from '../../assets/activeUser2.svg';
import { ReactComponent as ActiveUser3 } from '../../assets/activeUser3.svg';

function PinTitle() {
  const [isIconHover, setIsIconHover] = useState(false);
  return (
    <StyledRoot>
      <StyledTitle>
        {/* 글자수 제한은 작성 시 검사가 이루어지기 때문에 후에 데이터를 받아오는 과정만 추가해주면 됨. */}
        <span>민본포_7조 제목이 길어진다면 (50자 제한이라고 함)</span>
        <span onMouseOver={() => setIsIconHover(true)} onMouseOut={() => setIsIconHover(false)}>
          {isIconHover ? <IClickedMenu /> : <IMenu />}
        </span>
      </StyledTitle>

      <StyledActiveUser>
        <ActiveUser1 class="activeUser1" />
        <ActiveUser2 class="activeUser2" />
        <ActiveUser3 class="activeUser3" />
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
