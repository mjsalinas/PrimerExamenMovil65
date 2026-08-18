import { Pressable, Text, StyleSheet } from 'react-native';

export default function OptionButton({ label, onPress, disabled }) {
  const baseStyles = StyleSheet.create({
    button: {
      backgroundColor: '#FFFFFF',
      borderWidth: 2,
      borderColor: '#4A90D9',
      borderRadius: 10,
      paddingVertical: 14,
      paddingHorizontal: 16,
      marginVertical: 6,
    },
    label: {
      fontSize: 16,
      textAlign: 'center',
      fontWeight: '600',
    },
    disabled: {
      backgroundColor: '#B0BEC5',
      opacity: 0.6,
    },
    pressed: {
      backgroundColor: '#E3F2FD',
    },
  });

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      style={({ pressed }) => [
        baseStyles.button,
        disabled && baseStyles.disabled,
        pressed && !disabled && baseStyles.pressed,
      ]}
    >
      <Text style={[baseStyles.label, { color: disabled ? '#546E7A' : '#212121' }]}>{label}</Text>
    </Pressable>
  );
}
