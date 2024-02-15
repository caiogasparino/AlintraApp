import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {palette} from '~/utils/colors';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${palette.darkBackground};
  align-items: center;
`;

export const styles = StyleSheet.create({
  header: {
    marginTop: 20,
  },
  footer: {
    marginBottom: 20,
  },
});
