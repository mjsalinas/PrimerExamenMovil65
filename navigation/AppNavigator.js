import { createStackNavigator } from '@react-navigation/stack';
import GameScreen from '../screens/GameScreen';
import ResultScreen from '../screens/ResultScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="GameScreen"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GameScreen" component={GameScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
    </Stack.Navigator>
  );
}
