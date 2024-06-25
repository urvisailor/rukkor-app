import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import NewAccount from '../screens/new-account';
import SetupProfile from '../screens/setup-profile';
import RealId from '../screens/realId';
import Logout from '../screens/home/logout';
export type RootStackParamList = {
  Login: undefined;
  NewAccount: undefined;
  SetupProfile: undefined;
  RealId: undefined;
  Logout: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const NavigationApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewAccount"
          component={NewAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SetupProfile"
          component={SetupProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RealId"
          component={RealId}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Logout"
          component={Logout}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationApp;
