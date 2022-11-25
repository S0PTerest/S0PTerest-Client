import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PinGalleryImg from './PinGalleryImg';
import PinGalleryTitle from './PinGalleryTitle';
import { getUserPins } from '../../services';
import { useParams } from 'react-router-dom';

function PinGallery() {
  const { uid } = useParams();
  const [pin, setPin] = useState(null);

  const getPinData = async () => {
    const { data } = await getUserPins(uid);
    setPin(data.pin);
  };
  useEffect(() => {
    getPinData();
  }, []);

  if (!pin) return;
  return (
    <StyledRoot>
      <PinGalleryTitle pin={pin} />
      <PinGalleryImg pin={pin} />
    </StyledRoot>
  );
}

export default PinGallery;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3.9rem;
`;
