import React from 'react';
import styled from '@emotion/styled';
import oc from 'open-color';
import Capacity from './Capacity';

const Profile = () => {
  const ProfileWrap = styled.div`
    padding: 30px 0;
    background-color: ${oc.white};
    text-align: center;
  `;
  const InitialLetter = styled.i`
    display: block;
    width: 120px;
    height: 120px;
    margin: 30px auto;
    border-radius: 50%;
    background-color: ${oc.blue[5]};
    font-weight: 600;
    font-size: 18px;
    font-style: normal;
    color: ${oc.gray[0]};
    line-height: 120px;
  `;
  const Name = styled.span`
    display: block;
    margin-bottom: 20px;
    font-weight: 600;
    color: ${oc.gray[9]};
  `;

  return (
    <ProfileWrap>
      <InitialLetter>양</InitialLetter>
      <Name>양석영 팀장</Name>
      <Capacity />
    </ProfileWrap>
  );
};

export default Profile;
