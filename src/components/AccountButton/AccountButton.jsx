import React from 'react'
import Button from '../../components/Common/Button'
import { useWallet } from 'use-wallet'
import ConnectWalletModal from '../ConnectWalletModal'
import MyAccountModal from '../MyAccountModal'
import useModal from '../../hooks/useModal'

function AccountButton() {

  const {account} = useWallet()
  const [handlePresentConnectModal] = useModal(<ConnectWalletModal />)
  const [handlePresentAccountModal] = useModal(<MyAccountModal />)

  return (  
    <div>
      {
        account ?
          <Button onClick={handlePresentAccountModal}>My Wallet {account}</Button>
          :
        <Button onClick={handlePresentConnectModal}>Connect Wallet</Button>
      }
    </div>
  )
}

export default AccountButton
