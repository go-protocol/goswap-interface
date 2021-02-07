import { ChainId } from 'goswap-sdk'
import useNetworkType from './useNetworkType'

export const useInfoLink = (chainId?: ChainId): string => {
  const type = useNetworkType(chainId)
  const oldInfoLink = 'https://info.goswap.app/'
  if (!chainId) return oldInfoLink
  // if (type === 'ETH') return 'https://eth-info.goswap.app'
  // if (type === 'BSC') return 'https://bsc-info.goswap.app'
  if (type === 'HECO') return 'https://info.goswap.app'
  return oldInfoLink
}

export default useInfoLink
