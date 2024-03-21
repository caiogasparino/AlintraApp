import React, {memo} from 'react';

import {Text} from 'native-base';

import {ChartLine} from '~/components/Graph';
import {ChartCandleStick} from '~/components/Graph/Chart/ChartCandleStick';
import {useFlow} from '~/hooks/useFlow';
import {palette} from '~/utils/colors';
import {Container} from './styles';

export const HomeScreen = memo(() => {
  const symbol = 'btc';
  const {flowData} = useFlow(symbol);
  return (
    <Container>
      <Text
        bold
        fontSize={30}
        paddingBottom={6}
        textAlign={'center'}
        color={palette.white}>
        Chart Line
      </Text>
      <ChartLine symbol={symbol} />
      <Text
        bold
        fontSize={30}
        paddingBottom={6}
        textAlign={'center'}
        color={palette.white}>
        Chart Candlestick
      </Text>
      <ChartCandleStick flowData={flowData} />
    </Container>
  );
});
