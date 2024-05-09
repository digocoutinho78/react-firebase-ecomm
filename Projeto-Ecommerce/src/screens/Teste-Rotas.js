import { Button, Text, View } from "react-native"

//Componente que vai ser o stack incial para testar se as rotas estão funcionando
export default ScreenInicial = ({ navigation }) => {
  return(
    <View>
      <Text>TESTE DAS ROTAS</Text>
      <Button title="IR PARA TABS" onPress={() => navigation.navigate('Login')}/>
    </View>
  )
}