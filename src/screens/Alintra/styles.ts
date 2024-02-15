import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import WebView from 'react-native-webview';
import {palette} from '~/utils/colors';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${palette.darkBackground};
`;

export const Webview = styled(WebView)`
  flex: 1;
  background-color: ${palette.darkBackground};
`;
