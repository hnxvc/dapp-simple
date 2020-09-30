import React from 'react'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './views/Home'
import About from './views/About'
import { Router } from '@reach/router'
import './App.css'
import styled from 'styled-components'
import CustomThemeProvider from './contexts/CustomThemeProvider'
import ModalProvider from './contexts/ModalProvider'
import { UseWalletProvider } from 'use-wallet'

function App() {
  return (
    <StyledApp>
      <Header />
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
      <Footer />
    </StyledApp>
  )
}

const WrapApp = () => {
  return (
      <UseWalletProvider
        chainId={1}
        connectors={{
          walletconnect: { rpcUrl: 'https://mainnet.eth.aragon.network/' },
        }}
      >
        <CustomThemeProvider>
            <ModalProvider>
              <App />
            </ModalProvider>
        </CustomThemeProvider>
      </UseWalletProvider>
  )
}

// Style
const StyledApp = styled.section`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  min-height: 100vh;
`
export default WrapApp
