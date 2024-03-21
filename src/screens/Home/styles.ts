import {View} from 'react-native';
import styled from 'styled-components/native';
import {palette} from '~/utils/colors';

export const Container = styled(View)`
  padding-top: 60px;
  background-color: ${palette.darkBackground};
  height: 100%;

  flex: 1;
`;
