import React from 'react'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './views/Home'
import About from './views/About'
import './App.css'
import styled from 'styled-components'
import CustomThemeProvider from './contexts/CustomThemeProvider'
import ModalProvider from './contexts/ModalProvider'
import { UseWalletProvider } from 'use-wallet'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <StyledApp>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </StyledApp>
    </Router>
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

  a {
    color: ${(props) => props.theme.textColor};

    &:hover {
      color: ${(props) => props.theme.hightLightColor};
    }
  }
`
export default WrapApp
