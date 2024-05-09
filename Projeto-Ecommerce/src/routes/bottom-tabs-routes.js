import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabUm from "../screens/TabUm";
import { FontAwesome } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export default Tabs = () => {
  return (
    <Navigator
      screenOptions={{
        // esconder o header
        headerShown: false,
      }}
    >



      <Screen name="Home"
        component={TabUm}
        options={{
          headerShown: false,
          // title: "Início",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }} />

      <Screen name="Tela 1"
        component={TabUm}
        options={{
          headerShown: false,
          // title: "Início",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="tag" color={color} size={size} />
          ),
        }} />
        <Screen name="Tela 2"
        component={TabUm}
        options={{
          headerShown: false,
          // title: "Início",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="globe" color={color} size={size} />
          ),
        }} />
        <Screen name="Tela 3"
        component={TabUm}
        options={{
          headerShown: false,
          // title: "Início",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="users" color={color} size={size} />
          ),
        }} />
    </Navigator>
  );
};
