import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const entireScreenWidth = Dimensions.get('window').width;
const entireScreenHeight = Dimensions.get('window').height;

const styles = EStyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    marginTop: '$headerHeight',
    flexDirection: 'column',
    backgroundColor: '$white',
  },
  scrollViewContainer: {
    margin: '$singleSpace',
  },
  linearGradient: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: entireScreenHeight,
    width: entireScreenWidth,
    position: 'absolute',
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: '$singleSpace',
    paddingBottom: '$singleSpace',
  },
  keyboardAvoiding: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  scrollView: {
    paddingHorizontal: '$singleSpace',
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: '$headerHeight',
    paddingBottom: '$doubleSpace',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '24rem',
  },
  logo: {
    width: '180rem',
  },
  textInput: {
    color: 'white',
    marginBottom: '$singleSpace',
    placeholderTextColor: 'rgba(225,225,225,0.7)',
  },
  descriptionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '72rem',
  },
  forgotPasswordContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '$singleSpace',
    marginTop: '$singleSpace',
  },
});

export default styles;
