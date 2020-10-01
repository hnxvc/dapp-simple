import React from 'react'
import Container from '../Container'
import ThemeControl from '../../Common/ThemeControl'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
      <ThemeControl />
      <StyledFooter>@copyright 2020 by Hnx</StyledFooter>
    </Container>
  )
}

const StyledFooter = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: right;
`

export default Footer
