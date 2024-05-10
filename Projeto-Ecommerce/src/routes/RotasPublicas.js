import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './RotasPrivadas'
import TesteRotas from '../screens/Teste-Rotas';
import { Login } from '../screens/Login';

const { Navigator, Screen} = createStackNavigator();

export default RotasPublicas = () => {

  return(
    <Navigator screenOptions={{
      // esconder o header
      headerShown: false,
    }}> 
      <Screen name='Tela-Incial' component={Login}/>
  
      {/* Screen tabs dentro de stack para termos a mudança de tipo de navegação quando entrar no app */}
      <Screen name='Tabs'  component={Tabs}/>
    </Navigator>
  )
}

