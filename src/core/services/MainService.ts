import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
import {LightTheme} from '../../mobile/mobile-ui/themes';

export class MainService {
  entireScreenHeight = Dimensions.get('window').height;
  entireScreenWidth = Dimensions.get('window').width;

  constructor() {
    this.initializePrimaryTheme();
  }

  initializePrimaryTheme() {
    if (this.entireScreenWidth > this.entireScreenHeight) {
      EStyleSheet.build({$rem: this.entireScreenHeight / 401, ...LightTheme});
    } else {
      EStyleSheet.build({$rem: this.entireScreenWidth / 401, ...LightTheme});
    }
  }
}
