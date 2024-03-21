import {useEffect} from 'react';

export const useWSocket = (updateChartData: (data: number) => void) => {
  useEffect(() => {
    const binanceStreamURL = 'wss://stream.binance.com:9443/ws/btcusdt@trade';
    const ws = new WebSocket(binanceStreamURL);

    ws.onopen = () => console.log('Connected to Binance WebSocket');
    ws.onmessage = event => {
      const {p} = JSON.parse(event.data);
      updateChartData(parseFloat(p));
    };

    ws.onclose = () => console.log('Disconnected from Binance WebSocket');
    ws.onerror = error => console.error('WebSocket error', error);

    return () => ws.close();
  }, [updateChartData]);
};
