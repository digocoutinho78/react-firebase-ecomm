import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './bottom-tabs-routes'
import TesteRotas from '../screens/Teste-Rotas';

const { Navigator, Screen} = createStackNavigator();

export default Stack = () => {

  return(
    <Navigator> 
      <Screen name='Tela-Incial' component={TesteRotas}/>
  
      {/* Screen tabs dentro de stack para termos a mudança de tipo de navegação quando entrar no app */}
      <Screen name='Tabs'  component={Tabs}/>
    </Navigator>
  )
}

