import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DiaryScreen } from '../screens/DiaryScreen';
import { DiaryScreen2 } from '../screens/DiaryScreen2';
import { DiaryScreen3 } from '../screens/DiaryScreen3';
import { DiaryScreen4 } from '../screens/DiaryScreen4';
import { DashboardScreen } from '../screens/DashboardScreen';

const Stack = createNativeStackNavigator();

export const DiaryStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Diary1' component={DiaryScreen} />
      <Stack.Screen name='Diary2' component={DiaryScreen2} />
      <Stack.Screen name='Diary3' component={DiaryScreen3} />
      <Stack.Screen name='Diary4' component={DiaryScreen4} />
      <Stack.Screen name='Dashboard' component={DashboardScreen} />
    </Stack.Navigator>
  );
};
