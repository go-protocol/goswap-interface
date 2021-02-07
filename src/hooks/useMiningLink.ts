import { ChainId } from 'goswap-sdk'
import useNetworkType from './useNetworkType'

export const useMiningLink = (chainId?: ChainId): string => {
  const type = useNetworkType(chainId)
  const oldLink = 'https://cash.goswap.app/#/'
  if (!chainId) return oldLink
  if (type === 'ETH') return 'https://eth-mining.goswap.app'
  if (type === 'BSC') return 'https://bsc-mining.goswap.app'
  if (type === 'HECO') return 'https://cash.goswap.app/#/'
  return oldLink
}

export default useMiningLink
