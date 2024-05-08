import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabUm from '../screens/TabUm' 

const { Navigator, Screen} = createBottomTabNavigator();

export default Tabs = () => {

  return(
    <Navigator> 
      <Screen name='tela1' component={TabUm}/>
    </Navigator>
  )
}