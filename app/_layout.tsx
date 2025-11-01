import { Stack } from 'expo-router';
import '../global.css';
import { View } from 'react-native';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
      <Stack.Screen name="/movie[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
