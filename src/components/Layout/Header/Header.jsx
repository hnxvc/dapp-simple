import React, { useContext } from 'react'
import { Link } from '@reach/router'
import Container from '../Container'
import styled from 'styled-components'
import { ThemeContext } from '../../../contexts/CustomThemeProvider'
import themeConfig from '../../../configs/theme.config'

function Header() {
  const { theme, setTheme } = useContext(ThemeContext)
  const handleChangeTheme = () => {
    if (theme === themeConfig.dark) {
      setTheme(themeConfig.light)
    } else {
      setTheme(themeConfig.dark)
    }
  }

  return (
    <Container>
      <StyledHeader>
        <StyledNav>
          <StyledNavItem to="/">Home</StyledNavItem>
          <StyledNavItem to="/">Home</StyledNavItem>
          <StyledNavItem to="/">Home</StyledNavItem>
        </StyledNav>
        <div>
          <button onClick={handleChangeTheme}>Change theme</button>
        </div>
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
