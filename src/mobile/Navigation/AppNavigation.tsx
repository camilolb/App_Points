import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PublicStack from './PublicStack';
import PrivateStack from './PrivateStack';
import {
  SessionStorageType,
  useSession,
} from '../../core/frameworks/jotai/atoms';

function AppNavigation() {
  const [sessionInformation] = useSession();
  const {token} = sessionInformation as SessionStorageType;

  return (
    <NavigationContainer>
      {token == null || token === '' ? <PublicStack /> : <PrivateStack />}
    </NavigationContainer>
  );
}

export default AppNavigation;
