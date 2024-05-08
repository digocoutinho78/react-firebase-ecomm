import { NavigationContainer } from "@react-navigation/native"
import Stack from './stack.routes'


//arquivo feito para ter o container de navegação chamando a tela do Stack
export default Routes = () =>{
  return(
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  )

}