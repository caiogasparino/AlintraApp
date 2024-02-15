import React from 'react';
import {StatusBar} from 'react-native';
import {palette} from '~/utils/colors';
import {Container} from './styles';
import {Text} from 'native-base';
import {SearchScreenProps} from '~/stacks/types';

export const Search = ({}: SearchScreenProps) => {
  return (
    <Container>
      <StatusBar backgroundColor={palette.darkBar} />
      <Text bold fontSize={40} color={palette.white}>
        Search
      </Text>
    </Container>
  );
};
