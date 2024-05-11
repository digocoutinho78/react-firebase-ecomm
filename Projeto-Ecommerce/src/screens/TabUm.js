import { Text, StyleSheet, FlatList, View } from "react-native";
import { listarProduto } from "../services/produtosService";
import { useEffect, useState } from "react";

//Componente para testar as tabs estão funcionando
export default TabUm = () => {
  const [todosProdutos, setTodosProdutos] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await listarProduto();
      setTodosProdutos(data);
      // console.log(data)
    };
    fetch();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={todosProdutos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#274C77",
  },
  item: {
    backgroundColor: 'white',
    width: '50%',
    height: '50%'
  }
});
