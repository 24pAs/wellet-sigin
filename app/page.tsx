'use client'

import React, { useEffect, useState } from 'react';
import Web3 from 'web3';


export default function Home() {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState('');

  useEffect(() => {
    const loadWeb3 = async () => {
      // MetaMask 등의 웹3 지갑이 설치되어 있는지 확인
      console.log('window.ethereum', window.ethereum)
      if (window.ethereum) {
        console.log('12112')
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable(); // 사용자에게 권한 요청
        const accounts = await window.web3.eth.getAccounts(); // 사용자의 지갑 주소 가져오기
        console.log('accounts', accounts)
        setAccounts(accounts);
        setSelectedAccount(accounts[0]); // 첫 번째 계정을 선택
      } else {
        console.log('Please install MetaMask!');
      }
    };

    loadWeb3();
  }, []);

  const handleAccountChange = (e) => {
    setSelectedAccount(e.target.value);
  };

  const handleLogin = () => {
    // 선택된 지갑 주소를 서버로 전송하여 로그인 처리
    console.log('Selected account:', selectedAccount);
    // 여기서 선택된 지갑 주소를 백엔드로 전송하여 로그인 처리를 진행할 수 있습니다.
  };
  return (
    <div>
      <h2>Wallet Login</h2>
      <select value={selectedAccount} onChange={handleAccountChange}>
        {accounts.map(account => (
          <option key={account} value={account}>{account}</option>
        ))}
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
