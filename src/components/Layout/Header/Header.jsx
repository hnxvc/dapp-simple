import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from '../Container'
import styled from 'styled-components'
import AccountButton from '../../AccountButton'

function Header() {
  return (
    <Container>
      <StyledHeader>
        <StyledNav>
          <StyledNavItem exact activeClassName="active" to="/">
            Home
          </StyledNavItem>
          <StyledNavItem exact activeClassName="active" to="/about">
            About
          </StyledNavItem>
        </StyledNav>
        <AccountButton />
      </StyledHeader>
    </Container>
  )
}

const StyledHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`

const StyledNav = styled.nav`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
`

const StyledNavItem = styled(NavLink)`
  color: ${(props) => props.theme.textColor};
  margin-right: 10px;
  text-decoration: none;

  &:hover,
  &.active {
    color: ${(props) => props.theme.hightLightColor};
  }
`

export default Header
