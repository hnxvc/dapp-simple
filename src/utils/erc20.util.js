import * as ethUtil from "ethereumjs-util";
import Web3 from 'web3'

export function hashPersonalMessage(msg) {
  const buffer = Buffer.from(msg);
  const result = ethUtil.hashPersonalMessage(buffer);
  const hash = ethUtil.bufferToHex(result);
  return hash;
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
    data
  }
  return web3.eth.sendTransaction(tx)
}