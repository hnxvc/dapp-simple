import React from 'react'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './views/Home'
import { Router } from '@reach/router'
import './App.css'
import styled from 'styled-components'
import CustomThemeProvider from './contexts/CustomThemeProvider'
import ModalProvider from './contexts/ModalProvider'

function App() {
  return (
    <StyledApp>
      <Header />
      <Router>
        <Home path="/" />
      </Router>
      <Footer />
    </StyledApp>
  )
}

const WrapApp = () => {
  return (
    <CustomThemeProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </CustomThemeProvider>
  )
}

// Style
const StyledApp = styled.section`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`
export default WrapApp
