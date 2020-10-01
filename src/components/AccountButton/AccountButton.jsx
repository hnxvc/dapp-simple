import React, { useEffect } from 'react'
import Button from '../../components/Common/Button'
import { useWallet } from 'use-wallet'
import ConnectWalletModal from '../ConnectWalletModal'
import MyAccountModal from '../MyAccountModal'
import useModal from '../../hooks/useModal'
import { formatAddress } from '../../utils/common.util'

function AccountButton() {
  const { account, connect } = useWallet()
  const [handlePresentConnectModal] = useModal(<ConnectWalletModal />)
  const [handlePresentAccountModal] = useModal(<MyAccountModal />)

  useEffect(() => {
    if (localStorage.getItem('connectType') === 'metamask') {
      connect('injected')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {account ? (
        <Button onClick={handlePresentAccountModal}>
          {formatAddress(account)}
        </Button>
      ) : (
        <Button onClick={handlePresentConnectModal}>Connect Wallet</Button>
      )}
    </div>
  )
}

export default AccountButton
