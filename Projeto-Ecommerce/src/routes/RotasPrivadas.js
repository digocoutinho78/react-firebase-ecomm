// Importando os componentes necessários do React Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import TabUm from "../screens/TabUm";
import DetalhesProduto from '../screens/DetalhesProduto'; // Importando o componente DetalhesProduto
import EditarProduto from '../screens/EditarProduto';
import { FontAwesome } from "@expo/vector-icons";
import TabDois from "../screens/TabDois";
import AboutScreen from "../screens/AboutScreen";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Componente para as telas do Tab Navigator
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        // esconder o header
        headerShown: false,
      }}
      >
      <Tab.Screen name="Lista Produtos"
        component={TabUm}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="list" color={color} size={size} />
          ),
        }} />

      <Tab.Screen name="Cadastrar Novo"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="file" color={color} size={size} />
          ),
        }} />


      <Tab.Screen name="Sobre"
        component={TabDois}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="info" color={color} size={size} />
          ),
        }} />

      <Tab.Screen name="Team"
        component={AboutScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="users" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default RotasPrivadas = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // esconder o header
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="DetalhesProduto" component={DetalhesProduto} />
      <Stack.Screen name="EditarProduto" component={EditarProduto} />
    </Stack.Navigator>
  );
};