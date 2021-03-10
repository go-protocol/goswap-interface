import { ChainId, JSBI, Percent, Token, WETH } from 'goswap-sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'

import { fortmatic, injected, portis, walletconnect, walletlink } from '../connectors'

export const ROUTER_ADDRESS: { [chainId in ChainId]?: string } =  {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '0xd184b42c7f8d805DccB23BD986a4A53aB72D43b2',
  [ChainId.HECOMAIN]: '0xB88040A237F8556Cf63E305a06238409B3CAE7dC',
  [ChainId.HECOTEST]: '0xca8e585a44375fab1bf6ad50887a770d06f0e32e',
  [ChainId.BIANMAIN]: '0xB88040A237F8556Cf63E305a06238409B3CAE7dC',
  [ChainId.BIANTEST]: '0xB88040A237F8556Cf63E305a06238409B3CAE7dC',
  [ChainId.OKTEST]: '0x7f6c436f47049f2dbd34fd208b14492259a1d8af'
}

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin')
export const USDC = new Token(ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD//C')
export const USDT = new Token(ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD')
export const COMP = new Token(ChainId.MAINNET, '0xc00e94Cb662C3520282E6f5717214004A7f26888', 18, 'COMP', 'Compound')
export const MKR = new Token(ChainId.MAINNET, '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2', 18, 'MKR', 'Maker')
export const AMPL = new Token(ChainId.MAINNET, '0xD46bA6D942050d489DBd938a2C909A5d5039A161', 9, 'AMPL', 'Ampleforth')
export const WBTC = new Token(ChainId.MAINNET, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 18, 'WBTC', 'Wrapped BTC')

// TODO this is only approximate, it's actually based on blocks
export const PROPOSAL_LENGTH_IN_DAYS = 7

export const GOVERNANCE_ADDRESS = '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'

const UNI_ADDRESS = '0xc7fD9aE2cf8542D71186877e21107E1F3A0b55ef'
export const UNI: { [chainId in ChainId]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.BIANMAIN]: new Token(
    ChainId.BIANMAIN,
    '0x12e2fcfA079Fc23aE82Ab82707b402410321103f',
    18,
    'BEST',
    'Unisave'
  ),
  [ChainId.BIANTEST]: new Token(
    ChainId.BIANTEST,
    '0x12e2fcfA079Fc23aE82Ab82707b402410321103f',
    18,
    'BEST',
    'Unisave'
  ),
  [ChainId.HECOMAIN]: new Token(
    ChainId.HECOMAIN,
    '0xbbEeF58A63aeb9D5BC5e5792A20B81e0DE83fD14',
    10,
    'HT',
    'Unisave'
  ),
  [ChainId.HECOTEST]: new Token(
    ChainId.HECOTEST,
    '0x50b29a42c9e4d0f940292c386207f492458ee358',
    10,
    'HT',
    'Unisave'
  ),
  [ChainId.OKTEST]: new Token(
    ChainId.OKTEST,
    '0x50b29a42c9e4d0f940292c386207f492458ee358',
    10,
    'HT',
    'Unisave'
  )
}

// TODO: specify merkle distributor for mainnet
export const MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e'
}

export const B_DAI = new Token(
  ChainId.BIANMAIN,
  '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
  18,
  'DAI',
  'Dai Token'
)
export const BUSD = new Token(
  ChainId.BIANMAIN,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'BUSD Token'
)
export const B_USDT = new Token(
  ChainId.BIANMAIN,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'Tether USD'
)

export const T_DAI = new Token(
  ChainId.BIANTEST,
  '0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867',
  18,
  'DAI',
  'Dai Token'
)
export const T_BUSD = new Token(
  ChainId.BIANTEST,
  '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
  6,
  'BUSD',
  'BUSD Token'
)
export const T_USDT = new Token(
  ChainId.BIANTEST,
  '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd',
  6,
  'USDT',
  'Tether USD'
)
export const TESTGOT = new Token(
  ChainId.HECOTEST,
  '0xA7d5b5Dbc29ddef9871333AD2295B2E7D6F12391',
  18,
  'GOT',
  'GoSwap Token'
)
export const TESTGOC = new Token(
  ChainId.HECOTEST,
  '0x271B54EBe36005A7296894F819D626161C44825C',
  18,
  'GOC',
  'GoCash'
)
export const TESTGOS = new Token(
  ChainId.HECOTEST,
  '0x36b29B53c483bd00978D40126E614bb7e45d8354',
  18,
  'GOS',
  'GoCash Share'
)

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.ROPSTEN]: [WETH[ChainId.ROPSTEN]],
  [ChainId.RINKEBY]: [WETH[ChainId.RINKEBY]],
  [ChainId.GÖRLI]: [WETH[ChainId.GÖRLI]],
  [ChainId.KOVAN]: [WETH[ChainId.KOVAN]],
  [ChainId.BIANMAIN]: [WETH[ChainId.BIANMAIN]],
  [ChainId.BIANTEST]: [WETH[ChainId.BIANTEST]],
  [ChainId.HECOMAIN]: [WETH[ChainId.HECOMAIN]],
  [ChainId.HECOTEST]: [WETH[ChainId.HECOTEST]],
  [ChainId.OKTEST]: [WETH[ChainId.OKTEST]]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, USDC, USDT, COMP, MKR],
  [ChainId.BIANMAIN]: [...WETH_ONLY[ChainId.BIANMAIN], B_DAI, BUSD, B_USDT]
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {
    [AMPL.address]: [DAI, WETH[ChainId.MAINNET]]
  }
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, USDC, USDT],
  [ChainId.BIANMAIN]: [...WETH_ONLY[ChainId.BIANMAIN], B_USDT, BUSD, B_DAI],
  [ChainId.BIANTEST]: [...WETH_ONLY[ChainId.BIANTEST], T_USDT, T_BUSD, T_DAI],
  [ChainId.HECOTEST]: [TESTGOT ,TESTGOC,TESTGOS]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, USDC, USDT],
  [ChainId.BIANMAIN]: [...WETH_ONLY[ChainId.BIANMAIN], B_USDT, BUSD, B_DAI],
  [ChainId.BIANTEST]: [...WETH_ONLY[ChainId.BIANTEST], T_USDT, T_BUSD, T_DAI],
  [ChainId.HECOTEST]: [...WETH_ONLY[ChainId.HECOTEST]],
  [ChainId.HECOMAIN]: [...WETH_ONLY[ChainId.HECOMAIN]],
  [ChainId.OKTEST]: [...WETH_ONLY[ChainId.OKTEST]]
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.HECOMAIN]: [
    [
      new Token(ChainId.HECOMAIN, '0xA7d5b5Dbc29ddef9871333AD2295B2E7D6F12391', 18, 'GOT', 'GoSwap Token'),
      new Token(ChainId.HECOMAIN, '0x271B54EBe36005A7296894F819D626161C44825C', 18, 'GOC', 'GoCash Cash')
      // new Token(ChainId.HECOTEST, '0x0f548051B135fa8f7F6190cb78Fd13eCB544fEE6', 8, 'HUSD', 'Heco USD')
    ]
  ],
  [ChainId.OKTEST]: [
    [
      new Token(ChainId.OKTEST, '0x411c71e1a08b5c3831cafe68a808f00b8ed03188', 18, 'GOT', 'GoSwap Token'),
      new Token(ChainId.OKTEST, '0xC80f4a6DB039e63dbCC4D7286B77AF14D7DB16Df', 18, 'USDK', 'Heco USD')
    ]
  ]
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
    color: '#315CF5'
  },
  COINBASE_LINK: {
    name: 'Open in Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Open in Coinbase Wallet app.',
    href: 'https://go.cb-w.com/mtUDhEZPy1',
    color: '#315CF5',
    mobile: true,
    mobileOnly: true
  },
  FORTMATIC: {
    connector: fortmatic,
    name: 'Fortmatic',
    iconName: 'fortmaticIcon.png',
    description: 'Login using Fortmatic hosted wallet',
    href: null,
    color: '#6748FF',
    mobile: true
  },
  Portis: {
    connector: portis,
    name: 'Portis',
    iconName: 'portisIcon.png',
    description: 'Login using Portis hosted wallet',
    href: null,
    color: '#4A6C9B',
    mobile: true
  }
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much BNB so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
export const BETTER_TRADE_LINK_THRESHOLD = new Percent(JSBI.BigInt(75), JSBI.BigInt(10000))
