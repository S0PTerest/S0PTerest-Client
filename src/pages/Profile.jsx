import React from 'react';
import styled from 'styled-components';
import { pinterestColors } from '../styles/color';
import { default as icEdit } from '../asset/icon_edit.svg';
import { default as icShare } from '../asset/icon_share.svg';

function Profile() {
  return (
    <StyledRoot>
      <StyledProfileContainer>
        <StyledImageBox>
          {/* <StyledImage /> => 이미지가 있는 경우에 로드할 컴포넌트 */}
          <h1>K</h1>
        </StyledImageBox>
        <StyledName>Kim Name</StyledName>
        <p>pdadf@gmail.com</p>
        <StyledIcon>
          <img src={icEdit} />
          <img src={icShare} />
        </StyledIcon>
        <StyledDesc>
          <p>팔로워</p>
          <p>1</p>
        </StyledDesc>
        <StyledDesc>
          <p>팔로잉</p>
          <p>1</p>
        </StyledDesc>
      </StyledProfileContainer>
      <StyledBoardContainer>보드 영역 입니다</StyledBoardContainer>
    </StyledRoot>
  );
}

export default Profile;

const StyledRoot = styled.div`
  width: 1920px;
  height: 963px; //header height 117px 고려한 값
  display: flex;
  /* background-color: #ff7070; */
`;

const StyledProfileContainer = styled.div`
  width: 288px;
  height: 500px;
  margin-left: 4.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.6rem; //header height: 117px 고려한 값
  border: 1px solid ${pinterestColors.gray200};
  border-radius: 1.4rem;
  padding: 3rem 0 3rem 0;

  p {
    font-size: 2rem;
    font-weight: 300;
    &:nth-child(3) {
      color: ${pinterestColors.gray400};
      margin-top: 0.5rem;
      line-height: 100%;
    }
    &:nth-of-type(2) {
      color: ${pinterestColors.black};
    }
  }
`;

const StyledImageBox = styled.div`
  width: 146px;
  height: 146px;
  border-radius: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${pinterestColors.gray200};

  h1 {
    font-size: 4.4rem;
  }
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledName = styled.h1`
  margin-top: 3.3rem;
  margin-bottom: 0rem;
  font-size: 3.4rem;
  font-weight: 700;
  line-height: 100%;
`;

const StyledBoardContainer = styled.div`
  width: 1584px;
  height: 963px;
  padding: 3rem;
`;

const StyledIcon = styled.div`
  display: flex;
  gap: 1.1rem;
  margin-top: 2rem;
  margin-bottom: 5.3rem;
`;

const StyledDesc = styled.div`
  display: flex;
  gap: 8.3rem;
`;
