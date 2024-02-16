import React, {useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';
export default function Lottie() {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();
    animationRef.current?.play(30, 120);
  }, []);

  return <LottieView ref={animationRef} source={{uri: './maintenance.json'}} />;
}
