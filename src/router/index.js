import * as React from 'react';
import * as Pages from '../pages';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Navbar} from '../components';

const Tab = createBottomTabNavigator();
const MainTab = () => {
  return (
    <Tab.Navigator tabBar={props => <Navbar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Pages.Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Cart"
        component={Pages.Cart}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Setting"
        component={Pages.Setting}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Pages.Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SettingBanner"
          component={Pages.SettingBanner}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SettingBannerAdd"
          component={Pages.SettingBannerAdd}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SettingProduct"
          component={Pages.SettingProduct}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SettingProductAdd"
          component={Pages.SettingProductAdd}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SettingProductEdit"
          component={Pages.SettingProductEdit}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
