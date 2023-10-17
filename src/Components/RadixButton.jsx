import React from 'react'
import { RadixDappToolkit, RadixNetwork } from '@radixdlt/radix-dapp-toolkit'

const rdt = RadixDappToolkit({
    dAppDefinitionAddress:
        'account_tdx_e_128uml7z6mqqqtm035t83alawc3jkvap9sxavecs35ud3ct20jxxuhl',
    networkId: RadixNetwork.RCnetV3,
    applicationName: 'Radix Web3 dApp',
    applicationVersion: '1.0.0',
})

function RadixButton() {
    
  
    return (
      <radix-connect-button />
    )
}

export default RadixButton
