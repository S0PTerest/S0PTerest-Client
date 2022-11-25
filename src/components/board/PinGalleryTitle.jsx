import React from 'react';
import { ReactComponent as IDropdown } from '../../assets/IDropdown.svg';
import styled from 'styled-components';

function PinGalleryTitle(props) {
  const { pin } = props;

  return (
    <StyledRoot>
      <StyledInfoPin>
        <h1>핀 {pin.length}개</h1>
        <div>아이디어 더보기</div>
      </StyledInfoPin>
      <StyledSortPin>
        <div>보드 정리하기</div>
        <div>
          모든 핀
          <span>
            <IDropdown />
          </span>
        </div>
        <div>
          기본
          <span>
            <IDropdown />
          </span>
        </div>
      </StyledSortPin>
    </StyledRoot>
  );
}

export default PinGalleryTitle;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 1rem;
`;

const StyledInfoPin = styled.div`
  display: flex;

  h1 {
    height: 2.9rem;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.88rem;
  }

  div {
    height: 1.8rem;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.8rem;
    margin-left: 1.8rem;
    margin-block: auto;
  }
`;

const StyledSortPin = styled.div`
  height: 1.8rem;
  display: flex;
  float: right;
  font-size: 1.5rem;
  font-weight: 700;

  span {
    width: 0.8rem;
    height: 0.4rem;
    margin-left: 0.8rem;
    line-height: 2rem;
    display: inline-block;
    vertical-align: top;
  }

  & > div:not(:last-child) {
    margin-right: 2.6rem;
  }
  & > div:last-child {
    margin-right: 1rem;
  }
`;
