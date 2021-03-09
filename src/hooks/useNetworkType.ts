import { ChainId } from 'goswap-sdk'

export const useNetworkType = (chainId?: ChainId): 'ETH' | 'BSC' | 'HECO' | 'OKTEST' | null => {
  const ethIds = [ChainId.MAINNET, ChainId.ROPSTEN, ChainId.RINKEBY, ChainId.GÖRLI, ChainId.KOVAN]
  const bscIds = [ChainId.BIANMAIN, ChainId.BIANTEST]
  const hecoIds = [ChainId.BIANMAIN, ChainId.BIANTEST]
  const oktest = [ChainId.BIANMAIN, ChainId.OKTEST]
  if (!chainId) return null
  if (ethIds.includes(chainId)) return 'ETH'
  if (bscIds.includes(chainId)) return 'BSC'
  if (hecoIds.includes(chainId)) return 'HECO'
  if (oktest.includes(chainId)) return 'OKTEST'
  return null
}

export default useNetworkType
