import React, { useEffect, useState } from 'react';
import { ReactComponent as IMenu } from '../../assets/iMenu.svg';
import { ReactComponent as IDimMenu } from '../../assets/iDimMenu.svg';
import { pinterestColors } from '../../styles/color';
import styled, { css } from 'styled-components';
import { getUserPins } from '../../services';

function PinGalleryImg() {
  const [pin, setPin] = useState(null);
  const [isHovering, setIsHovering] = useState(0);
  
  
  const getPinData = async () => {
    const { data } = await getUserPins('2474a7ac-6b9f-47c9-b113-a3422d902cbe');
    setPin(data['pin']);
  };
  useEffect(() => {
    getPinData();
  }, []);

  if (!pin) return;

  return (
    <StyledRoot>
      {pin.map(({ imageUrl, title, creator }, index) => {
        return (
          <StyledGalleryImg key={index}>
           {isHovering ? ( 
           <StyledDim>
              <div>
                <span>
                  <h1>모든 핀</h1>
                  <IDimMenu />
                </span>
                <span>저장</span>
              </div>
            </StyledDim>) : ( ""
           )}
            <img src={imageUrl} alt="갤러리 이미지" onMouseOver={() => setIsHovering(1)} onMouseOut={() => setIsHovering(0)}/>
            {isHovering ? ( 
            <div className="dimMenu">
              <IMenu />
            </div>) : ( ""
           )}
            <StyledTitle>{title}</StyledTitle>
            <StyledUser>
              <img src={creator.profileImageUrl} alt="유저 이미지 " />
              <span>{creator.name}</span>
            </StyledUser>
          </StyledGalleryImg>
        );
      })}
    </StyledRoot>
  );
}

export default PinGalleryImg;

const StyledRoot = styled.div`
  margin-top: 2.7rem;
  column-count: 5;
  column-gap: 2.1em;
  .dimMenu {
    position: absolute;
    margin-top: -6rem;
    margin-left: 23.1rem;
  }
`;

const StyledGalleryImg = styled.div`
  display: inline-block;
  flex-direction: column;
  margin-bottom: 3.4em;

  & > img {
    width: 28.8rem;
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
