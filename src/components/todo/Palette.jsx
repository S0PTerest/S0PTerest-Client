import React, { useState } from 'react';
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

function Palette(props) {
  const { pins, isActive, onClickSaveButton } = props;
  const [isSelected, setIsSelected] = useState('textstyle');
  const [selectedPinIds, setSelectedPinIds] = useState(new Set());

  const selectTool = (tool) => {
    setIsSelected(tool);
  };

  const selectPin = (id) => {
    const updatedSelectedPinId = new Set(selectedPinIds);
    if (updatedSelectedPinId.has(id)) {
      updatedSelectedPinId.delete(id);
    } else {
      updatedSelectedPinId.add(id);
    }
    setSelectedPinIds(updatedSelectedPinId);
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

        <StyledSaveButton
          active={isActive}
          disabled={!isActive}
          onClick={() => onClickSaveButton([...selectedPinIds])}
        >
          저장
        </StyledSaveButton>
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
            {pins.map(({ uid, imageUrl }, idx) => {
              if (idx < pins.length / 2) {
                return (
                  <StyledPin key={uid} onClick={() => selectPin(uid)}>
                    <StyledImageWrapper>
                      <StyledBackground isSelected={selectedPinIds.has(uid)}></StyledBackground>
                      <img src={imageUrl} />
                      {selectedPinIds.has(uid) && <StyledIcCheck />}
                    </StyledImageWrapper>
                  </StyledPin>
                );
              }
            })}
          </div>
          <div>
            {pins.map(({ uid, imageUrl }, idx) => {
              if (idx >= pins.length / 2) {
                return (
                  <StyledPin key={uid} onClick={() => selectPin(uid)}>
                    <StyledImageWrapper>
                      <StyledBackground isSelected={selectedPinIds.has(uid)}></StyledBackground>
                      <img src={imageUrl} />
                      {selectedPinIds.has(uid) && <StyledIcCheck />}
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
  cursor: pointer;
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
  cursor: pointer;
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
