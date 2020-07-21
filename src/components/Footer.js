import React from 'react';
import styled from '@emotion/styled';
import oc from 'open-color';

const FooterComponent = () => {
  const Footer = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 30px;
    background-color: ${oc.gray[9]};
    font-size: 12px;
    line-height: 30px;
    color: ${oc.gray[6]};

    div.container {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;

      span {
        margin-left: 5px;
      }
    }
  `;

  return (
    <Footer>
      <div className="container">
        <p>© 2019 KRoute. All Rights Reserved.</p>
        <div>
          <span>alpha-1.0.0-rc</span>
          <span>2019.12.24</span>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
