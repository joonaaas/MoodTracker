import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home.screen';
import HistoryScreen from './History.screen';
import AnalyticsScreen from './Analytics.screen';
import { AnalyticsIcon, HistoryIcon, HomeIcon } from '../components/Icons';
import { theme } from '../theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colorBlue,
        tabBarInactiveTintColor: theme.colorGrey,
        tabBarShowLabel: false,
        headerTitleAlign: 'left',
        headerStyle: {
          shadowColor: '#373739',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({}) => ({
          tabBarIcon: ({ color, size }) => {
            return <HomeIcon size={size} color={color} />;
          },
          title: "Today's Mood",
        })}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={({}) => ({
          tabBarIcon: ({ color, size }) => {
            return <HistoryIcon size={size} color={color} />;
          },
          title: 'Past Moods',
        })}
      />
      <Tab.Screen
        name="Analytics"
        component={AnalyticsScreen}
        options={({}) => ({
          tabBarIcon: ({ color, size }) => {
            return <AnalyticsIcon size={size} color={color} />;
          },
          title: 'Fancy Analytics',
        })}
      />
    </Tab.Navigator>
  );
}
