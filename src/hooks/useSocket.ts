// useSocket.ts
import {useEffect, useState} from 'react';
import io, {Socket} from 'socket.io-client';
import {BASE_URL_WEBSOCKET} from '../services/index';

type Message = Object;

const useSocket = (url?: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState({});
  console.log('🚀 ~ useSocket ~ messages:', messages);

  useEffect(() => {
    const newSocket = io(url || BASE_URL_WEBSOCKET);

    newSocket.on('news-topic', (message: {}) => {
      setMessages(message);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = (message: Message) => {
    if (socket) {
      socket.emit('news-topic', message);
    }
  };

  return {messages, sendMessage};
};

export default useSocket;
