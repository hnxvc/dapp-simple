import React from 'react'
import styled from 'styled-components'

function Section({ children }) {
  return <StyledSection>{children}</StyledSection>
}

const StyledSection = styled.section`
  padding: 20px;
  border-radius: ${(props) => props.theme.radius}px;
  background: ${(props) => props.theme.sectionColor};
  margin: 0 auto;
`

export default Section
