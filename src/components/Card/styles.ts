import {Image} from 'react-native';
import styled from 'styled-components/native';

export const CardContainer = styled.View`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const ImageCard = styled(Image)`
  height: 200px;
  resize-mode: cover;
`;
