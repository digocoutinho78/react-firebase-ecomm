import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabUm from "../screens/TabUm";
import { FontAwesome } from "@expo/vector-icons";
import TabDois from "../screens/TabDois";
import AboutScreen from "../screens/AboutScreen";
import Home from "../screens/Home";

const { Navigator, Screen } = createBottomTabNavigator();

export default RotasPrivadas = () => {
  return (
    <Navigator
      screenOptions={{
        // esconder o header
        headerShown: false,
      }}
    >



      <Screen name="Home"
        component={Home}
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
        component={TabDois}
        options={{
          headerShown: false,
          // title: "Início",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="globe" color={color} size={size} />
          ),
        }} />
        <Screen name="Sobre"
        component={AboutScreen}
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
