import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './screens/BottomTabs.navigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
