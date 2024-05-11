import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



const AboutScreen = () => {
  //Obs: Substituam os detalhes do perfil de voces onde já está determinado com os respectivos nomes
  // Substituam com suas fotos, links de github e linkedin e suas respectivas descrições
  return (
    <ScrollView >
      <View style={styles.container}>
      <Image  style={styles.profileImage} />
      <View>
        <Text style={styles.title1}>Jean Pires</Text>
        <Text style={styles.description}>JEAN PIRES. SÓ ISSO</Text>
      </View>
      <View style={styles.linksContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/JeanPiresM')}>
                    <FontAwesome name="github" size={30} color="whitesmoke" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/jean-pires-aa4796279/')}>
                    <FontAwesome name="linkedin" size={30} color="cyan" />
                </TouchableOpacity>
            </View>
      <View>
      <Image  style={styles.profileImage} />
        <Text style={styles.title1}>Miguel Araujo</Text>
        <Text style={styles.description}>Aluno na Faeterj Petrópolis e residente no Serratec/Senac, estagiário na Orange Business Services, tenho 20 anos e busco desenvolver e aprimorar minhas habilidades no âmbito da tecnologia, contribuindo e dando o suporte necessário em quaisquer áreas ou projetos que estiver, além disso um homem muito esbelto.</Text>
      </View>
      <View style={styles.linksContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Mig2445465')}>
                    <FontAwesome name="github" size={30} color="whitesmoke" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/miguel-araujo-7a37b8247/')}>
                    <FontAwesome name="linkedin" size={30} color="cyan" />
                </TouchableOpacity>
            </View>
      <View>
      <Image  style={styles.profileImage} />

        <Text style={styles.title1}>Rodrigo Coutinho</Text>
        <Text style={styles.description}>Aluno na Faeterj Petrópolis e residente no Serratec/Senac, estagiário na Orange Business Services, tenho 20 anos e busco desenvolver e aprimorar minhas habilidades no âmbito da tecnologia, contribuindo e dando o suporte necessário em quaisquer áreas ou projetos que estiver.</Text>
      </View>
      <View style={styles.linksContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/digocoutinho78')}>
                    <FontAwesome name="github" size={30} color="whitesmoke" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/digocoutinho/')}>
                    <FontAwesome name="linkedin" size={30} color="cyan" />
                </TouchableOpacity>
            </View>
      <View>
      <Image  style={styles.profileImage} />

        <Text style={styles.title1}>Pedro Henrique</Text>
        <Text style={styles.description}>Aluno de Engenharia de Computação no CEFET Petrópolis e residente no Serratec/Senac, pego 50kg cada lado no supino..</Text>
      </View>
      <View style={styles.linksContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/PedroHenriqueBRibeiro')}>
                    <FontAwesome name="github" size={30} color="whitesmoke" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/pedro-henrique-39aab8282/')}>
                    <FontAwesome name="linkedin" size={30} color="cyan" />
                </TouchableOpacity>
            </View>
      <View>
      <Image  style={styles.profileImage} />

        <Text style={styles.title1}>Samuel Freitas</Text>
        <Text style={styles.description}>Aluno na Faeterj Petrópolis e residente no Serratec/Senac, estagiário na Orange Business Services, tenho 20 anos e busco desenvolver e aprimorar minhas habilidades no âmbito da tecnologia, contribuindo e dando o suporte necessário em quaisquer áreas ou projetos que estiver.</Text>
      </View>
      <View style={styles.linksContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/SamuFreitas10')}>
                    <FontAwesome name="github" size={30} color="whitesmoke" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/samuel-freitas-80679626b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app')}>
                    <FontAwesome name="linkedin" size={30} color="cyan" />
                </TouchableOpacity>
            </View>
      <View>
      <Image  style={styles.profileImage} />

        <Text style={styles.title1}>Flávio Lourenço</Text>
        <Text style={styles.description}>Aluno na Faeterj Petrópolis e residente no Serratec/Senac, estagiário na Orange Business Services, tenho 20 anos e busco desenvolver e aprimorar minhas habilidades no âmbito da tecnologia, contribuindo e dando o suporte necessário em quaisquer áreas ou projetos que estiver.</Text>
      </View>
      <View style={styles.linksContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Mig2445465')}>
                    <FontAwesome name="github" size={30} color="whitesmoke" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/lourencofilho-dev/')}>
                    <FontAwesome name="linkedin" size={30} color="cyan" />
                </TouchableOpacity>
            </View>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.description}>Este é um aplicativo criado com React Native para demonstrar habilidades de desenvolvimento móvel e apresentar um projeto sobre Ecommerce.</Text>
      <Text style={styles.version}>Versão 1.0.2</Text>
      </View>
      </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#274C77'
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // metade da largura e altura para criar um círculo
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'whitesmoke',
    marginTop: 20
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#E7ECEF'
  },
  version: {
    fontSize: 14,
    color: 'whitesmoke',
  },
  title1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'whitesmoke',
    textAlign: 'center'
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  githubIcon: {
    marginLeft: 20 // para dar espaço entre os ícones
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: 20,
}
});

export default AboutScreen;
