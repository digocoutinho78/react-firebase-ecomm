import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Alert } from 'react-native';
import bgImage from '../../assets/bg-01.png';

export default Reposicao = ({ navigation }) => {
  const [requester, setRequester] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = () => {

    // adiconar try catch
    const date = new Date().toLocaleDateString();
    Alert.alert("Solicitação enviada com sucesso!");
    // Aqui você pode adicionar a lógica para lidar com a submissão do formulário
    console.log(`Solicitante: ${requester}, Produto: ${product}, Data: ${date}, Quantidade: ${quantity}`);
  };

  return (
      <ImageBackground source={bgImage} style={styles.bgImageStyle}> 
    <View style={styles.container}>
      <Text style={styles.title}>PEDIDO DE REPOSIÇÃO DE ESTOQUE</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Solicitante" 
        value={requester}
        onChangeText={setRequester}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Produto" 
        value={product}
        onChangeText={setProduct}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Quantidade de Itens" 
        
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <Button title="Enviar Solicitação" onPress={handleSubmit} />
    </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#E7ECEF",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 2,
    width: 250,
    borderColor: "#A3CEF1",
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 10,
    backgroundColor: "#E7ECEF",
    paddingLeft: 10,
    paddingRight: 10,
  },
  bgImageStyle:{
    alignContent: 'center',
    flex: 1,
    width: "100%",
    justifyContent: 'center'
  }
});
