import {Container} from './style';

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Logo} from '~/assets';
import {PreloadScreenProps} from '~/stacks/types';
import {palette} from '~/utils/colors';

export const Preload = ({navigation}: PreloadScreenProps) => {
  useEffect(() => {
    const preload = async () => {
      setTimeout(() => {
        navigation.navigate('BottomTabMenu');
      }, 2000);
    };

    preload();
  }, [navigation]);

  return (
    <Container>
      <StatusBar backgroundColor={palette.darkBar} />
      <Logo width={200} height={200} />
    </Container>
  );
};
