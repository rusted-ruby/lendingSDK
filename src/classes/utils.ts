import { 
  Connection, 
  sendAndConfirmTransaction, 
  Transaction,
  Keypair,
  Signer,
} from "@solana/web3.js";
import { USER_PK, USER_SK } from "./constants";

//customized function built to send and sign transactions on solana. Need to pass this
//as a parameter to the sendTransactions function in the solendAction class in action.ts
export const sendTransaction = async (
  tx: Transaction,
  connection: Connection
): Promise<string> => {
  //how to send transactions using regular solana...
  try {
    const sig = await sendAndConfirmTransaction(connection, tx, [getKeypair()])
    return sig
  } catch(err) {
    console.log("error:" + JSON.stringify(err))
    return JSON.stringify(err)
  }
}

export const getKeypair = () =>
  new Keypair({
    publicKey: USER_PK.toBytes(),
    secretKey: USER_SK,
  });