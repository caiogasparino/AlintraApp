import React from 'react';
import {StatusBar} from 'react-native'; // Import View from react-native
import {palette} from '~/utils/colors';
import {Container, Webview} from './styles';
import {AlintraScreenProps} from '~/stacks/types';

export const Alintra = ({}: AlintraScreenProps) => {
  return (
    <Container>
      <StatusBar backgroundColor={palette.darkBar} />
      <Webview source={{uri: 'https://allintra.com/pt-BR'}} />
    </Container>
  );
};
