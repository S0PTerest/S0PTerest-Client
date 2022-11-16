import React from 'react';
import styled from 'styled-components';

function PinGalleryTitle() {
  return (
    <StyledRoot>
      <StyledInfoPin>
        <h1>핀 n개</h1>
        <div>아이디어 더보기</div>
      </StyledInfoPin>
      <StyledSortPin>
        <div>보드 정리하기</div>
        <div>모든 핀</div>
        <div>기본</div>
      </StyledSortPin>
    </StyledRoot>
  );
}

export default PinGalleryTitle;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  }
`;

const StyledSortPin = styled.div`
  display: flex;
  float: right;
`;
