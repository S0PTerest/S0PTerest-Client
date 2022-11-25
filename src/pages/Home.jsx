import React, { useState, useEffect } from 'react';
import { getPins } from '../services';
import styled from 'styled-components';
import { pinterestColors } from '../styles/color';
function Home() {
  const [pins, setPins] = useState(null);

  const fetchPins = async () => {
    const { data } = await getPins();
    setPins([...data.pins, ...data.pins, ...data.pins]);
  };

  useEffect(() => {
    fetchPins();
  }, []);

  if (!pins) return;

  return (
    <StyledRoot>
      {pins.map(({ uid, imageUrl, title, creator }) => {
        return (
          <StyledGallery key={uid}>
            <img src={imageUrl} alt="gallery" />

            <StyledTitle>{title}</StyledTitle>
            <StyledUser>
              <img src={creator.profileImageUrl} alt="user " />
              <span>{creator.name}</span>
            </StyledUser>
          </StyledGallery>
        );
      })}
    </StyledRoot>
  );
}

export default Home;

const StyledRoot = styled.div`
  margin-top: 2.7rem;
  column-count: 7;
  column-gap: 1.8rem;
`;

const StyledGallery = styled.div`
  display: inline-block;
  flex-direction: column;
  margin-bottom: 3.4rem;

  & > img {
    width: 25.2rem;
    border-radius: 1.6rem;
    cursor: pointer;
    position: relative;
    z-index: 0;

    &:hover {
      filter: grayscale(0.4);
    }
  }
`;

const StyledTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.7rem;
  max-width: 26.8rem;
  margin-top: 1.4rem;
  margin-left: 0.6rem;
  cursor: default;
`;

const StyledUser = styled.div`
  margin-top: 0.6rem;
  margin-bottom: 3.4em;
  display: flex;
  cursor: default;

  span {
    margin-block: auto;
    margin-left: 0.8rem;
    font-size: 1.4rem;
    font-weight: 500;
  }
  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }
`;

const StyledDim = styled.div`
  position: absolute;
  font-weight: 600;
  font-size: 18px;
  color: ${pinterestColors.white};
  line-height: 22px;
  align-items: center;
  z-index: 1;

  & > div:nth-child(1) {
    display: flex;
    margin: 2rem 0 0 2.4rem;

    h1 {
      margin-right: 1.2rem;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    span:nth-child(2) {
      border-radius: 6rem;
      background-color: #e60024;
      padding: 10px 16px 9px 16px;
      cursor: pointer;
      margin-left: 10.5rem;
    }
  }
`;
