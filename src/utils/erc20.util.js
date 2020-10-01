import * as ethUtil from 'ethereumjs-util'
import Web3 from 'web3'
import ERC20ABI from '../constants/abi/ERC20.json'

export function hashPersonalMessage(msg) {
  const buffer = Buffer.from(msg)
  const result = ethUtil.hashPersonalMessage(buffer)
  const hash = ethUtil.bufferToHex(result)
  return hash
}

export const personalSign = (provider, string, account) => {
  const web3 = new Web3(provider)
  return web3.eth.personal.sign(string, account)
}

export const sign = (provider, string, account) => {
  const web3 = new Web3(provider)
  const hash = hashPersonalMessage(string)
  return web3.eth.sign(hash, account)
}

export const sendTransaction = (provider, from, to, value, data) => {
  const web3 = new Web3(provider)
  const tx = {
    from,
    to,
    value,
    data,
  }
  return web3.eth.sendTransaction(tx)
}

export const getContract = (provider, address) => {
  const web3 = new Web3(provider)
  const contract = new web3.eth.Contract(ERC20ABI, address)
  return contract
}

export const getAllowance = async (contract, masterChefContract, account) => {
  try {
    const allowance = await contract.methods
      .allowance(account, masterChefContract.options.address)
      .call()
    return allowance
  } catch (e) {
    return '0'
  }
}

export const getBalance = async (provider, tokenAddress, userAddress) => {
  const contract = getContract(provider, tokenAddress)
  try {
    const balance = await contract.methods.balanceOf(userAddress).call()
    return balance
  } catch (e) {
    return '0'
  }
}

export const getTotalSupply = async (provider, tokenAddress) => {
  const contract = getContract(provider, tokenAddress)
  try {
    const totalSubpply = await contract.methods.totalSupply().call()
    return totalSubpply
  } catch (e) {
    return 0
  }
}

export const getTransactions = async (provider, address) => {
  const web3 = new Web3(provider)
  return web3.eth.getTransactionList(address)
}
