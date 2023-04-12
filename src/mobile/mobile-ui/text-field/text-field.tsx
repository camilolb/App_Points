import React from 'react';
import {
  Pressable,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import styles from './textField.styles';

export interface TextFieldProps
  extends Omit<TextInputProps, 'secureTextEntry'> {
  containerStyle?: ViewStyle;
  isPassword?: boolean;
  hasError?: boolean;
  error?: string;
}

export function TextField({
  containerStyle,
  isPassword,
  hasError,
  error,
  ...props
}: TextFieldProps) {
  const [showPassword, setShowPassword] = React.useState(!isPassword || false);
  return (
    <View style={containerStyle}>
      <View style={[styles.container, hasError && styles.containerError]}>
        <TextInput
          {...props}
          secureTextEntry={!showPassword}
          style={styles.textField}
        />
        {isPassword && (
          <Pressable
            onPress={() => {
              setShowPassword(prevState => !prevState);
            }}
          />
        )}
      </View>
      {hasError && (
        <View style={styles.errorContainer}>
          <View style={styles.errorXIcon}></View>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </View>
  );
}

export default TextField;
