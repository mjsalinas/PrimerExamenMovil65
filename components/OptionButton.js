import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native' ;

export default function OptionButton ({ title, onPress, disabled }) {
return ( 
  <Pressable
    onPress={onPress}
    disabled={disabled}
    style={({ pressed }) => [
      styles.button,
      pressed && styles.pressed,
      disabled && styles.disabledButton,
    ]}
    >
      <Text style={[styles.text, disabled && styles.disabledText]}>
      {title}
      </Text>
      </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    borderColor: '#4A90D9',
    borderWidth: 3,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginVertical: 6,
    alignItems: 'center'
    justifyContent: 'center',
  },
  pressed: {
    backgroundColor: '#E3F2FD',
  },
  disabledButton: {
    backgroundColor: '#B0BEC5',
    opacity: 0.6,
  },
  text: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
    textAlign: 'center',
  },
  disabledText: {
    color: '#546E7A',
  },
});

