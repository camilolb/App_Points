import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '$singleSpace',
  },
  itemImage: {
    width: '$imageContainerHeight',
    height: '$imageContainerHeight',
    marginRight: '$middleSpace',
    borderRadius: '$middleSpace',
  },
  itemDetails: {
    flex: 1,
  },
  itemDate: {
    marginTop: '$middleSpace',
  },
  itemPoints: {
    marginLeft: 10,
    marginRight: 15,
  },
  itemArrow: {
    width: 20,
    height: 20,
  },
  arrow: {
    transform: [
      {
        rotate: '180deg',
      },
      {
        scale: 0.9,
      },
    ],
  },
  positivePoints: {
    color: '$green',
  },
  negativePoints: {
    color: '$red',
  },
});

export default styles;
