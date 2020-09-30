import React from 'react'
import styled from 'styled-components'

function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

const StyledButton = styled.button`
  border: 2px solid ${(props) => props.theme.hightLightColor};
  border-radius: ${(props) => props.theme.radius}px;
  background-color: ${(props) => props.theme.sectionColor};
  color: ${(props) => props.theme.hightLightColor};
  padding: 10px 12px;
  cursor: pointer;
  outline: none;

  &:hover {
    color: ${(props) => props.theme.hightLightColor};
  }
`

export default Button
