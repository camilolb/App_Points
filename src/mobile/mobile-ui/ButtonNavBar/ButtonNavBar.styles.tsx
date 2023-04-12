import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 56,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButtonFocused: {
    backgroundColor: '#F8F8F8',
  },
  tabButtonText: {
    fontSize: 12,
    color: '#666666',
  },
  tabButtonTextFocused: {
    color: '#333333',
  },
});
export default styles;
