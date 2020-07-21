import React from 'react';
import styled from '@emotion/styled';
import oc from 'open-color';
import { useSelector } from 'react-redux';

const ContextMenuComponent = () => {
  const { menuList, position } = useSelector((state) => state.contextMenu);

  const ContextMenu = styled.div`
    position: absolute;
    z-index: 20;
    border: 1px solid ${oc.gray[3]};
    background-color: ${oc.white};
    cursor: pointer;
  }
  `;
  const ItemWrap = styled.ul`
    display: block;
  `;
  const Item = styled.li`
    width: 100px;
    padding: 0 20px;
    font-size: 12px;
    line-height: 40px;

    &:hover {
      background-color: ${oc.gray[0]};
    }
  `;

  return (
    <ContextMenu
      style={{
        top: position.y,
        left: position.x,
      }}
    >
      <ItemWrap>
        {menuList.map((item, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <Item key={idx}>{item}</Item>
        ))}
      </ItemWrap>
    </ContextMenu>
  );
};

export default ContextMenuComponent;
