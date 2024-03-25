'use client'

import React, {useEffect, useState} from "react";
import {ethers} from 'ethers'

export default function Ethers() {
  const [connectedAddress, setConnectedAddress] = useState('');

  const connectWallet = async () => {
    try {
      // 이더리움 웹3 프로바이더가 제공되는지 확인
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);

        // MetaMask로 로그인 요청
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const address = accounts[0];

        // 연결된 월렛의 정보 업데이트
        setConnectedAddress(address);

        // 웹 애플리케이션에서 추가적인 작업 수행 가능
        // 예: 백엔드 서버로 사용자의 이더리움 주소 전송 등
      } else {
        console.error('Ethereum Web3 provider not found');
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  return (
    <div>
      <h1>Wallet Login Example</h1>
      {connectedAddress ? (
        <p>Connected address: {connectedAddress}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}

