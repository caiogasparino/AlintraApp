import {ScrollView} from 'native-base';
import React from 'react';
import {StatusBar} from 'react-native'; // Import View from react-native
import WebView from 'react-native-webview';
import {coinMarket} from '~/components/Graph/Chart/TrendView';
import {AlintraScreenProps} from '~/stacks/types';
import {palette} from '~/utils/colors';
import {Container} from './styles';

export const Alintra = ({}: AlintraScreenProps) => {
  return (
    <Container>
      <StatusBar backgroundColor={palette.darkBar} />
      <ScrollView contentContainerStyle={styles.webview}>
        <WebView
          originWhitelist={['*']}
          source={{html: coinMarket}}
          allowFileAccessFromFileURLs={true}
          domStorageEnabled={true}
          allowFileAccess={true}
          allowUniversalAccessFromFileURLs={true}
          onShouldStartLoadWithRequest={() => true}
        />
      </ScrollView>
    </Container>
  );
};

const styles = {
  webview: {
    flex: 1,
  },
};
