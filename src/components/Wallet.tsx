'use client'

import { useAppKit, useAppKitAccount, useDisconnect, useWalletInfo } from '@reown/appkit/react'

export const Wallet = () => {
  const { open } = useAppKit()
  const { address, isConnected } = useAppKitAccount()
  const { disconnect } = useDisconnect()
  const walletInfo = useWalletInfo()

  const handleDisconnect = async () => {
    try {
      await disconnect()
    } catch (error) {
      console.error("Failed to disconnect:", error)
    }
  }

  return (
    <section>
      <button onClick={() => open()}>Open</button>
      <button disabled={!isConnected} onClick={handleDisconnect}>Disconnect</button>
      <pre>
        Address: {address}<br />
        Connected: {isConnected.toString()}<br />
        WalletName: {walletInfo.walletInfo?.name}
      </pre>
    </section>
  )
}