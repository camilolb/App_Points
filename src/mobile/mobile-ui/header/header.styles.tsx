import EStyleSheet from 'react-native-extended-stylesheet';
import {Platform} from 'react-native';

const styles = EStyleSheet.create({
  blurContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    backgroundColor: 'transparent',
    width: '100%',
    position: 'absolute',
    paddingBottom: '16rem',
    zIndex: 1,
    top: 0,
    right: 0,
    left: 0,
    ...(Platform.OS === 'android' && {
      paddingTop: '43rem',
    }),
  },
  containerBlackBlur: {
    backgroundColor: '$black',
    width: '100%',
    position: 'absolute',
    paddingBottom: '16rem',
    top: 0,
    right: 0,
    left: 0,
    ...(Platform.OS === 'android' && {
      paddingTop: '43rem',
    }),
  },
  containerBlack: {
    backgroundColor: '$black',
    borderBottomEndRadius: '$borderRadiusMedium',
    borderBottomStartRadius: '$borderRadiusMedium',
  },
  containerBlue: {
    backgroundColor: '$blue',
    borderBottomEndRadius: '$borderRadiusMedium',
    borderBottomStartRadius: '$borderRadiusMedium',
  },
  containerNoBorderRadius: {
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
  },
  withBorderBottom: {
    borderBottomColor: '$white',
    borderBottomWidth: '.8rem',
  },
  withBorderBottomWhite: {
    borderBottomColor: '$lightGray',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  titleContainer: {
    marginHorizontal: 16,
    justifyContent: 'center',
  },
  title: {
    color: '$white',
    fontSize: '$fontSizeH2',
    fontWeight: '600',
  },
  titleBlack: {
    color: '$white',
  },
  left: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '16rem',
  },
  right: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: '16rem',
  },
  expand: {
    flexGrow: 1,
    flexBasis: 0,
  },
  containerSecondColors: {
    borderBottomRightRadius: '$defaultBorderRadius * 2',
    borderBottomLeftRadius: '$defaultBorderRadius * 2',
  },
});

export default styles;
