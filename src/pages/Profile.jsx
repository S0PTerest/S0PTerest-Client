import React from 'react';
import styled from 'styled-components';

function Profile() {
  return (
    <StyledRoot>
      <StyledProfileContainer></StyledProfileContainer>
      <StyledBoardContainer>보드 영역 입니다</StyledBoardContainer>
    </StyledRoot>
  );
}

export default Profile;

const StyledRoot = styled.div`
  width: 1920px;
  height: 963px; //header height 117px 고려한 값
  display: flex;
  background-color: green;
`;

const StyledProfileContainer = styled.div`
  width: 288px;
  height: 500px;
  margin-left: 48px;
  margin-top: 26px; //header height: 117px 고려한 값
  border: 1px solid #e9e9e9;
  border-radius: 14px;
`;

const StyledBoardContainer = styled.div`
  width: 1584px;
  height: 100%;
  padding: 3rem;
`;
