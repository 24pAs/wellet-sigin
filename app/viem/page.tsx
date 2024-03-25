'use client'

import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'
export default function Viem() {
  const [accounts, setAccounts] = useState<string>();
  const [selectedAccount, setSelectedAccount] = useState('');


  useEffect(() => {
    (async() => {
      if(window.ethereum) {
        const client
          = createWalletClient({
          chain: mainnet,
          transport: custom(window.ethereum!)
        })
        const [address] = await client.getAddresses()
      setAccounts(address)
      }
    })()
  }, []);



  return (
    <div>
      <h2>Wallet Login</h2>
      <span>{accounts}</span>
    </div>
  );
}
