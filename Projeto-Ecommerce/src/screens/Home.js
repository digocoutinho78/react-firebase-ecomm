import { Text, View, StyleSheet } from "react-native"

//Componente para testar as tabs estão funcionando
export default Home = () => {
  return(
    <View style={styles.container}>
      <Text  >Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#274C77",
    
    
  },
});