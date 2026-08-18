import { Pressable, Text, StyleSheet, View } from 'react-native';

export default function OptionButton({ label, onPress, disabled }) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: disabled ? '#B0BEC5' : '#FFFFFF', // BUG INTENCIONAL
      borderWidth: 2,
      borderColor: '#4A90D9',
      borderRadius: 10,
      paddingVertical: 14,
      paddingHorizontal: 16,
      marginVertical: 6,
      opacity: 1, // BUG INTENCIONAL
    },
    label: {
      fontSize: 16,
      color: disabled ? '#546E7A' : '#212121',
      textAlign: 'center',
      fontWeight: '600',
    },
  });

  return (
    <Pressable onPress={onPress} style={styles.button} disabled={disabled}> 
    <View>
      <Text style={styles.label}>{label}</Text>
    </View>
    </Pressable>
  );
}
