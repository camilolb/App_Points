import {View} from 'react-native';
import styles from './header-product.styles';
import Label from '../label/label';

export interface Props {
  title?: string;
}
export function HeaderProduct({title}: Props) {
  return (
    <View style={styles.container}>
      <Label style={styles.title} fontWeight={'bold'} type={'h2'}>
        {title}
      </Label>
    </View>
  );
}
