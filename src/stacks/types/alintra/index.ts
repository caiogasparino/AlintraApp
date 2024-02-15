import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  Alintra: undefined;
};

type AlintraScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Alintra'
>;

type AlintraScreenRouteProp = RouteProp<RootStackParamList, 'Alintra'>;

export interface AlintraScreenProps {
  navigation: AlintraScreenNavigationProp | any;
  route: AlintraScreenRouteProp | any;
}
