import { ScrollView, Text } from "react-native";
import { useBreweriesService } from "../../domains/services/breweries.service";

export const BreweriesScreen = () => {
  const { data: breweries } = useBreweriesService();
  return (
    <ScrollView style={{ flex: 1 }}>
      {breweries?.map((b) => <Text key={b.id}>{b.name}</Text>)}
    </ScrollView>
  );
};
