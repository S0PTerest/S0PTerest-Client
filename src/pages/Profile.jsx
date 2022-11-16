import React from 'react';
import styled from 'styled-components';
import Account from '../components/profile/Account';
import PinList from '../components/profile/PinList';

function Profile() {
  return (
    <StyledRoot>
      <Account />
      <PinList />
    </StyledRoot>
  );
}

export default Profile;

const StyledRoot = styled.div`
  width: 192rem;
  height: 96.3rem; //header height 117px 고려한 값
  display: flex;
  /* background-color: #ff7070; */
`;
