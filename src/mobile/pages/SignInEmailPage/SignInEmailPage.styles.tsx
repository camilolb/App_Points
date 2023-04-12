import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const entireScreenHeight = Dimensions.get('window').height;
const entireScreenWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  container: {
    height: entireScreenHeight,
    width: entireScreenWidth,
    justifyContent: 'center',
    paddingHorizontal: '$singleSpace',
    paddingBottom: '$singleSpace',
  },
  scrollView: {
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
    width: '$carrouselImageContainerHeight',
    height: '$carrouselImageContainerHeight',
  },
  textInput: {
    marginBottom: '$singleSpace',
  },
  descriptionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '$singleSpace',
  },
});

export default styles;
