import { Pressable, Text, StyleSheet } from 'react-native';

export default function OptionButton({ label, onPress, disabled }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed && !disabled
            ? '#E3F2FD'
            : disabled
            ? '#B0BEC5'
            : '#FFFFFF',

          opacity: disabled ? 0.6 : 1,
        },
      ]}
    >
      <Text
        style={[
          styles.label,
          {
            color: disabled ? '#546E7A' : '#212121',
          },
        ]}
      >
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

  label: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
});