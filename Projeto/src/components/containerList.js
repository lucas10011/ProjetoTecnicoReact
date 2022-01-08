/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, 
        StyleSheet, 
        View,
        Dimensions,
        FlatList,
        ScrollView} from 'react-native';

import Lista from './lista';
import Titulo from './titulo';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class containerList extends Component<{}> {

  constructor() {
    super();
    this.state = { titulo: 'Popular' };
  }
  render() {
    const livros = [
      {id: 1, nome: 'HarryPotter e a criança amaldiçoada',genero:'Infanto Juvenil', classificacao:'12 Anos', url:require("../../src/images/hp.png"), descricao:'Sempre foi difícil ser Harry Potter e não é mais fácil agora que ele é um sobrecarregado funcionário do Ministério da Magia, marido e pai de três crianças em idade escolar. Enquanto Harry lida com um passado que se recusa a ficar para trás, seu filho mais novo,  Alvo, deve lutar com o peso de um legado de família que ele nunca quis. À medida que passado e presente se fundem de forma ameaçadora, ambos, pai e filho, aprendem uma incômoda verdade: às vezes as trevas vêm de lugares inesperados', nota:5},
      {id: 2, nome: 'Cidade dos Ossos',genero:'Fantasia/Aventura',classificacao:'16 Anos', url:require("../../src/images/cidade.jpg"), descricao:'Cassandra Clare começou a carreira postando histórias sobre o universo de Harry Potter e Senhor dos anéis em sites de fanfiction. Mesmo navegando entre personagens criados por terceiros, seu talento chamou a atenção da crítica. O prestigioso The Times considerou sua série sobre Harry Potter ‘uma jóia de grande qualidade capaz de aumentar a apreciação das histórias de J. K. Rowling’. Para The Telegraph, sua interpretação de J. R.R. Tolkien é um ‘clássico cult’.Pouco tempo depois, Cassandra passou a usar sua habilidade em heróis, vilões e enredos próprios. Em Cidade dos ossos, primeiro volume da Trilogia Instrumentos Mortais, ela cria uma fantasia urbana, tendo como cenário a Nova York atual. Uma aventura que envolve o mito dos nephilim — homens e mulheres que trazem, em suas veias, o sangue de anjos — e que chegou às listas de mais vendidos do New York Times, onde permaneceu por semanas.Cidade dos ossos nos apresenta Clarissa, uma adolescente típica: aos quase 16 anos mora com a mãe, uma jovem artista viúva. Tem um “tio” postiço, Luke, que de certa forma ocupa o lugar do pai e um melhor amigo, Simon, que nutre por ela uma paixão secreta. Quando Simon e Clary visitam um clube, a menina vê três adolescentes matarem um rapaz. Há, porém, dois grandes problemas: ninguém acha o corpo e apenas ela vê os tais assassinos. Sua vida muda completamente. A mãe é raptada por demônios e ela descobre a existência dos Caçadores das Sombras, guerreiros cuja missão é proteger o mundo que conhecemos de bestas e outras criaturas. Vampiros que saem da linha, lobisomens descontrolados, monstros cheios de veneno? É por aí mesmo. E depois desse primeiro contato com o Mundo de Sombras, e com Jace — um Caçador que tem a aparência de um anjo, mas a língua tão afiada quanto Lúcifer —, Clary nunca mais será a mesma.', nota:4},
      {id: 3, nome: 'HarryPotter e a criança amaldiçoada',genero:'Infanto Juvenil', classificacao:'12 Anos' , url:require("../../src/images/hp.png"), descricao:'Sempre foi difícil ser Harry Potter e não é mais fácil agora que ele é um sobrecarregado funcionário do Ministério da Magia, marido e pai de três crianças em idade escolar. Enquanto Harry lida com um passado que se recusa a ficar para trás, seu filho mais novo,  Alvo, deve lutar com o peso de um legado de família que ele nunca quis. À medida que passado e presente se fundem de forma ameaçadora, ambos, pai e filho, aprendem uma incômoda verdade: às vezes as trevas vêm de lugares inesperados', nota:5},
      {id: 4, nome: 'Cidade dos Ossos',genero:'Fantasia/Aventura',classificacao:'16 Anos' , url:require("../../src/images/cidade.jpg"), descricao:'Cassandra Clare começou a carreira postando histórias sobre o universo de Harry Potter e Senhor dos anéis em sites de fanfiction. Mesmo navegando entre personagens criados por terceiros, seu talento chamou a atenção da crítica. O prestigioso The Times considerou sua série sobre Harry Potter ‘uma jóia de grande qualidade capaz de aumentar a apreciação das histórias de J. K. Rowling’. Para The Telegraph, sua interpretação de J. R.R. Tolkien é um ‘clássico cult’.Pouco tempo depois, Cassandra passou a usar sua habilidade em heróis, vilões e enredos próprios. Em Cidade dos ossos, primeiro volume da Trilogia Instrumentos Mortais, ela cria uma fantasia urbana, tendo como cenário a Nova York atual. Uma aventura que envolve o mito dos nephilim — homens e mulheres que trazem, em suas veias, o sangue de anjos — e que chegou às listas de mais vendidos do New York Times, onde permaneceu por semanas.Cidade dos ossos nos apresenta Clarissa, uma adolescente típica: aos quase 16 anos mora com a mãe, uma jovem artista viúva. Tem um “tio” postiço, Luke, que de certa forma ocupa o lugar do pai e um melhor amigo, Simon, que nutre por ela uma paixão secreta. Quando Simon e Clary visitam um clube, a menina vê três adolescentes matarem um rapaz. Há, porém, dois grandes problemas: ninguém acha o corpo e apenas ela vê os tais assassinos. Sua vida muda completamente. A mãe é raptada por demônios e ela descobre a existência dos Caçadores das Sombras, guerreiros cuja missão é proteger o mundo que conhecemos de bestas e outras criaturas. Vampiros que saem da linha, lobisomens descontrolados, monstros cheios de veneno? É por aí mesmo. E depois desse primeiro contato com o Mundo de Sombras, e com Jace — um Caçador que tem a aparência de um anjo, mas a língua tão afiada quanto Lúcifer —, Clary nunca mais será a mesma.', nota:4}
    ];

    return (
            
            <ScrollView>
              <Titulo myState = {this.state.titulo} />
                {livros.map(item =>
                  <View key={item.id} style={styles.itens}>
                    <Lista livro={item}/>
                  </View>
                )}
            </ScrollView>

    );
  }
}


const styles = StyleSheet.create({
  itens:{
    margin: 12
  }

})