import React, { useEffect } from "react";
import { useWallet } from "use-wallet";
import Button from '../../components/Common/Button'
import styled from 'styled-components';
import imgMetamask from '../../assets/img/metamask-fox.svg'
import imgWallet from '../../assets/img/wallet-connect.svg'

function ConnectWalletModal({ onDismiss }) {
  const { connect, account } = useWallet();

  useEffect(() => {
    if (account) {
      onDismiss();
    }
  }, [account, onDismiss]);

  return (
    <StyledWrapModal>
      <StyledTitle>Select a wallet provider.</StyledTitle>
      <StyledWrapCards>
        <StyledCard>
          <img src={imgMetamask} alt="wallet"/>
          <h4>Meta mask</h4>
          <Button onClick={() => connect("injected")}>Connect</Button>
        </StyledCard>
        <StyledCard>
           <img src={imgWallet} alt="wallet"/>
          <h4>Wallet Connect</h4>
          <Button onClick={() => connect("walletconnect")}>Connect</Button>
        </StyledCard>
      </StyledWrapCards>
      <StyledCancel>
        <Button onClick={onDismiss}>Cancel</Button>
      </StyledCancel>
    </StyledWrapModal>
  );
}

const StyledWrapModal = styled.div`
  text-align: center;
`

const StyledTitle = styled.h3`
  text-align: center;
  margin-top: 10px;
`
const StyledWrapCards = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledCard = styled.div`
  border-radius: ${props => props.theme.radius}px;
  border: 1px solid ${props => props.theme.sectionColor};
  flex-basis: 50%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 50px;
  }

  h4 {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  button {
    width: 100%;
  }
`

const StyledCancel = styled.div`
  margin-top: 20px;

  button {
    width: 100%;
  }
`

export default ConnectWalletModal;
