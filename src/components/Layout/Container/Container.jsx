import React from 'react'
import styled from 'styled-components'

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}

const StyledContainer = styled.div`
  max-width: ${(props) => props.theme.maxWidth}px;
  margin: 0 auto;
`

export default Container
