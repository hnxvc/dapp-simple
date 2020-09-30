import React, { useContext } from 'react'
import styled from 'styled-components'
import themeConfig from '../../../configs/theme.config'
import { ThemeContext } from '../../../contexts/CustomThemeProvider'

function ThemeControl() {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleChangeTheme = () => {
    if (theme === themeConfig.dark) {
      setTheme(themeConfig.light)
    } else {
      setTheme(themeConfig.dark)
    }
  }

  return (
    <StyledThemeControl>
      <button disabled={theme === themeConfig.dark} onClick={handleChangeTheme}>
        Dark
      </button>{' '}
      /{' '}
      <button
        disabled={theme === themeConfig.light}
        onClick={handleChangeTheme}
      >
        Light
      </button>
    </StyledThemeControl>
  )
}

const StyledThemeControl = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 2;
`

export default ThemeControl
