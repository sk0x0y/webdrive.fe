import React from 'react';
import styled from '@emotion/styled';
import oc from 'open-color';
import Profile from './Profile';

const SideMenu = () => {
  const SideMenuWrap = styled.aside`
    position: fixed;
    top: 60px;
    left: 0;
    z-index: 1;
    width: 250px;
    height: 100%;
    border-right: 5px solid ${oc.gray[0]};
    background-color: ${oc.gray[0]};
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  `;

  return (
    <SideMenuWrap>
      <Profile />
    </SideMenuWrap>
  );
};

export default SideMenu;
