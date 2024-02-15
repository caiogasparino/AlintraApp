import React from 'react';
import {StatusBar} from 'react-native';

import {palette} from '~/utils/colors';
import {Container} from './styles';
import {Text} from 'native-base';
import {UserScreenProps} from '~/stacks/types/user';

export const User = ({}: UserScreenProps) => {
  return (
    <Container>
      <StatusBar backgroundColor={palette.darkBar} />
      <Text bold fontSize={40} color={palette.white}>
        User
      </Text>
    </Container>
  );
};
