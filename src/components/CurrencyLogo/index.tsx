import { Currency, ETHER, Token } from 'goswap-sdk'
import React, { useMemo } from 'react'
import styled from 'styled-components'

import EthereumLogo from '../../assets/images/ethereum-logo.png'
import HecoLogo from '../../assets/images/Heco-logo.png'
import BinanceLogo from '../../assets/images/bnb.svg'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import Logo from '../Logo'
import { useActiveWeb3React } from '../../hooks'

const getTokenLogoURL = (chainId: number | undefined, address: string) => {
  if (chainId === 56 || chainId === 97) return `https://tokens.bscswap.com/images/${address}.png`
  if (chainId === 256) return `https://raw.githubusercontent.com/go-protocol/goswap-tokenlist/main/assets/HECOTEST/${address}.png`
  if (chainId === 128) return `https://raw.githubusercontent.com/go-protocol/goswap-tokenlist/main/assets/HECOMAIN/${address}.png`
  return ''
}

const StyledEthereumLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
`

export default function CurrencyLogo({
  currency,
  size = '24px',
  style
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
  const { chainId } = useActiveWeb3React()
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)

  const srcs: string[] = useMemo(() => {
    if (currency === ETHER) return []

    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, getTokenLogoURL(chainId, currency.address)]
      }

      return [getTokenLogoURL(chainId, currency.address)]
    }
    return []
  }, [currency, uriLocations, chainId])
  if (currency === ETHER) {
    return (
      <StyledEthereumLogo
        src={chainId === 56 || chainId === 97 ? BinanceLogo : chainId === 256 || chainId === 128 ? HecoLogo : EthereumLogo}
        size={size}
        style={style}
      />
    )
  }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
}
