import React from 'react';
import styled from 'styled-components';
import PinGalleryImg from './PinGalleryImg';
import PinGalleryTitle from './PinGalleryTitle';

function PinGallery() {
  return (
    <StyledRoot>
      <PinGalleryTitle />
      <PinGalleryImg />
    </StyledRoot>
  );
}

export default PinGallery;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 39px;
`;
