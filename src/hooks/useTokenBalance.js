import BigNumber from 'bignumber.js'
import React, { useState, useEffect, useCallback } from 'react'
import { getBalance } from '../utils/erc20.util'
import { useWallet } from 'use-wallet'

function useTokenBalance(tokenAddress) {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account, ethereum } = useWallet()

  const fetchBalance = useCallback(async () => {
    const balance = await getBalance(ethereum, tokenAddress, account)
    setBalance(balance)
  }, [setBalance, tokenAddress, ethereum, account])

  useEffect(() => {
    fetchBalance()
  }, [fetchBalance])

  return balance
}

export default useTokenBalance
