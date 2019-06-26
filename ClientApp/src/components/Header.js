import React, { useState } from 'react';

import styled from 'styled-components';

export default function Header (props) {

  const Header = styled.header`
    width: 100%;
    height: 5em;
    min-height: 30px;
    box-shadow: -5px 5px 10px -6px #333;
  `;

  const Logo = styled.div`
    background-image: url('assets/logo/hw_logo.svg');
    background-size: contain;
    background-position: center;
    height: 100%;
    width: 20%;
    background-repeat: no-repeat;
    margin: 0;
  `

  return (
    <Header className="header">
      <Logo />
      {/* <NavItems>
      </NavItems>       */}
    </Header>
  );

};