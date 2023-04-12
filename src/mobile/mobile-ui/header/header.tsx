import React from 'react';
import {Animated, Text} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import HeaderTitle from '@react-navigation/elements/src/Header/HeaderTitle';
import styles from './header.styles';
import BackButton from '../back-button/back-button';
import {initialWindowMetrics} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {AnyStyle} from 'react-native-extended-stylesheet';

function HeaderWrapper({
  style,
  isColor,
  isSecondColor,
  children,
  opacity,
}: {
  style: (false | AnyStyle | undefined)[];
  isColor?: boolean;
  isSecondColor?: boolean;
  children: React.ReactNode;
  opacity?: Animated.Value | number;
}) {
  if (isColor || isSecondColor) {
    return (
      <LinearGradient
        angle={90}
        colors={isSecondColor ? ['#33D7C4', '#6515D1'] : ['#37C6C0', '#4584B3']}
        pointerEvents={'box-none'}
        style={style}
        useAngle={true}>
        {children}
      </LinearGradient>
    );
  }

  return (
    <Animated.View
      pointerEvents={'box-none'}
      style={[
        style,
        {
          opacity,
        },
      ]}>
      {children}
    </Animated.View>
  );
}

export function Header({
  options,
}: {
  options: {
    headerTitle?: string | ((props: {children: string}) => React.ReactNode);
    title?: string;
    titleCenter?: boolean;
    showGoBackButton?: boolean;
    headerRight?: () => React.ReactNode;
    headerLeft?: () => React.ReactNode;
    borderBottom?: boolean;
    blackHeader?: boolean;
    blueHeader?: boolean;
    colorHeader?: boolean;
    secondColor?: boolean;
    bigBackButton?: boolean;
    transparentBackButton?: boolean;
    blurHeader?: boolean;
    onlyArrow?: boolean;
    arrowBgWhite?: boolean;
    arrowBgGrey?: boolean;
    noRadius?: boolean;
    opacity?: Animated.Value | number;
  };
}) {
  const insets = initialWindowMetrics?.insets || {
    top: 0,
    left: 0,
    right: 0,
  };
  const navigation = useNavigation<NavigationProp<any>>();
  const {
    headerTitle: customTitle,
    title,
    showGoBackButton,
    headerRight,
    headerLeft,
    borderBottom,
    colorHeader,
    blackHeader,
    bigBackButton,
    transparentBackButton,
    secondColor,
    blurHeader,
    onlyArrow,
    arrowBgWhite,
    arrowBgGrey,
    noRadius,
    blueHeader,
  } = options;
  const headerTitle =
    typeof customTitle !== 'function'
      ? (props: React.ComponentProps<typeof HeaderTitle>) => (
          <Text style={[styles.title, blackHeader && styles.titleBlack]}>
            {props.children}
          </Text>
        )
      : customTitle;

  return (
    <HeaderWrapper
      isColor={colorHeader}
      isSecondColor={secondColor}
      opacity={options.opacity}
      style={[
        blurHeader ? styles.containerBlackBlur : styles.container,
        {paddingTop: insets.top},
        blueHeader && styles.containerBlue,
        blackHeader && styles.containerBlack,
        borderBottom && styles.withBorderBottom,
        blackHeader && styles.withBorderBottomWhite,
        secondColor && styles.containerSecondColors,
        noRadius && styles.containerNoBorderRadius,
      ]}>
      <Animated.View pointerEvents="box-none" style={styles.content}>
        <Animated.View
          pointerEvents="box-none"
          style={[styles.left, styles.expand, {marginStart: insets.left}]}>
          {showGoBackButton ? (
            <BackButton
              arrowBgGrey={arrowBgGrey}
              arrowBgWhite={arrowBgWhite}
              bordered={(blackHeader || bigBackButton) && !onlyArrow}
              navigation={navigation}
              onlyArrow={onlyArrow}
              transparent={transparentBackButton}
            />
          ) : headerLeft ? (
            headerLeft()
          ) : null}
        </Animated.View>
        <Animated.View pointerEvents="box-none" style={styles.titleContainer}>
          {headerTitle({
            children: title || '',
          })}
        </Animated.View>
        <Animated.View
          pointerEvents="box-none"
          style={[styles.right, styles.expand, {marginEnd: insets.right}]}>
          {headerRight && headerRight()}
        </Animated.View>
      </Animated.View>
    </HeaderWrapper>
  );
}

export default Header;
