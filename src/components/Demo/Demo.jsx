import React, { useState } from 'react'
import styled from 'styled-components';
import Button from '../Common/Button'
import { useWallet } from 'use-wallet'
import AccountButton from '../AccountButton'
import { sign, personalSign, sendTransaction, getBalance, getTotalSupply } from '../../utils/erc20.util'
import {USDT_TOKEN} from '../../constants/tokenAddresses'
import { getDisplayBalance } from '../../utils/common.util'

const SIGN_MESSAGE = 'https://hnx.vc'

function Demo() {
  const { account, ethereum } = useWallet()
  const [result, setResult] = useState('')

  const handleSignMessage = async() => {
    const result = await sign(ethereum, SIGN_MESSAGE, account)
    setResult(result)
  }

  const handleSignPersonalMessage = async() => {
    const result = await personalSign(ethereum, SIGN_MESSAGE, account)
    setResult(result)
  }

  const handleGetTotalSupplyEth = async() => {
    const result = await getTotalSupply(ethereum, USDT_TOKEN)
    setResult(result)
  }

  const handleGetBalance = async() => {
    const result = await getBalance(ethereum, USDT_TOKEN, account);
    setResult(getDisplayBalance(result))
  }

  const handleSendTransaction = async() => {
    console.log('handleSendTransaction')
  }

  return (
    <div>
      {
        account ? 
        <StyledWrapBtn>
          <Button onClick={handleSignMessage}>Sign</Button>
          <Button onClick={handleSignPersonalMessage}>Personal Sign</Button>
          <Button onClick={handleGetTotalSupplyEth}>Get Total Supply USDT</Button>
          <Button onClick={handleGetBalance}>Get USDT Balance</Button>
          <Button onClick={handleSendTransaction}>SendTransaction</Button>
          {result}
        </StyledWrapBtn>
        :
        <AccountButton />
      }
      
    </div>  
    
  )
}

const StyledWrapBtn = styled.div`
  button {
    margin-right: 10px;
  }
`

export default Demo
