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
    placeholderTextColor: 'silver',
    opacity: 1,
  },
  textField: {
    fontSize: '$fontSizeH3',
    fontWeight: '$fontWeight500',
    flex: 1,
    color: '$white',
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
    color: '$red',
    fontWeight: 'bold',
  },
  searchIcon: {
    marginRight: '$middleSpace',
  },
});

export default styles;
