import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './screens/BottomTabs.navigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
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
