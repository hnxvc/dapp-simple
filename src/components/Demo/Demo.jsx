import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Common/Button'
import { useWallet } from 'use-wallet'
import AccountButton from '../AccountButton'
import { toast } from 'react-toastify'

import {
  sign,
  personalSign,
  sendTransaction,
  getBalance,
  getTotalSupply,
} from '../../utils/erc20.util'
import { USDT_TOKEN } from '../../constants/tokenAddresses'
import { getDisplayBalance } from '../../utils/common.util'

const SIGN_MESSAGE = 'https://hnx.vc'

function Demo() {
  const { account, ethereum } = useWallet()
  const [result, setResult] = useState('')

  const handleSignMessage = async () => {
    try {
      const result = await sign(ethereum, SIGN_MESSAGE, account)
      setResult(result)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleSignPersonalMessage = async () => {
    try {
      const result = await personalSign(ethereum, SIGN_MESSAGE, account)
      setResult(result)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleGetTotalSupplyEth = async () => {
    try {
      const result = await getTotalSupply(ethereum, USDT_TOKEN)
      setResult(result)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleGetBalance = async () => {
    try {
      const result = await getBalance(ethereum, USDT_TOKEN, account)
      setResult(getDisplayBalance(result))
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleSendTransaction = async () => {
    try {
      console.log('handleSendTransaction')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div>
      {account ? (
        <div>
          <StyledTitle>Actions</StyledTitle>
          <StyledWrapBtn>
            <Button onClick={handleSignMessage}>Sign</Button>
            <Button onClick={handleSignPersonalMessage}>Personal Sign</Button>
            <Button onClick={handleGetTotalSupplyEth}>
              Get Total Supply USDT
            </Button>
            <Button onClick={handleGetBalance}>Get USDT Balance</Button>
            <Button onClick={handleSendTransaction}>SendTransaction</Button>
          </StyledWrapBtn>
          {result && (
            <>
              <StyledTitle>Result</StyledTitle>
              <StyledResult>{result}</StyledResult>
            </>
          )}
        </div>
      ) : (
        <StyledConnectBtn>
          <AccountButton />
        </StyledConnectBtn>
      )}
    </div>
  )
}

const StyledTitle = styled.h2`
  text-align: center;
  margin-top: 5px;
`

const StyledWrapBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  button {
    margin-right: 10px;
  }
`

const StyledConnectBtn = styled.div`
  text-align: center;
`

const StyledResult = styled.div`
  text-align: center;
  word-break: break-word;
`

export default Demo
