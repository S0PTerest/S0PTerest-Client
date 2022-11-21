import React from 'react';
import { ReactComponent as IDropdown } from '../../assets/IDropdown.svg';
import styled from 'styled-components';

function PinGalleryTitle() {
  return (
    <StyledRoot>
      <StyledInfoPin>
        <h1>핀 n개</h1>
        <div>아이디어 더보기</div>
      </StyledInfoPin>
      <StyledSortPin>
        <util>보드 정리하기</util>
        <util>
          모든 핀
          <span>
            <IDropdown />
          </span>
        </util>
        <util_end>
          기본
          <span>
            <IDropdown />
          </span>
        </util_end>
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
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.88rem;
  }

  div {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.8rem;
    margin-left: 1.8rem;
    margin-block: auto;
  }
`;

const StyledSortPin = styled.div`
  display: flex;
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  util {
    margin-right: 2.6rem;
    span {
      margin-left: 0.8rem;
    }
  }
  util_end {
    margin-right: 1rem; 
    span {
      width: 0.8rem;
      height: 0.4rem;
      margin-left: 0.8rem;
    }
  }
`;