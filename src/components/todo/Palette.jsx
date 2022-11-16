import React, { useState } from 'react';
import styled from 'styled-components';
import { pinterestColors } from '../../styles/color';
import { ReactComponent as IPluspin } from '../../assets/iPluspin.svg';
import { ReactComponent as ITextStyle } from '../../assets/iTextStyle.svg';

import { default as iBold } from '../../assets/iBold.svg';
import { default as iItalic } from '../../assets/iItalic.svg';
import { default as iUnderline } from '../../assets/iUnderline.svg';
import { default as iStrikethrough } from '../../assets/iStrikethrough.svg';
import { default as iBulletpoint } from '../../assets/iBulletpoint.svg';
import { default as iNumberpoint } from '../../assets/iNumberpoint.svg';
import { default as iCheckbox } from '../../assets/iCheckbox.svg';

const firstLineTools = [iBold, iItalic, iUnderline, iStrikethrough];
const secondLineTools = [iBulletpoint, iNumberpoint, iCheckbox];

function Palette() {
  const [isSelected, setIsSelected] = useState('textstyle');

  const selectTool = (tool) => {
    setIsSelected(tool);
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

        <StyledSaveButton>저장</StyledSaveButton>
      </StyledButtonWrapper>

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
    </StyledRoot>
  );
}

export default Palette;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 32.1rem;
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
  background-color: ${pinterestColors.gray200};
  border-radius: 3rem;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: ${pinterestColors.gray400};
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
