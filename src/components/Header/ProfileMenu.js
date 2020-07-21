import React from 'react';
import styled from '@emotion/styled';
import oc from 'open-color';

const ProfileMenu = () => {
  const ProfileMenuWrap = styled.ul`
    position: absolute;
    right: 0;
    top: 40px;
    z-index: 20;
    width: 100px;
    //height: 150px;
    border: 1px solid ${oc.gray[3]};
    background-color: ${oc.white};
    cursor: pointer;
  `;
  const ProfileMenuItem = styled.li`
    padding: 0 20px;
    font-size: 12px;
    line-height: 40px;

    &:hover {
      background-color: ${oc.gray[0]};
    }
  `;

  return (
    <ProfileMenuWrap>
      <ProfileMenuItem>마이페이지</ProfileMenuItem>
      <ProfileMenuItem>고객센터</ProfileMenuItem>
      <ProfileMenuItem>로그아웃</ProfileMenuItem>
    </ProfileMenuWrap>
  );
};

export default ProfileMenu;
