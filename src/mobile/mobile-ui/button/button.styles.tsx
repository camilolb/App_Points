import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: '7rem',
    paddingHorizontal: '$singleSpace',
    height: '52rem',
  },
  containerDisabled: {
    backgroundColor: '$transparentWhiteDark',
  },
  transparentBordered: {
    container: {
      backgroundColor: 'transparent',
      borderColor: '$white',
      borderWidth: '1rem',
    },
    text: {
      color: '$white',
    },
  },
  transparent: {
    container: {
      backgroundColor: 'transparent',
    },
    text: {
      color: '$white',
    },
  },
  black: {
    container: {
      backgroundColor: '$black',
    },
    text: {
      color: '$white',
    },
  },
  blue: {
    container: {
      backgroundColor: '$blueButton',
    },
    text: {
      color: '$white',
    },
  },
  text: {
    color: '$textColor',
    flex: 2,
    fontWeight: '500',
    textAlign: 'center',
    fontSize: '$fontSizeRegular',
  },
});

export default styles;
