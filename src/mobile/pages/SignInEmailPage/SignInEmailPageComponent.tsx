import React from 'react';
import styles from './SignInEmailPage.styles';
import {Image, ScrollView, View} from 'react-native';
import {Images} from '../../mobile-ui/assets/images';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFormikContext} from 'formik';
import {SignInEmailFormProps} from './SignInEmailPagePresenter';
import {Button, Label, TextField} from '../../mobile-ui';

type Props = {
  toggleDesign: () => void;
};

export function SignInEmailPageComponent({toggleDesign}: Props) {
  const {values, handleChange, handleSubmit, handleBlur, errors} =
    useFormikContext<SignInEmailFormProps>();

  return (
    <>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <SafeAreaView edges={['top']}>
            <View style={styles.logoContainer}>
              <Image source={Images.logoNegro} style={styles.logo} />
            </View>
            <View style={styles.descriptionContainer}>
              <Label type={'h2'} fontWeight={'600'} color={'white'}>
                Enter your credentials
              </Label>
            </View>
            <TextField
              textContentType={'emailAddress'}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
              autoComplete={'email'}
              hasError={!!errors.email}
              error={errors.email}
              placeholder={'Email'}
              containerStyle={styles.textInput}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <TextField
              textContentType={'password'}
              autoComplete={'password'}
              autoCapitalize={'none'}
              hasError={!!errors.password}
              error={errors.password}
              isPassword
              placeholder={'Password'}
              containerStyle={styles.textInput}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <Button label={'Log In'} onPress={handleSubmit} />
          </SafeAreaView>
        </ScrollView>
      </View>
    </>
  );
}
