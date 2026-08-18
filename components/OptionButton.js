import { Pressable, Text, StyleSheet } from 'react-native';

export default function OptionButton({ label, onPress, disabled }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        disabled && styles.buttonDisabled,
        pressed && !disabled && styles.buttonPressed,
      ]}
    >
      <Text
        style={[
          styles.label,
          disabled && styles.labelDisabled,
        ]}
      >
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

  buttonDisabled: {
    backgroundColor: '#B0BEC5',
    opacity: 0.6,
  },

  buttonPressed: {
    backgroundColor: '#E3F2FD',
  },

  label: {
    fontSize: 16,
    color: '#212121',
    textAlign: 'center',
    fontWeight: '600',
  },

  labelDisabled: {
    color: '#546E7A',
  },
});