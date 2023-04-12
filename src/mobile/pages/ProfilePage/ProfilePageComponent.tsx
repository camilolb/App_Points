import React from 'react';
import {ScrollView, View} from 'react-native';
import {Button, CircleImage, Header, Label} from '../../mobile-ui';
import styles from './ProfilePage.styles';
import {IUserEntity} from '../../../core/domain';

interface Props {
  onHandleEditProfile: () => void;
  userInformation?: IUserEntity;
  onHandleLogout: () => void;
}

export function ProfilePageComponent({
  onHandleEditProfile,
  userInformation,
  onHandleLogout,
}: Props) {
  return (
    <>
      <Header
        options={{
          showGoBackButton: true,
          title: 'Profile',
          titleCenter: true,
          blackHeader: true,
        }}
      />
      <ScrollView style={styles.containerScrollView}>
        <>
          <View style={styles.topContainer}>
            <View style={styles.profileImageContainer}>
              <CircleImage
                imageURL={
                  'https://www.pinclipart.com/picdir/middle/541-5416602_dummy-profile-image-url-clipart.png'
                }
              />
            </View>
            <Label>@{userInformation?.NickName || 'JohnDoe'}</Label>
          </View>
          <View style={styles.containerDescription}>
            <Label
              color={'black'}
              fontWeight={'700'}
              style={styles.titleContainerDescription}
              type={'h4'}>
              {'Email'}
            </Label>
            <Label
              color={'black'}
              fontWeight={'300'}
              style={styles.descriptionContainer}
              type={'h4'}>
              {userInformation?.Email}
            </Label>
          </View>
        </>
      </ScrollView>
      <View style={styles.logoutButtonContainer}>
        <Button
          label={'Logout'}
          type={'black'}
          containerStyles={styles.buttonLogout}
          onPress={onHandleLogout}
        />
      </View>
    </>
  );
}
