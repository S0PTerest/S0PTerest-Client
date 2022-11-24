import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { pinterestColors } from '../../styles/color';
import { default as icEdit } from '../../assets/icon_edit.svg';
import { default as icShare } from '../../assets/icon_share.svg';
import { getUser } from '../../services';

function Account() {
  const [user, setUser] = useState(null);

  const getUserData = async () => {
    const { data } = await getUser();
    setUser(data['user']);
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <StyledRoot>
      <StyledImageWrapper>
        {user?.profileImageUrl ? (
          <StyledImage src={user.profileImageUrl} />
        ) : (
          <h1>{user?.name[0]}</h1>
        )}
      </StyledImageWrapper>
      <StyledName>{user?.name}</StyledName>
      <p>{user?.email}</p>
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
        <p>{user?.follower}</p>
      </StyledDesc>
      <StyledDesc>
        <p>팔로잉</p>
        <p>{user?.following}</p>
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
  margin: 3.3rem 0rem 0.2rem 0rem;
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
  width: 15rem;
  height: 2.4rem;
  margin-bottom: 1rem;
  p {
    font-size: 2rem;
    font-weight: 300;
    color: ${pinterestColors.black};
  }
  p:nth-child(2) {
    width: 1.5rem;
    text-align: center;
  }
`;
