import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

// Define a type for your stack navigator parameters
type RootStackParamList = {
  News: undefined;
};

// Define the navigation prop type for your Home screen component
type NewsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'News'>;

// Define the route prop type for your Home screen component
type NewsScreenRouteProp = RouteProp<RootStackParamList, 'News'>;

// Combine the navigation and route prop types into one interface for your Home screen props
export interface NewsScreenProps {
  navigation: NewsScreenNavigationProp | any;
  route: NewsScreenRouteProp | any;
}
