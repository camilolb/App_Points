import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: 30,
    width: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bordered: {
    borderColor: '$white',
    borderWidth: '1rem',
    borderRadius: '12rem',
    width: '40rem',
    height: '40rem',
  },
  onlyArrow: {
    borderRadius: '12rem',
    width: '40rem',
    height: '40rem',
  },
  arrowBgWhite: {
    borderRadius: '12rem',
    width: '40rem',
    height: '40rem',
    backgroundColor: 'white',
  },
  arrowBgGrey: {
    borderRadius: '12rem',
    width: '40rem',
    height: '40rem',
    backgroundColor: '$gray200',
  },
  transparent: {
    backgroundColor: 'transparent',
  },
});

export default styles;
