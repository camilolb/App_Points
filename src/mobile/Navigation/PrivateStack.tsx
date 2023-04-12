import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomePagePresenter, ProfilePagePagePresenter} from '../pages';
import {ProductEditPagePresenter} from '../pages/ProductEditPage/ProductEditPagePresenter';
import {ParamListBase} from '@react-navigation/native';
import {NavBarStack, TabStackList} from './TabStack';

export type SubNavigator<T extends ParamListBase> = {
  [K in keyof T]: {screen: K; params?: T[K]};
}[keyof T];

export type PrivateStackParamList = {
  HomePage: undefined;
  ProductEdit: {
    id?: string;
  };
  TabBar: SubNavigator<TabStackList>;
  ProfilePage: undefined;
};

const Stack = createStackNavigator<PrivateStackParamList>();

function PrivateStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomePage">
      {/* <Stack.Screen name={'TabBar'} component={NavBarStack} /> */}
      <Stack.Screen name="HomePage" component={HomePagePresenter} />
      <Stack.Screen name="ProductEdit" component={ProductEditPagePresenter} />
      <Stack.Screen name="ProfilePage" component={ProfilePagePagePresenter} />
    </Stack.Navigator>
  );
}

export default PrivateStack;
