import {useEffect, useState} from 'react';

interface FlowItem {
  timestamp: number;
  open: number;
  close: number;
  high: number;
  low: number;
}

export const useFlow = (symbol: string) => {
  const [flowData, setFlowData] = useState<FlowItem[]>([]);

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}usdt@kline_1h`,
    );

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          method: 'SUBSCRIBE',
          params: [`${symbol}usdt@kline_1h`],
          id: 1,
        }),
      );
    };

    ws.onmessage = event => {
      const message = JSON.parse(event.data);

      if (message && message.k) {
        const {t, o, c, h, l} = message.k;
        const newDataPoint = {
          timestamp: t ? t : 0,
          open: parseFloat(o),
          close: parseFloat(c),
          high: parseFloat(h),
          low: parseFloat(l),
        };
        setFlowData(currentData => [...currentData, newDataPoint].slice(-18));
      }
    };

    ws.onerror = error => console.error('WebSocket error:', error);

    return () => ws.close();
  }, [symbol]);

  return {flowData};
};
