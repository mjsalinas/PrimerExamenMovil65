import { Pressable, Text, StyleSheet } from 'react-native';

export default function OptionButton({ label, onPress, disabled }) {
  return (
    <Pressable
      disabled={disabled} // BUG INTENCIONAL
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        disabled
          ? styles.buttonDisabled // BUG INTENCIONAL
          : pressed
          ? styles.buttonPressed
          : styles.buttonNormal,
      ]}
    >
      <Text style={[styles.label, disabled && styles.labelDisabled]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: '#4A90D9',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginVertical: 6,
  },
  buttonNormal: {
    backgroundColor: '#FFFFFF',
    opacity: 1,
  },
  buttonPressed: {
    backgroundColor: '#E3F2FD',
    opacity: 1,
  },
  buttonDisabled: {
    backgroundColor: '#B0BEC5',
    opacity: 0.6, // BUG INTENCIONAL
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

