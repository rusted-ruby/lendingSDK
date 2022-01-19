import {SolendAction} from '../action'
import {
  Connection,
  PublicKey,
  clusterApiUrl, 
  SystemProgram,
  Transaction,
  TransactionInstruction,
  TransactionSignature,
} from "@solana/web3.js";
import {USER_PK} from '../constants'
import {sendTransaction} from '../utils'
const express = require('express')
const router = express.Router()

//route code goes here. 

//initialize a market
router.get('/initDeposit', async (req: any, res: any) => {
  const conn = new Connection(clusterApiUrl('devnet'), 'confirmed');
  try {
    //build instructions for a deposit transaction
    const depositAction = await SolendAction.buildDepositTxns(
      conn,
      "5000",
      "USDC",
      USER_PK,
      "devnet"
    )

    //send the transaction to the blockchain. 
    const tx = new Transaction()

    const sig = await depositAction.sendTransactions(sendTransaction)
    console.log("signature", sig)
    res.json(sig)
  } catch(err: any) {
    res.status(500).json({message: err.message})
  }

})

module.exports = router