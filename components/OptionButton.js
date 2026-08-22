import { Pressable, Text, StyleSheet } from 'react-native';

export default function OptionButton({ label, onPress, disabled }) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: disabled ? '#E0E0E0' : '#FFFFFF',
      borderWidth: 2,
      borderColor: '#4A90D9',
      borderRadius: 10,
      paddingVertical: 14,
      paddingHorizontal: 16,
      marginVertical: 6,
      opacity: disabled ? 0.5 : 1,
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
        style={styles.button}
    ></Pressable>
  );
}
