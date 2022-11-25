import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IconLogo from '../../assets/icon_logo.svg';
import IconArrowUp from '../../assets/icon_arrow_up.svg';
import IconArrowDown from '../../assets/icon_arrow_down.svg';
import IconAddBtn from '../../assets/icon_add_btn.svg';
import IconNoticeBtn from '../../assets/icon_notice_btn.svg';
import IconMessageBtn from '../../assets/icon_message.svg';
import { pinterestColors } from '../../styles/color';
import DropBox from './DropBox';
import { getUser } from '../../services';
const DROPBOX_ALLRECOMMEND = {
  title: '추천 옵션',
  options: ['보드이름', '보드이름2', '보드이름3'],
};

const DROPBOX_MAKE = {
  title: '만들기',
  options: ['핀', '아이디어 핀', '보드'],
};
function Header() {
  const [isRecommendOpen, setIsRecommendOpen] = useState(false);
  const [isMakeOpen, setIsMakeOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const [user, setUser] = useState(null);
  const getUserData = async () => {
    const { data } = await getUser();
    setUser(data['user']);
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <StyledHeaderWrapper>
      <StyledLogoWrapper to="/">
        <img src={IconLogo} alt="Logo" />
      </StyledLogoWrapper>
      <StyledRecommendButton
        onClick={() => {
          setIsRecommendOpen((prevState) => !prevState);
        }}
      >
        <span>모든추천</span>
        <StyledArrow src={isRecommendOpen ? IconArrowUp : IconArrowDown} />
        {isRecommendOpen && (
          <DropBox text={DROPBOX_ALLRECOMMEND.title} options={DROPBOX_ALLRECOMMEND.options} />
        )}
      </StyledRecommendButton>
      <StyledSearchBar
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <StyledIconWrapper>
        <StyledIconAdd
          onClick={() => {
            setIsMakeOpen((prevState) => !prevState);
          }}
        >
          <img src={IconAddBtn} alt="AddButton" />
          {isMakeOpen && <DropBox text={DROPBOX_MAKE.title} options={DROPBOX_MAKE.options} />}
        </StyledIconAdd>

        <StyledIconNotice img src={IconNoticeBtn} alt="Notice" />
        <StyledIconMessage>
          <img src={IconMessageBtn} alt="Message" />
        </StyledIconMessage>
        <Link to="/profile">
          <StyledIconUserLogo src={user?.profileImageUrl} alt="IconUser" />
        </Link>
      </StyledIconWrapper>
    </StyledHeaderWrapper>
  );
}

export default Header;

const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 11.7rem;
`;

const StyledLogoWrapper = styled(Link)`
  width: 2.8rem;
  height: 2.8rem;
`;

const StyledRecommendButton = styled.button`
  border: none;

  height: 5.5rem;
  width: 15.2rem;
  border-radius: 3rem;
  background-color: ${pinterestColors.black};
  color: ${pinterestColors.white};
  font-size: 1.8rem;
  margin-left: 2.9rem;
  cursor: pointer;
`;

const StyledSearchBar = styled.input`
  width: 130.2rem;
  height: 5.5rem;
  border-radius: 2.75rem;
  background-color: ${pinterestColors.gray200};
  border: none;
  outline: none;
  margin-left: 2.5rem;
`;

const StyledArrow = styled.img`
  margin-left: 1.8rem;
`;

const StyledIconWrapper = styled.div`
  display: flex;
  margin-left: 5.9rem;
  width: 20rem;
  gap: 4.7rem;
`;

const StyledIconNotice = styled.img``;
const StyledIconUserLogo = styled.img`
  height: 2.8rem;
  width: 2.8rem;
  border-radius: 50%;
`;
const StyledIconAdd = styled.div`
  cursor: pointer;
`;
const StyledIconMessage = styled.div``;
