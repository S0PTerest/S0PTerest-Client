import React from 'react';
import styled from 'styled-components';
import IconLogo from '../../assets/icon_logo.svg';
import IconArrowUp from '../../assets/icon_arrow_up.svg';
import IconArrowDown from '../../assets/icon_arrow_down.svg';
import IconAddBtn from '../../assets/icon_add_btn.svg';
import IconNoticeBtn from '../../assets/icon_notice_btn.svg';
import IconUserLogo from '../../assets/icon_user_logo.svg';
import IconMessageBtn from '../../assets/icon_message.svg';
import { pinterestColors } from '../../styles/color';
import DropBox from './DropBox';
const CONSTANT = {
  title: '추천옵션',
  make: '만들기',
  options: ['핀', '아이디어핀', '보드'],
};
function Header() {
  const options = ['보드이름', '보드이름1', '보드이름2'];
  const [isRecommendOpen, setIsRecommendOpen] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const [isAddOpen, setIsAddOpen] = React.useState(false);

  return (
    <StyledHeaderWrapper>
      <StyledLogoWrapper>
        <img src={IconLogo} alt="Logo" />
      </StyledLogoWrapper>
      <StyledRecommendButton
        onClick={() => {
          setIsRecommendOpen((prevState) => !prevState);
          console.log(isRecommendOpen);
        }}
      >
        <span>모든추천</span>
        <StyledArrow src={isRecommendOpen ? IconArrowUp : IconArrowDown} />
        {isRecommendOpen && (
          <DropBox text={CONSTANT.title} options={options} top={6.5} right={-3} />
        )}
      </StyledRecommendButton>
      <StyledSearchBar
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          console.log(searchText);
        }}
      />
      <StyledIconWrapper>
        <StyledIconAdd
          onClick={() => {
            setIsAddOpen((prevState) => !prevState);
            console.log(isAddOpen);
          }}
        >
          <img src={IconAddBtn} alt="AddButton" />
          {isAddOpen && (
            <DropBox text={CONSTANT.make} options={CONSTANT.options} top={8} right={11} />
          )}
        </StyledIconAdd>
        <StyledIconNotice>
          <img src={IconNoticeBtn} alt="Notice" />
        </StyledIconNotice>
        <StyledIconMessage>
          <img src={IconMessageBtn} alt="Message" />
        </StyledIconMessage>
        <StyledIconUserLogo>
          <img src={IconUserLogo} alt="IconUser" />
        </StyledIconUserLogo>
      </StyledIconWrapper>
    </StyledHeaderWrapper>
  );
}

export default Header;

const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 11.7rem;
  border: 1px solid red;
`;

const StyledLogoWrapper = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  margin-left: 2.9rem;
`;

const StyledRecommendButton = styled.button`
  border: none;
  position: relative;
  height: 5.5rem;
  width: 15.2rem;
  border-radius: 3rem;
  background-color: ${pinterestColors.black};
  color: ${pinterestColors.white};
  font-size: 1.8rem;
  margin-left: 2.9rem;
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
  width: 18.9rem;
  justify-content: space-between;
`;

const StyledIconNotice = styled.div``;
const StyledIconUserLogo = styled.div``;
const StyledIconAdd = styled.div``;
const StyledIconMessage = styled.div``;
