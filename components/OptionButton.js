import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function OptionButton({ label, onPress, disabled }) {

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled} 
      style={({ pressed }) => [
        styles.button,
        disabled && styles.disabledButton, 
        pressed && !disabled && styles.pressedButton,
      ]}
    >
      <Text style={[styles.label, disabled && styles.disabledLabel]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF', 
    borderWidth: 2,
    borderColor: '#4A90D9', 
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginVertical: 6,
  },
  pressedButton: {
    backgroundColor: '#E3F2FD', 
  },
  disabledButton: {
    backgroundColor: '#B0BEC5',
    opacity: 0.6, 
  },
  label: {
    fontSize: 16,
    color: '#212121',
    textAlign: 'center', 
    fontWeight: '600',
  },
  disabledLabel: {
    color: '#546E7A', 
  },
});

  const styles = StyleSheet.create({
    button: {
      backgroundColor: disabled ? '#B0BEC5' : '#FFFFFF',
      borderWidth: 2,
      borderColor: '#4A90D9',
      borderRadius: 10,
      paddingVertical: 14,
      paddingHorizontal: 16,
      marginVertical: 6,
      opacity: disabled ? 0.6 : 1,
    },
    label: {
      fontSize: 16,
      color: disabled ? '#546E7A' : '#212121',
      textAlign: 'center',
      fontWeight: '600',
    },
  });

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        pressed && !disabled && { backgroundColor: '#E3F2FD' },
      ]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );

