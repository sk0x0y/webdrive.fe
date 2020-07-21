import React from 'react';
import styled from '@emotion/styled';
import oc from 'open-color';
import { BsPeopleCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import ProfileMenu from './ProfileMenu';
import * as profileMenu from '../../stores/profileMenu';
import * as contextMenu from '../../stores/contextMenu';

const Header = () => {
  const dispatch = useDispatch();
  const { isVisible } = useSelector((state) => state.profileMenu);

  const HeaderWrap = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 60px;
    background: linear-gradient(160deg, ${oc.blue[5]}, #d02dca);
    background-size: 200% 100%;
  `;
  const Container = styled.div`
    display: flex;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  `;

  return (
    <HeaderWrap>
      <Container>
        <h1
          style={{
            fontWeight: 800,
            fontSize: 20,
            color: oc.gray[0],
            cursor: 'pointer',
          }}
        >
          KDrive
        </h1>
        <div
          style={{
            position: 'relative',
          }}
        >
          <BsPeopleCircle
            onClick={(e) => {
              e.stopPropagation();
              dispatch(profileMenu.switchVisible(), [dispatch]);
              dispatch(contextMenu.hide(), [dispatch]);
            }}
            cursor="pointer"
            size={30}
            color={oc.gray[0]}
          />
          {isVisible ? <ProfileMenu /> : null}
        </div>
      </Container>
    </HeaderWrap>
  );
};

export default Header;
