import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Button from '../../components/Common/Button'
import { getDisplayBalance } from '../../utils/common.util'
import { USDT_TOKEN } from '../../constants/tokenAddresses'
import useTokenBalance from '../../hooks/useTokenBalance'

function MyAccountModal({ onDismiss }) {
  const { account, balance, reset } = useWallet()

  const handleSignOut = () => {
    localStorage.removeItem('connectType')
    reset()
  }

  useEffect(() => {
    if (!account) {
      onDismiss()
    }
  }, [account, onDismiss])

  const usdtBalance = useTokenBalance(USDT_TOKEN)

  return (
    <div>
      <StyledTitle>My Account Modal</StyledTitle>
      <StyledBalance>
        <div className="token">ETH:</div>
        <div className="value">{getDisplayBalance(balance)}</div>
      </StyledBalance>
      <StyledBalance>
        <div className="token">USDT:</div>
        <div className="value">{getDisplayBalance(usdtBalance)}</div>
      </StyledBalance>
      <StyledButtons>
        <div className="wrap-btn">
          <Button onClick={handleSignOut}>Sign out</Button>
        </div>
        <div className="wrap-btn">
          <Button onClick={onDismiss}>Cancel</Button>
        </div>
      </StyledButtons>
    </div>
  )
}

const StyledTitle = styled.h3`
  text-align: center;
  margin-top: 0;
`

const StyledBalance = styled.div`
  display: flex;
  border-radius: ${(props) => props.theme.radius}px;
  background: ${(props) => props.theme.sectionColor};
  padding: 15px 15px;
  margin-bottom: 15px;

  .token {
    font-weight: bold;
    margin-right: 5px;
  }

  .value {
  }
`

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: -10px;
  margin-right: -10px;
  margin-top: 30px;

  .wrap-btn {
    padding: 0 10px;
    flex-basis: 50%;

    button {
      width: 100%;
    }
  }
`

export default MyAccountModal
