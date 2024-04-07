import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StyleSheet, Text, View } from "react-native";
import { DependenciesProvider } from "./src/hooks/dependencies.hook";
import { BreweriesScreen } from "./src/features/breweries/ui/screens/breweries.screen";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DependenciesProvider>
        <BreweriesScreen />
      </DependenciesProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
