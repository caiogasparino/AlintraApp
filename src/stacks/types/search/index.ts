import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

// Define a type for your stack navigator parameters
type RootStackParamList = {
  Search: undefined;
};

// Define the navigation prop type for your Home screen component
type SearchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Search'
>;

// Define the route prop type for your Home screen component
type SearchScreenRouteProp = RouteProp<RootStackParamList, 'Search'>;

// Combine the navigation and route prop types into one interface for your Home screen props
export interface SearchScreenProps {
  navigation: SearchScreenNavigationProp | any;
  route: SearchScreenRouteProp | any;
}
