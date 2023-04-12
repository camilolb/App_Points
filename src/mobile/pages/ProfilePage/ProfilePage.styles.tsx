import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const entireScreenWidth = Dimensions.get('window').width;
const styles = EStyleSheet.create({
  containerScrollView: {
    backgroundColor: '$white',
  },
  containerDescription: {
    margin: '$doubleSpace',
  },
  titleContainerDescription: {
    marginTop: '$doubleSpace',
    marginBottom: '$singleSpace',
  },
  descriptionContainer: {
    // textAlign: 'center',
  },
  containerSocialNetwork: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '$singleSpace',
  },
  socialNetWork: {
    margin: '$singleSpace',
  },
  containerTeam: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '$tripleSpace',
  },
  containerFounders: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  informationFounder: {
    width: entireScreenWidth / 2,
    alignItems: 'center',
  },
  nameFounder: {
    marginBottom: '$middleSpace',
  },
  imageFounders: {
    maxWidth: entireScreenWidth,
    height: '500rem',
  },
  containerButtonQuestion: {
    margin: '$singleSpace',
    padding: '$doubleSpace',
    backgroundColor: '#F5F3FF',
    borderRadius: '$doubleSpace',
  },
  descriptionQuestion: {
    textAlign: 'center',
    fontSize: '$fontSizeH2',
    marginBottom: '$singleSpace',
  },
  buttonQuestionContainer: {
    backgroundColor: '$black',
    borderRadius: '$defaultBorderRadius',
  },
  buttonQuestion: {
    fontSize: '$fontSizeH1',
    fontWeight: '$fontWeight700',
  },
  containerItemModal: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '$lineSeparator',
    height: '$headerHeight + $middleSpace',
    borderBottomWidth: '1rem',
    paddingBottom: '$doubleSpace',
    textAlign: 'center',
    marginTop: '$singleSpace',
  },
  modalDescription: {
    marginTop: '$middleSpace',
    marginBottom: '$singleSpace',
  },
  lastInfoContact: {
    borderBottomWidth: 0,
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '$headerHeight',
    paddingVertical: '$singleSpace',
    borderBottomWidth: '.5rem',
    borderBottomColor: '$lightGray',
  },
  profileImageContainer: {
    marginBottom: '$singleSpace',
  },
  logoutButtonContainer: {
    backgroundColor: '$white',
  },
  buttonLogout: {
    borderBottomWidth: '.5rem',
    margin: '$doubleSpace',
  },
});
export default styles;
