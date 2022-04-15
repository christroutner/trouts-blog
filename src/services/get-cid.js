/*
  This service file contains functions for retrieving an IPFS hash from the
  BCH blockchain, in a fasion similar to PS001:
  https://github.com/Permissionless-Software-Foundation/specifications/blob/master/ps001-media-sharing.md
*/

// const BchWallet = require('minimal-slp-wallet')
// const BchMessage = require('bch-message-lib')

class Fake {}

const BchWallet = typeof window !== 'undefined' ? window.SlpWallet : Fake
const BchMessage = typeof window !== 'undefined' ? window.BchMessage : Fake

class Memo {
  constructor(config) {
    // Throw an error if this class is instantiated without passing a BCH address.
    if (!config || !config.bchAddr)
      throw new Error(`Must pass a BCH address to Memo constructor.`)
    else this.bchAddr = config.bchAddr

    this.wallet = new BchWallet(undefined, {
      interface: 'consumer-api',
    })
    this.bchjs = this.wallet.bchjs

    this.bchMessage = new BchMessage({ wallet: this.wallet })
  }

  // Walk the transactions associated with an address until a proper IPFS hash is
  // found. If one is not found, will return false.
  async findHash() {
    try {
      console.log(`finding latest IPFS hash for address: ${this.bchAddr}...`)

      const txs = await this.bchMessage.memo.memoRead(
        this.bchAddr,
        'IPFS UPDATE'
      )
      console.log(`txs: ${JSON.stringify(txs, null, 2)}`)

      // If the array is empty, then return false.
      if (txs.length === 0) return false

      const hash = txs[0].subject

      console.log(`...found this IPFS hash: ${hash}`)

      // The transactions should automatically be sorted by the bchMessage
      // library. So Just return the subject.
      return hash
    } catch (err) {
      console.warn(`Could not find IPFS hash in transaction history.`)
      return false
    }
  }
}

export default Memo
