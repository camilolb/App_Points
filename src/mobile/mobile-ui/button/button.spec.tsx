import Button from './button';

// Tests that the Button component renders with a label and onPress function.
it('test_button_renders_with_label_and_onpress', () => {
  const mockOnPress = jest.fn();
  const {getByText} = render(
    <Button label="Test Button" onPress={mockOnPress} />,
  );
  const button = getByText('Test Button');
  fireEvent.press(button);
  expect(mockOnPress).toHaveBeenCalled();
});

// Tests that the Button component renders with an icon (facebook, google, apple, email, check) and with custom containerStyles and labelStyles.
it('test_button_renders_with_icon_and_custom_styles', () => {
  const {getByTestId} = render(
    <Button
      label="Test Button"
      icon="facebook"
      containerStyles={{backgroundColor: 'red'}}
      labelStyles={{color: 'blue'}}
    />,
  );
  const button = getByTestId('button');
  const icon = getByTestId('icon');
  expect(button).toHaveStyle({backgroundColor: 'red'});
  expect(icon).toBeTruthy();
  expect(icon.props.icon).toBe('facebook');
  expect(icon).toHaveStyle({color: 'blue'});
});

// Tests that the Button component renders with different types (transparentBordered, transparent, black, blue) and with the disabled prop.
it('test_button_renders_with_different_types_and_disabled_prop', () => {
  const {getByTestId} = render(
    <Button label="Test Button" type="transparentBordered" disabled />,
  );
  const button = getByTestId('button');
  expect(button).toHaveStyle({
    backgroundColor: 'transparent',
    borderColor: '$white',
    borderWidth: '1rem',
  });
  expect(button).toBeDisabled();
});
