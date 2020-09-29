import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Section from '../../components/Layout/Section'
import Container from '../../components/Layout/Container'

function Home() {
  const themeContext = useContext(ThemeContext)
  console.log(themeContext)
  return (
    <Container>
      <Section>
        <h2>Home</h2>
      </Section>
    </Container>
  )
}

export default Home
