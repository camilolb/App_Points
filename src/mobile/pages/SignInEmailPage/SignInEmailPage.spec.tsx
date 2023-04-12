import {fireEvent, render} from '@testing-library/react-native';
import {Formik} from 'formik';
import {SignInEmailPageComponent} from './SignInEmailPageComponent';
import {SignInEmailPagePresenter} from './SignInEmailPagePresenter';
import React from 'react';

// Tests that the form is submitted successfully with valid email and password inputs. tags: [happy path]
it('test_valid_form_submission', async () => {
  const mockMutateAsync = jest.fn();
  const mockSetLoading = jest.fn();
  const initialValues = {
    email: 'test@test.com',
    password: 'password123',
  };
  const wrapper = render(
    <Formik
      initialValues={initialValues}
      validationSchema={SignInEmailFormSchema}
      onSubmit={jest.fn()}>
      <SignInEmailPageComponent />
    </Formik>,
  );
  const emailInput = wrapper.getByPlaceholderText('Email');
  const passwordInput = wrapper.getByPlaceholderText('Password');
  const submitButton = wrapper.getByText('Log In');
  fireEvent.changeText(emailInput, 'test@test.com');
  fireEvent.changeText(passwordInput, 'password123');
  fireEvent.press(submitButton);
  expect(mockMutateAsync).toHaveBeenCalledWith({
    username: 'test@test.com',
    password: 'password123',
  });
});

// Tests that the form is not submitted with invalid email and/or password inputs and that form validation is working correctly. tags: [edge case]
it('test_invalid_form_submission', async () => {
  const mockMutateAsync = jest.fn();
  const mockSetLoading = jest.fn();
  const initialValues = {
    email: '',
    password: '',
  };
  const wrapper = render(
    <Formik
      initialValues={initialValues}
      validationSchema={SignInEmailFormSchema}
      onSubmit={jest.fn()}>
      <SignInEmailPageComponent />
    </Formik>,
  );
  const emailInput = wrapper.getByPlaceholderText('Email');
  const passwordInput = wrapper.getByPlaceholderText('Password');
  const submitButton = wrapper.getByText('Log In');
  fireEvent.changeText(emailInput, '');
  fireEvent.changeText(passwordInput, '');
  fireEvent.press(submitButton);
  expect(mockMutateAsync).not.toHaveBeenCalled();
  expect(wrapper.queryByText('Email is required.')).not.toBeNull();
  expect(wrapper.queryByText('Password is required.')).not.toBeNull();
});

// Tests that error handling is working correctly for failed login attempts. tags: [edge case]
it('test_error_handling', async () => {
  const mockMutateAsync = jest
    .fn()
    .mockRejectedValue(new Error('Invalid credentials'));
  const mockSetLoading = jest.fn();
  const initialValues = {
    email: 'test@test.com',
    password: 'password123',
  };
  const wrapper = render(
    <Formik
      initialValues={initialValues}
      validationSchema={SignInEmailFormSchema}
      onSubmit={jest.fn()}>
      <SignInEmailPageComponent />
    </Formik>,
  );
  const emailInput = wrapper.getByPlaceholderText('Email');
  const passwordInput = wrapper.getByPlaceholderText('Password');
  const submitButton = wrapper.getByText('Log In');
  fireEvent.changeText(emailInput, 'test@test.com');
  fireEvent.changeText(passwordInput, 'password123');
  fireEvent.press(submitButton);
  await waitFor(() => expect(mockSetLoading).toHaveBeenCalledWith(false));
  expect(wrapper.queryByText('Invalid credentials')).not.toBeNull();
});

// Tests that the loading state is set correctly based on the isloading value. tags: [behavior]
it('test_loading_state', () => {
  const setLoading = jest.fn();
  const isLoading = true;
  const wrapper = mount(<SignInEmailPagePresenter />);
  wrapper.find(Formik).props().children.props.setLoading(isLoading);
  expect(setLoading).toHaveBeenCalledWith(isLoading);
});

// Tests the useloginwithemail hook to ensure it returns the expected values. tags: [other possible issue, mock]
it('test_use_login_with_email_hook', async () => {
  const setSessionInformation = jest.fn();
  const loginWithEmail = jest.fn().mockResolvedValue('token');
  const useMutation = jest.fn().mockReturnValue({mutateAsync: loginWithEmail});
  const useSession = jest.fn().mockReturnValue([null, setSessionInformation]);
  jest.mock('../../../core/hooks', () => ({
    useMutation,
    useSession,
  }));
  const wrapper = mount(<SignInEmailPagePresenter />);
  await wrapper
    .find(Formik)
    .props()
    .children.props.onSubmit({email: 'test@test.com', password: 'password'});
  expect(loginWithEmail).toHaveBeenCalledWith({
    username: 'test@test.com',
    password: 'password',
  });
  expect(setSessionInformation).toHaveBeenCalledWith({token: 'token'});
});

// Tests the useloading hook to ensure it returns the expected values. tags: [other possible issue, mock]
