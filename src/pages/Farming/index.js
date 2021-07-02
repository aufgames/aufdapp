import React, { Component, Suspense } from 'react';
import Web3 from 'web3';
import AufToken from '../../abis/AufToken.json';
import AufFarming from '../../abis/AufFarming.json';
import AufNFT from '../../abis/AufNFT.json';
import Button from 'components/Button';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Input2 from 'components/Input2';
import Stars from 'components/Stars';
import Main from './Main';
import './index.css';

class App extends Component {

 
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
    const isApproved =  false;
  }

  async loadBlockchainData() {
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    const networkId = await web3.eth.net.getId();

    
    // Load AufToken
    const aufTokenData = AufToken.networks[networkId];
    if(aufTokenData) {
      const aufToken = new web3.eth.Contract(AufToken.abi, aufTokenData.address);
      this.setState({ aufToken });
      let aufTokenBalance = await aufToken.methods.balanceOf(this.state.account).call();
      this.setState({ aufTokenBalance: aufTokenBalance.toString() });
    } else {
      window.alert('AufToken contract not deployed to detected network.');
    }

        // Load AufNFT
        const aufNFTData = AufNFT.networks[networkId];
        if(aufNFTData) {
          const aufNFT = new web3.eth.Contract(AufNFT.abi, aufNFTData.address);
          this.setState({ aufNFT });
          let aufNFTBalance = await aufNFT.methods.balanceOf(this.state.account).call();
          this.setState({ aufNFTBalance: aufNFTBalance.toString() });
        } else {
          window.alert('AufNFT contract not deployed to detected network.');
        }

    // Load AufStaking
    const aufFarmingData = AufFarming.networks[networkId];
    if(aufFarmingData) {
      const aufFarming = new web3.eth.Contract(AufFarming.abi, aufFarmingData.address);
      this.setState({ aufFarming });
      let stakingBalance = await aufFarming.methods.stakingBalance(this.state.account).call();
      this.setState({ stakingBalance: stakingBalance.toString() });
    } else {
      window.alert('AufFarming contract not deployed to detected network.');
    }



    this.setState({ loading: false });
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }
  

  stakeTokens = (amount) => {
    this.setState({ loading: true });
      this.state.aufFarming.methods.stakeTokens(amount).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false });
        window.location.reload(); 
   
    });
  }

  async approveTokens() {
   
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    const account_ = accounts[0];
    
    const aufToken = new web3.eth.Contract(AufToken.abi, "0xF841D292c1141cbF1460A1E2010916565a010cc8");
    await aufToken.methods.approve("0xBd7f800B7E54D3f78043A10d53Cc26FC42A3c697", "21000000000000000000000000").send({ from: account_ }).on('transactionHash', (hash) => {

    });
   
  }

  unstakeTokens = () => {
    this.setState({ loading: true });
    this.state.aufFarming.methods.unstakeTokens().send({ from: this.state.account }).on('transactionHash', (hash) => {
      this.setState({ loading: false });
      window.location.reload(); 
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      account: '0x0',
      aufNFT: {},
      aufToken: {},
      aufFarming: {},
      aufNFTBalance: '0',
      aufTokenBalance: '0',
      stakingBalance: '0',
      loading: true
    };
  }

  render() {
    let content;
    let ethaddress1 = this.state.account;
    let toaddress1 = ethaddress1.substr(0, 6) + '...' + ethaddress1.substr(38, 4);
    if(this.state.loading) {
      content = <p id="loader" className="text-center">Loading...</p>;
    } else {
      
      content = <Main
        aufTokenBalance={this.state.aufTokenBalance}
        aufNFTBalance={this.state.aufNFTBalance}
        stakingBalance={this.state.stakingBalance}
        stakeTokens={this.stakeTokens}
        approveTokens={this.approveTokens}
        unstakeTokens={this.unstakeTokens}
        etheraddress1={this.state.account}
      />;
    }

    return (
      <section className="menu">
      <Helmet>
        <title>NFT Farming</title>
        <meta
          name="description"
          content="Blockchain ready recreation of the popular -Among Us- indie game. Powered by Decentralized Finance, non-custodial staking and Farming protocols"
        />
      </Helmet>
  
      <Suspense fallback={null}>
          <Stars />
        </Suspense>

    {/* <p className="menu__version">Balance: {this.state.aufTokenBalance / 1000000000000000000} AMONG </p> */}
   
        
          <div className="menu__content">
          <Input2
              className="menu__username3"
              placeholder={toaddress1}
              pattern=".{1,}"
              style={{ width: '500px' }}
              disabled = {true}
            
            /> 
          {content}
        
       
          </div>
          <Link to="/menu">
          <Button
            className="menu__nav-button"
            // onClick={backMenu}
          >
            back
          </Button>
          </Link>
        
    
    
    </section>
    );
  }
}

export default App;
