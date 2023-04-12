import React from 'react';
import {SignInEmailPageComponent} from './SignInEmailPageComponent';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useChangeTheme, useLoginWithEmail} from '../../../core/hooks';
import {useFocusEffect} from '@react-navigation/native';
import {useLoading} from '../../../core/hooks';

export type SignInEmailFormProps = {
  email: string;
  password: string;
};

const SignInEmailFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('This is not a valid email.')
    .required('Email is required.'),
  password: yup.string().required('Password is required.'),
});

export function SignInEmailPagePresenter() {
  const {mutateAsync, isLoading} = useLoginWithEmail();
  const {setLoading} = useLoading();
  const {toggleTheme} = useChangeTheme();
  const initialValues: SignInEmailFormProps = {
    email: '',
    password: '',
  };
  const onHandleSubmit = async (values: SignInEmailFormProps) => {
    try {
      await mutateAsync({
        username: values.email,
        password: values.password,
      });
    } catch {
      console.log('error');
    }
  };

  const toggleDesign = () => {
    toggleTheme();
  };

  useFocusEffect(
    React.useCallback(() => {
      setLoading(isLoading);
    }, [isLoading, setLoading]),
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInEmailFormSchema}
      onSubmit={onHandleSubmit}>
      <SignInEmailPageComponent toggleDesign={toggleDesign} />
    </Formik>
  );
}
