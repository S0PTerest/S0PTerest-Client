import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { pinterestColors } from '../../styles/color';
import { ReactComponent as IPluspin } from '../../assets/iPluspin.svg';
import { ReactComponent as ITextStyle } from '../../assets/iTextStyle.svg';
import { ReactComponent as IcCheck } from '../../assets/icCheck.svg';

import { default as iBold } from '../../assets/iBold.svg';
import { default as iItalic } from '../../assets/iItalic.svg';
import { default as iUnderline } from '../../assets/iUnderline.svg';
import { default as iStrikethrough } from '../../assets/iStrikethrough.svg';
import { default as iBulletpoint } from '../../assets/iBulletpoint.svg';
import { default as iNumberpoint } from '../../assets/iNumberpoint.svg';
import { default as iCheckbox } from '../../assets/iCheckbox.svg';
3;

const firstLineTools = [iBold, iItalic, iUnderline, iStrikethrough];
const secondLineTools = [iBulletpoint, iNumberpoint, iCheckbox];

const pinList = [
  'https://images.unsplash.com/photo-1668396817444-402fec00939a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1668457248686-cd6bc7ef1228?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1668370477273-f18c110b2d46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1668584086743-ef5423409bc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
  'https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1668571350460-3b7bf36b87e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1668571350460-3b7bf36b87e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1668571350460-3b7bf36b87e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1668571350460-3b7bf36b87e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1668571350460-3b7bf36b87e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1668571350460-3b7bf36b87e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1668571350460-3b7bf36b87e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
];

function Palette(props) {
  const { isActive } = props;
  const [isSelected, setIsSelected] = useState('textstyle');
  const [pinStatus, setPinStatus] = useState(Array(pinList.length).fill(false));

  const selectTool = (tool) => {
    setIsSelected(tool);
  };

  const selectPin = (idx) => {
    let newStatus = [...pinStatus];
    newStatus[idx] = !newStatus[idx];
    setPinStatus(newStatus);
  };

  return (
    <StyledRoot>
      <StyledButtonWrapper>
        <div>
          <StyledTool
            isSelected={isSelected === 'textstyle'}
            onClick={() => selectTool('textstyle')}
          >
            <ITextStyle />
          </StyledTool>
          <StyledTool isSelected={isSelected === 'pluspin'} onClick={() => selectTool('pluspin')}>
            <IPluspin />
          </StyledTool>
        </div>

        <StyledSaveButton active={isActive}>저장</StyledSaveButton>
      </StyledButtonWrapper>

      {isSelected === 'textstyle' ? (
        <StyledToolWrapper>
          <div>
            {firstLineTools.map((tool) => (
              <StyledTool key={tool}>
                <img src={tool} />
              </StyledTool>
            ))}
          </div>
          <div>
            {secondLineTools.map((tool) => (
              <StyledTool key={tool}>
                <img src={tool} />
              </StyledTool>
            ))}
          </div>
        </StyledToolWrapper>
      ) : (
        <StyledPinWrapper>
          <div>
            {pinList.map((pin, idx) => {
              if (idx < pinList.length / 2) {
                return (
                  <StyledPin key={idx} onClick={() => selectPin(idx)}>
                    <StyledImageWrapper>
                      <StyledBackground isSelected={pinStatus[idx]}></StyledBackground>
                      <img src={pin} />
                      {pinStatus[idx] && <StyledIcCheck />}
                    </StyledImageWrapper>
                  </StyledPin>
                );
              }
            })}
          </div>
          <div>
            {pinList.map((pin, idx) => {
              if (idx >= pinList.length / 2) {
                return (
                  <StyledPin key={idx} onClick={() => selectPin(idx)}>
                    <StyledImageWrapper>
                      <StyledBackground isSelected={pinStatus[idx]}></StyledBackground>
                      <img src={pin} />
                      {pinStatus[idx] && <StyledIcCheck />}
                    </StyledImageWrapper>
                  </StyledPin>
                );
              }
            })}
          </div>
        </StyledPinWrapper>
      )}
    </StyledRoot>
  );
}

export default Palette;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 32.1rem;
  height: 100%;
  background: ${pinterestColors.white};
  box-shadow: 0 0 1.8rem rgba(0, 0, 0, 0.06);
  border-radius: 3rem;
  padding: 0 2.6rem;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${pinterestColors.gray200};

  & > div {
    display: flex;
    align-items: center;
    padding: 3rem 0 2.2rem 0;
  }
`;

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

const StyledTool = styled(Background)`
  & > svg {
    width: 2.5rem;
    height: 2.5rem;
  }
  margin-right: 1.9rem;
  background-color: ${({ isSelected }) => isSelected && pinterestColors.gray200};
  &:hover {
    background-color: ${pinterestColors.gray200};
  }
  cursor: pointer;
`;

const StyledSaveButton = styled.button`
  padding: 1.5rem 2rem 1.3rem 2rem;
  border: none;
  border-radius: 3rem;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: ${({ active }) => (active ? pinterestColors.white : pinterestColors.gray400)};
  background-color: ${({ active }) => (active ? pinterestColors.primary : pinterestColors.gray200)};
`;

const StyledToolWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  & > div:first-child {
    margin: 2.4rem 0 0 0;
  }
  & > div:last-child {
    margin: 2.2rem 0 3.5rem 0;
  }
`;
const StyledPinWrapper = styled.div`
  display: flex;
  gap: 11px;
  width: 32.1rem;
  max-height: 66.8rem;
  overflow-y: scroll;
`;

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  width: 12.5rem;
  height: 100%;
  background-color: ${({ isSelected }) => isSelected && 'rgba(0,0,0,0.4)'};
  border-radius: 1rem;
`;

const StyledPin = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 2.2rem;
`;

const StyledImageWrapper = styled.div`
  position: relative;
  width: 12.5rem;
  &:not(:last-child) {
    margin-bottom: 11px;
  }
  & > img {
    display: block;
    width: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }
`;

const StyledIcCheck = styled(IcCheck)`
  position: absolute;
  bottom: 1.2rem;
  right: 1.2rem;
`;
