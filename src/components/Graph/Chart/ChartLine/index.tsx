import React from 'react';
import {LineChart} from 'react-native-wagmi-charts';
import {useFlow} from '~/hooks/useFlow';
import {Container, getTintColorForCrypto} from '../styles';

interface ChartData {
  timestamp: number;
  value: number;
}

interface Props {
  symbol: string;
}

export const ChartLine = ({symbol}: Props) => {
  const {flowData} = useFlow(symbol);

  const chartData: ChartData[] = flowData.map(dataPoint => ({
    timestamp: dataPoint.timestamp,
    value: dataPoint.close,
  }));

  const color = getTintColorForCrypto('bitcoin');

  const styles = {
    tooltipText: {
      backgroundColor: color,
      borderRadius: 8,
      color: 'black',
      fontSize: 18,
      padding: 4,
    },
  };

  return (
    <Container horizontal>
      {chartData.length >= 2 && (
        <LineChart.Provider data={chartData}>
          <LineChart height={300}>
            <LineChart.Path color={color}>
              <LineChart.HorizontalLine at={{index: 0}} />
            </LineChart.Path>
            <LineChart.CursorCrosshair>
              <LineChart.Tooltip textStyle={styles.tooltipText} />
            </LineChart.CursorCrosshair>
          </LineChart>
        </LineChart.Provider>
      )}
    </Container>
  );
};
