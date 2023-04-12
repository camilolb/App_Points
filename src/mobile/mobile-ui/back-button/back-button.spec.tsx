import BackButton from './back-button';

// Tests that the backbutton component renders with default styles and arrow icon when user can go back. tags: [happy path]
it('test_back_button_renders_with_default_styles', () => {
  const navigation = {canGoBack: jest.fn(() => true)};
  const wrapper = shallow(<BackButton navigation={navigation} />);
  expect(wrapper.find(Pressable)).toHaveLength(1);
  expect(wrapper.find(SimpleArrowIcon)).toHaveLength(1);
  expect(wrapper.find(Pressable).prop('style')).toEqual([styles.container]);
  expect(wrapper.find(SimpleArrowIcon).prop('fill')).toEqual('#ffffff');
});

// Tests that the backbutton component renders with custom styles and arrow icon when user can go back. tags: [happy path]
it('test_back_button_renders_with_custom_styles', () => {
  const navigation = {canGoBack: jest.fn(() => true)};
  const wrapper = shallow(
    <BackButton navigation={navigation} bordered onlyArrow arrowBgWhite />,
  );
  expect(wrapper.find(Pressable)).toHaveLength(1);
  expect(wrapper.find(SimpleArrowIcon)).toHaveLength(1);
  expect(wrapper.find(Pressable).prop('style')).toEqual([
    styles.container,
    styles.bordered,
    styles.onlyArrow,
    styles.arrowBgWhite,
  ]);
  expect(wrapper.find(SimpleArrowIcon).prop('fill')).toEqual('#1570EF');
});

// Tests that the backbutton component is not rendered when user cannot go back. tags: [edge case]
it('test_back_button_not_rendered_when_cannot_go_back', () => {
  const navigation = {canGoBack: jest.fn(() => false)};
  const wrapper = shallow(<BackButton navigation={navigation} />);
  expect(wrapper.type()).toEqual(null);
});
