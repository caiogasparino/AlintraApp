import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {palette} from '~/utils/colors';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${palette.darkBackground};
  align-items: center;
`;
