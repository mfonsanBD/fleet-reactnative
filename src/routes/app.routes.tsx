import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home/index.';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='Home' component={Home} />
    </Navigator>
  )
}