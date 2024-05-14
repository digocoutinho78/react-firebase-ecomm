import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView, KeyboardAvoidingView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



const AboutScreen = () => {
  //Obs: Substituam os detalhes do perfil de voces onde já está determinado com os respectivos nomes
  // Substituam com suas fotos, links de github e linkedin e suas respectivas descrições
  return (


    <View style={styles.container}>
      <KeyboardAvoidingView>
        <ScrollView >
      <Text style={styles.textoTit}>EQUIPE DE DESENVOLVIMENTO</Text>
      <Text style={styles.title}>_______________________</Text>
      <Image  style={styles.profileImage} source={require('../../assets/jean.jpg')}/>
      <View>

        <Text style={styles.title1}>Jean Pires</Text>
        <Text style={styles.description}>Olá, meu nome é Jean Pires e atualmente estou participando da residência em TIC/Software promovida pelo Serratec em parceria com o Senac. Nessa jornada, tenho explorado e adquirido conhecimentos em diversas tecnologias, incluindo HTML, CSS, Java, Typescript, Javascript e React.
Estou sempre buscando aprender mais para criar soluções inovadoras e estou ansioso para colaborar em projetos desafiadores, contribuindo para a área de desenvolvimento de software</Text>
      </View>
      <View style={styles.linksContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/JeanPiresM')}>
                    <FontAwesome name="github" size={30} color="whitesmoke" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/jean-pires-aa4796279/')}>
                    <FontAwesome name="linkedin" size={30} color="white" />
                    
                </TouchableOpacity>
                
                
            </View>
            <Text style={styles.title}>_______________________</Text>
      <View>
      <Image  style={styles.profileImage} source={require('../../assets/miguel.jpg')}/>
        <Text style={styles.title1}>Miguel Araujo</Text>
        <Text style={styles.description}>Aluno na Faeterj Petrópolis e residente no Serratec/Senac, estagiário na Orange Business Services, tenho 20 anos e busco desenvolver e aprimorar minhas habilidades no âmbito da tecnologia, contribuindo e dando o suporte necessário em quaisquer áreas ou projetos que estiver, além disso um homem muito esbelto.</Text>
      </View>
      <View style={styles.linksContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Mig2445465')}>
                    <FontAwesome name="github" size={30} color="whitesmoke" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/miguel-araujo-7a37b8247/')}>
                    <FontAwesome name="linkedin" size={30} color="white" />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>_______________________</Text>
      <View>
      <Image  style={styles.profileImage} source={require('../../assets/rodrigo.jpg')}/>
        <Text style={styles.title1}>Rodrigo Coutinho</Text>
        <Text style={styles.description}>Dedicado às áreas de tecnologia, design e branding desde 2005. Atualmente focado no desenvolvimento de skills em desenvolvimento de software, frontend e backend.</Text>
      </View>
      <View style={styles.linksContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/digocoutinho78')}>
                    <FontAwesome name="github" size={30} color="whitesmoke" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/digocoutinho/')}>
                    <FontAwesome name="linkedin" size={30} color="white" />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>_______________________</Text>
      <View>
      <Image  style={styles.profileImage} source={require('../../assets/pedro.jpg')}/>

        <Text style={styles.title1}>Pedro Henrique</Text>
        <Text style={styles.description}>Aluno de Engenharia de Computação no CEFET Petrópolis e residente no Serratec/Senac. Atualmente procurando desenvolver minhas habilidades em desenvolvimento de softwares.</Text>
      </View>
      <View style={styles.linksContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/PedroHenriqueBRibeiro')}>
                    <FontAwesome name="github" size={30} color="whitesmoke" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/pedro-henrique-39aab8282/')}>
                    <FontAwesome name="linkedin" size={30} color="white" />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>_______________________</Text>
      <View>
      <Image  style={styles.profileImage} source={require('../../assets/samuel.jpg')}/>

        <Text style={styles.title1}>Samuel Freitas</Text>
        <Text style={styles.description}>Meu nome é Samuel Freitas, sou jornalista e estou em transição de carreira, em formação para me tornar um programador Full-Stack. Para agregar ao projeto, além de minha experiência em redação, edição e reportagem, também usei os fundamentos da programação, como HTML, CSS e JavaScript, que adquiri através do curso que estou fazendo pelo Senac/Serratec.</Text>
      </View>
      <View style={styles.linksContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/SamuFreitas10')}>
                    <FontAwesome name="github" size={30} color="whitesmoke" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/samuel-freitas-80679626b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app')}>
                    <FontAwesome name="linkedin" size={30} color="white" />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>_______________________</Text>
      <View>
      <Image  style={styles.profileImage} source={require('../../assets/flavio.jpg')}/>
        <Text style={styles.title1}>Flávio Lourenço</Text>
        <Text style={styles.description}>Flávio Lourenço, apaixonado por tecnologia desde a infância, atualmente migrando para uma carreira em desenvolvimento de software Full Stack. No Senac, estou aprimorando minhas habilidades técnicas e comportamentais, construindo seu futuro com determinação e entusiasmo.</Text>
      </View>
      <View style={styles.linksContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Mig2445465')}>
                    <FontAwesome name="github" size={30} color="whitesmoke" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/lourencofilho-dev/')}>
                    <FontAwesome name="linkedin" size={30} color="white" />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>_______________________</Text>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.description}>Este é um aplicativo criado com React Native para demonstrar habilidades de desenvolvimento móvel e apresentar um projeto sobre Ecommerce.</Text>
      <Text style={styles.version}>Versão 1.0.2</Text>
      </ScrollView>
      </KeyboardAvoidingView>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#274C77',
    paddingTop: 40,
    marginTop: 30,
    
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // metade da largura e altura para criar um círculo
    marginBottom: 10,
    alignSelf: 'center',
    marginTop: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'whitesmoke',
    marginTop: 5,
    textAlign: "center",
    
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#E7ECEF',
    textAlign:"justify",
    fontWeight:'regular', 
    paddingLeft: 30,
    paddingRight: 30,
    
  },
  version: {
    fontSize: 14,
    color: 'whitesmoke',
    textAlign: "center"
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
    marginTop: 10
  },
  githubIcon: {
    marginLeft: 20 // para dar espaço entre os ícones
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: 5,
    marginBottom:20,
    marginLeft: 100,
},

textoTit: {
  color: "#E7ECEF",
  fontSize: 15,
  fontWeight: "600",
  marginBottom: 20,
  marginTop: 20,
  textAlign: "center"

},
});

export default AboutScreen;
