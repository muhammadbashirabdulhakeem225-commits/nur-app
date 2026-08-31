import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigation from "./src/navigation";
import { PlayerProvider } from "./src/context/PlayerContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <PlayerProvider>
        <StatusBar style="light" />
        <RootNavigation />
      </PlayerProvider>
    </SafeAreaProvider>
  );
}
