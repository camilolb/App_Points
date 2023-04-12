import React from 'react';
import styles from './SignInEmailPage.styles';
import {Image, ImageBackground, ScrollView, View} from 'react-native';
import {Images} from '../../mobile-ui/assets/images';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFormikContext} from 'formik';
import {SignInEmailFormProps} from './SignInEmailPagePresenter';
import {Button, Label, TextField} from '../../mobile-ui';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  toggleDesign: () => void;
};

export function SignInEmailPageComponent({toggleDesign}: Props) {
  const {values, handleChange, handleSubmit, handleBlur, errors} =
    useFormikContext<SignInEmailFormProps>();

  return (
    <>
      <ImageBackground
        source={Images.gradientBackground}
        style={styles.container}>
        <LinearGradient
          angle={180}
          colors={['rgba(0, 0, 0, 0.5)', '#000000']}
          end={{x: 0, y: 1}}
          locations={[0, 1]}
          start={{x: 0, y: 0}}
          style={styles.linearGradient}
        />
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
      </ImageBackground>
    </>
  );
}
