import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {DarkTheme, LightTheme} from '../../mobile/mobile-ui/themes';

export function useChangeTheme() {
  const [shouldRender, setShouldRender] = React.useState(true);
  const toggleTheme = React.useCallback(() => {
    const theme =
      EStyleSheet.value('$theme') === 'light' ? DarkTheme : LightTheme;
    EStyleSheet.build(theme);
    setShouldRender(false);
    setShouldRender(true);
  }, []);

  return {
    shouldRender,
    toggleTheme,
  };
}
