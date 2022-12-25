import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home.screen';
import HistoryScreen from './History.screen';
import AnalyticsScreen from './Analytics.screen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
    </Tab.Navigator>
  );
}
