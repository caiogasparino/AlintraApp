import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

// Define a type for your stack navigator parameters
type RootStackParamList = {
  Preload: undefined;
  News: undefined;
};

// Define the navigation prop type for your Preload screen component
type PreloadScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Preload'
>;

// Define the route prop type for your Home screen component
type PreloadScreenRouteProp = RouteProp<RootStackParamList, 'Preload'>;

// Combine the navigation and route prop types into one interface for your Preload screen props
export interface PreloadScreenProps {
  navigation?: PreloadScreenNavigationProp | any;
  route?: PreloadScreenRouteProp | any;
}
