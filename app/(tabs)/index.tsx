import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href="./onboarding"
        className="mt-4 text-lg text-primary bg-accent px-4 py-2 rounded"
      >
        Go to Onboarding
      </Link>
      <Link
        href="./(auth)/sign-in"
        className="mt-4 text-lg text-primary bg-accent px-4 py-2 rounded"
      >
        Go to Sign In
      </Link>
      <Link
        href="./(auth)/sign-up"
        className="mt-4 text-lg text-primary bg-accent px-4 py-2 rounded"
      >
        Go to Sign Up
      </Link>
      <Link
        href="./subscriptions/spotify"
        className="mt-4 text-lg text-primary bg-accent px-4 py-2 rounded"
      >
        Spotify Subscription
      </Link>
      <Link
        href={{
          pathname: "/subsctiptions/[id]",
          params: { id: "claude" },
        }}
        className="mt-4 text-lg text-primary bg-accent px-4 py-2 rounded"
      >
        Claude Max Subscription
      </Link>
    </SafeAreaView>
  );
}
