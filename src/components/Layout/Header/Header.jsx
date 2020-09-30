import React from 'react'
import { Link } from '@reach/router'
import Container from '../Container'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
      <StyledHeader>
        <StyledNav>
          <StyledNavItem to="/">Home</StyledNavItem>
          <StyledNavItem to="/">Home</StyledNavItem>
          <StyledNavItem to="/">Home</StyledNavItem>
        </StyledNav>
      </StyledHeader>
    </Container>
  )
}

const StyledHeader = styled.section`
  display: flex;
  justify-content: space-between;
`

const StyledNav = styled.nav`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
`

const StyledNavItem = styled(Link)`
  color: ${(props) => props.theme.textColor};
  margin-right: 10px;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.hightLightColor};
  }
`

export default Header
