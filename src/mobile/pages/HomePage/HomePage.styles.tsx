import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginTop: '$headerHeightText',
  },
  headerText: {
    marginTop: '$smallSpace',
  },

  pointsCardContainer: {
    marginTop: '$doubleSpace',
  },
  card: {
    marginTop: '$singleSpace',
    marginLeft: '$doubleSpace + $middleSpace',
    marginRight: '$doubleSpace + $middleSpace',
    paddingTop: '$singleSpace',
    paddingLeft: '$singleSpace',
    paddingRight: '$singleSpace',
    padding: '$doubleSpace + $singleSpace',
    borderRadius: '$singleSpace',
    backgroundColor: '$blue',
    shadowColor: '$black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
  },
  cardTextPoints: {
    textAlign: 'center',
    marginTop: '$singleSpace',
  },
  productsContainer: {
    marginTop: '$singleSpace',
  },
  productListContainer: {
    overflow: 'scroll',
    height: '$containerListProducts',
  },
  productScrollView: {
    marginTop: '$singleSpace',
    padding: '$middleSpace',
    borderRadius: '$middleSpace',
    backgroundColor: '$white',
    shadowColor: '$black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '$doubleSpace',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: '$borderRadiusSmall',
    backgroundColor: '$white',
    alignItems: 'center',
  },
  buttonLabel: {
    fontWeight: '500',
    fontSize: '4rem',
  },
});

export default styles;
