import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  margin-horizontal: 16px;
`;

export const COIN_COLORS: {[key: string]: string} = {
  bitcoin: '#f2a900',
  ethereum: '#3c3c3d',
};

export const COLORS = {
  BRAND: {
    100: '#f00b91',
  },
};

export const getTintColorForCrypto = (cryptoId: string): string => {
  return COIN_COLORS[cryptoId] ?? COLORS.BRAND[100];
};

export const bitcoinColor = getTintColorForCrypto('bitcoin');
export const unknownCryptoColor = getTintColorForCrypto('unknownCrypto');
