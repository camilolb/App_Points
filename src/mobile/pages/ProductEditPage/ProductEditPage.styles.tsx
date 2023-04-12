import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  container: {flex: 1, backgroundColor: '$white'},
  scrollViewContainer: {
    backgroundColor: '$white',
    marginTop: '$doubleSpace',
  },
  containerMicroForm: {
    margin: '$singleSpace',
  },
  textFieldContainer: {
    marginBottom: 0,
  },
  textFieldContainerError: {
    marginBottom: 0,
  },
  fieldRows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    '@media android': {
      marginBottom: '$heightInput + $heightInput',
    },
  },
  textFieldExpDate: {
    marginBottom: 0,
    width: entireScreenWidth / 2,
  },
  textFieldCVC: {
    marginBottom: 0,
    width: entireScreenWidth / 2.5,
  },
  informationPurchase: {
    marginTop: '$smallSpace',
    marginLeft: '$smallSpace',
    color: '$subtitleLabelGray',
  },
  textInputDesign: {
    color: '#000',
  },
  descriptionContainer: {
    flex: 1,
  },
  titleProductDescription: {
    marginTop: '$singleSpace + $smallSpace',
    marginBottom: '$singleSpace + $middleSpace',
  },
  logoutButtonContainer: {
    backgroundColor: '$white',
  },
  buttonLogout: {
    borderBottomWidth: '.5rem',
    margin: '$doubleSpace',
  },
  imageContainer: {
    width: entireScreenWidth - 40,
    height: '$carrouselImageContainerHeightOpenMarket + $headerHeight',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    shadowColor: '$black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  productDescriptionContainer: {
    margin: '$doubleSpace',
  },
  descriptionPoints: {
    marginTop: '$doubleSpace + $smallSpace',
  },
});

export default styles;
