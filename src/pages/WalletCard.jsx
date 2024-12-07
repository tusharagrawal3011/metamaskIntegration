import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { connectwallet } from '../web3/ethers';


const WalletCard = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const connectwalletHandler = async() => {
        try {
            if (window.ethereum) {
                const address = await connectwallet();
                setDefaultAccount(address);
            } else {
                setErrorMessage("Please Install Metamask!!!");
            }
        } catch (error) {
            console.log(error);
            alert("Something went wrong!");
        }   
    }
    return (
        <div className="WalletCard" style={{display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column', marginTop:'30vh'}}>
            <h3 className="h4">
                Connect your wallet!
            </h3>
            <Button
                style={{ background: defaultAccount ? "#A5CC82" : "green" }}
                onClick={connectwalletHandler}>
                {defaultAccount ? "Connected!!" : "Connect"}
            </Button>
            <h3 className="walletAddress">Address:{defaultAccount}</h3>
            {errorMessage}
        </div>
    )
}
export default WalletCard;