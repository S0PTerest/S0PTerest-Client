import React from 'react';
import styled from 'styled-components';
import PinGalleryTitle from './PinGalleryTitle';

function PinGallery() {
  return (
    <StyledRoot>
      <PinGalleryTitle />
      <div>PinGallery</div>
    </StyledRoot>
  );
}

export default PinGallery;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
`;
