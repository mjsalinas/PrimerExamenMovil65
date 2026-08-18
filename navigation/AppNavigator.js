import { createNativeStackNavigator } from '@react-navigation/native';
import GameScreen from '../screens/GameScreen';
import ResultScreen from '../screens/ResultScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator> {/* BUG INTENCIONAL */}
      <Stack.Screen name="GameScreen" component={GameScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
    </Stack.Navigator>
  );
}
