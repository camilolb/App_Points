import React from 'react';
import {ProfilePageComponent} from './ProfilePageComponent';
import {SessionStorageType, useSession} from '../../../core/frameworks/jotai';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PrivateStackParamList} from '../../Navigation';
import {useUserLogout} from '../../../core/hooks';
import {useLoading} from '../../../core/hooks';
import {useFocusEffect} from '@react-navigation/native';

type NavigationScreenProps = NativeStackScreenProps<
  PrivateStackParamList,
  'ProfilePage'
>;

type Props = NavigationScreenProps;

export function ProfilePagePagePresenter() {
  const {mutateAsync, isLoading} = useUserLogout();
  const [sessionInformation] = useSession();
  const {setLoading} = useLoading();
  const {user} = sessionInformation as SessionStorageType;

  const onHandleEditProfile = () => {
    console.log('TODO');
  };
  const onHandleLogout = () => {
    mutateAsync();
  };
  useFocusEffect(
    React.useCallback(() => {
      setLoading(isLoading);
    }, [isLoading, setLoading]),
  );
  return (
    <ProfilePageComponent
      onHandleEditProfile={onHandleEditProfile}
      userInformation={user}
      onHandleLogout={onHandleLogout}
    />
  );
}
