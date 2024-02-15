import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

// Define a type for your stack navigator parameters
type RootStackParamList = {
  User: undefined;
};

// Define the navigation prop type for your Home screen component
type UserScreenNavigationProp = StackNavigationProp<RootStackParamList, 'User'>;

// Define the route prop type for your Home screen component
type UserScreenRouteProp = RouteProp<RootStackParamList, 'User'>;

// Combine the navigation and route prop types into one interface for your Home screen props
export interface UserScreenProps {
  navigation: UserScreenNavigationProp | any;
  route: UserScreenRouteProp | any;
}
