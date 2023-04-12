import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const entireScreenWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$lightBlueGrey',
    width: entireScreenWidth,
    height: '$headerHeight + $heightButtonsAndTextInput',
    justifyContent: 'flex-end',
    paddingLeft: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

export default styles;
