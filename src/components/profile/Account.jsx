import React from 'react';
import styled from 'styled-components';
import { pinterestColors } from '../../styles/color';
import { default as icEdit } from '../../asset/icon_edit.svg';
import { default as icShare } from '../../asset/icon_share.svg';

function Account() {
  return (
    <StyledRoot>
      <StyledImageWrapper>
        {/* <StyledImage /> => 이미지가 있는 경우에 로드할 컴포넌트 */}
        <h1>K</h1>
      </StyledImageWrapper>
      <StyledName>Kim Name</StyledName>
      <p>pdadf@gmail.com</p>
      <StyledIconWrapper>
        <StyledIconBg>
          <img src={icEdit} />
        </StyledIconBg>
        <StyledIconBg>
          <img src={icShare} />
        </StyledIconBg>
      </StyledIconWrapper>
      <StyledDesc>
        <p>팔로워</p>
        <p>1</p>
      </StyledDesc>
      <StyledDesc>
        <p>팔로잉</p>
        <p>1</p>
      </StyledDesc>
    </StyledRoot>
  );
}

export default Account;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 28.8rem;
  height: 50rem;
  margin: 2.6rem 5.6rem 0 4.8rem;
  padding: 3rem 0 3rem 0;
  border: 1px solid ${pinterestColors.gray200};
  border-radius: 1.4rem;

  p {
    font-size: 2rem;
    font-weight: 300;
    color: ${pinterestColors.gray400};
    margin-top: 0.5rem;
    line-height: 100%;
  }
`;

const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14.6rem;
  height: 14.6rem;
  border-radius: 70%;
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
  font-size: 3.4rem;
  font-weight: 700;
  line-height: 100%;
`;

const StyledIconWrapper = styled.div`
  display: flex;
  gap: 1.1rem;
  margin: 2rem 0 5.3rem 0;
`;

const StyledIconBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 70%;
  background-color: ${pinterestColors.gray100};
`;

const StyledDesc = styled.div`
  display: flex;
  gap: 8.3rem;
  p {
    font-size: 2rem;
    font-weight: 300;
    color: ${pinterestColors.black};
  }
`;
