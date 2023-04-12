import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '$transparentWhite',
    borderRadius: '$defaultBorderRadius',
    height: '$heightInput + $middleSpace',
    alignItems: 'center',
    paddingLeft: '25rem',
    paddingRight: '20rem',
    marginTop: '20rem',
  },
  textColor: {
    placeholderTextColor: '$white',
    opacity: 1,
  },
  textField: {
    fontSize: '$fontSizeH3',
    fontWeight: '$fontWeight400',
    flex: 1,
    color: '$black',
  },
  textFieldSearch: {
    flex: 1,
    color: 'rgba(118, 118, 128, 0.9)',
    fontSize: '$fontSizeH3',
    fontWeight: '$fontWeight400',
  },
  containerError: {
    borderColor: '$dangerColor',
    borderWidth: '1rem',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '$middleSpace',
  },
  errorXIcon: {
    marginRight: '$middleSpace',
  },
  errorText: {
    color: '$black',
  },
  searchIcon: {
    marginRight: '$middleSpace',
  },
});

export default styles;
