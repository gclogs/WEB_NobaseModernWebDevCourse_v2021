import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, Media } from '../../lib/styleUtil'

const Position = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  width: 100%;
  ${shadow(1)}
`

const Whitebackground = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  height: auto;
`

const HeaderContents = styled.div`
  width: 1200px;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: cetner;

  padding-right: 1rem;
  padding-left: 1rem;
  ${Media.wide`
    wdith: 992px;
  `}

  ${Media.tablet`
    width: 100%
  `}
`;

const Logo = styled.div`
  font-size: 1.4rem;
  letter-spacing: 2px;
  color: ${oc.teal[7]};
  font-famliy: 'Roboto';
`

const Spacer = styled.div`
  flex-grow: 1;
`

const GradientBorder = styled.div`
    height: 3px;
    background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
`;


const Header = ({children}) => {
  return (
    <>
      <Position>
        <Whitebackground>
          <HeaderContents>
            <Logo>HEURM</Logo>
            <Spacer />
            {children}
          </HeaderContents>
        </Whitebackground>
        <GradientBorder />
      </Position>
    </>
  )
}

export default Header;