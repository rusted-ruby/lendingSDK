Got a basic webserver working with the Solend SDK

New code is within the `src/classes` directory. The new files are `server.ts`, `utils.ts`, `constant.ts` and the `routes` directory.

First install dependancies with yarn
Set solana config to devnet
Next, fill in the USER_PK and USER_SK values in the `constant.ts` file to your public key string and the uint8 array of your devnet wallet.
Then run the server with ts-node src/classes/server.ts. You should see a "server has started" message appear
In postman (or a similar tool) issue an http get request to http://localhost:3000/transactions/initDeposit to initiate a deposit transaction. 
The transaction should fail because of some blockchain stuff, but we've got the infrastructure now!

big shout out to this video - https://www.youtube.com/watch?v=fgTGADljAeg