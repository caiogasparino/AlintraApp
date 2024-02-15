import React from 'react';
import {StatusBar} from 'react-native';
import {palette} from '~/utils/colors';
import {Container} from './styles';
import {Text} from 'native-base';
import {NotificationsScreenProps} from '~/stacks/types';

export const Notifications = ({}: NotificationsScreenProps) => {
  return (
    <Container>
      <StatusBar backgroundColor={palette.darkBar} />
      <Text bold fontSize={40} color={palette.white}>
        Notifications
      </Text>
    </Container>
  );
};
