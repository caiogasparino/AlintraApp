import React from 'react';
import {Container} from '../styles';

import {CandlestickChart} from 'react-native-wagmi-charts';

interface CandleStickData {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface ChartCandleStickProps {
  flowData: CandleStickData[];
}

export const ChartCandleStick: React.FC<ChartCandleStickProps> = ({
  flowData,
}) => {
  return (
    <Container>
      {flowData && flowData.length >= 2 && (
        <CandlestickChart.Provider data={flowData}>
          <CandlestickChart>
            <CandlestickChart.Candles />
            <CandlestickChart.Crosshair>
              <CandlestickChart.Tooltip />
            </CandlestickChart.Crosshair>
          </CandlestickChart>
        </CandlestickChart.Provider>
      )}
    </Container>
  );
};
