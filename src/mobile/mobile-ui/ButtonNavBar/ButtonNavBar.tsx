import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './ButtonNavBar.styles';

export const ButtonNavBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const labelName =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            style={[styles.tabButton, isFocused && styles.tabButtonFocused]}
            onPress={onPress}>
            <Text
              style={[
                styles.tabButtonText,
                isFocused && styles.tabButtonTextFocused,
              ]}>
              {labelName}
              {/* {labelName || ''} */}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
// export default ButtonNavBar;
