import { Redirect, Slot } from 'expo-router';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AppLayout() {
  const loading = false;
  const isLoggedIn = true;

  if (false) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator className="text-primary-300" size="large" />
      </SafeAreaView>
    );
  }

  if (false) {
    return <Redirect href="/sign-in" />;
  }

  return <Slot />;
}
