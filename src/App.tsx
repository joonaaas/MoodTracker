import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './screens/BottomTabs.navigator';

export const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};
