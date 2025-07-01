'use client'

import { wagmiAdapter, projectId, networks } from '@/config/wagmi'
import { QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react'
import { cookieToInitialState, WagmiProvider } from 'wagmi'
import { getQueryClient } from '@/config/query'

createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: networks,
  metadata: {
    name: 'appkit-example',
    description: 'AppKit Example',
    url: 'https://appkitexampleapp.com',
    icons: ['https://avatars.githubusercontent.com/u/179229932']
  }
})

export function AppkitProvider({ children, cookies }: {
  children: React.ReactNode
  cookies: string | null
}) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig, cookies)
  const queryClient = getQueryClient()

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}