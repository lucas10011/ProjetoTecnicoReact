
import { Navigation } from "react-native-navigation";

import React, {Component} from 'react';
import {Platform, 
        StyleSheet, 
        Text, 
        View,
        Image,
        TouchableOpacity
        } from 'react-native';

export default class Lista extends Component<{}> {

goToScreen = (screenName, item) =>{
  Navigation.showModal({
    stack: {
      children: [{
        component: {
          name: screenName,
          passProps: {
            livro: item,
            myState: item.nome
          },
          options: {
            topBar: {
              title: {
                text: 'Loja',
                alignment: 'center', // Center title
                color: 'white',
              },
              background:{
                color: 'black',
              }

            }
          }
        }
      }]
    }
  })
}


  render() {

    var stars = [];

	for(let i = 0; i < this.props.livro.nota; i++){

		stars.push(
        <View key = {i}>
          <Image source={require('../../src/images/star.png')}  />
        </View>	
		)
	}

    return (
                  
        <View style={styles.wrap} >
              <TouchableOpacity onPress={()=>this.goToScreen('Livro', this.props.livro)}>
                <Image source={this.props.livro.url} style={styles.livro} />
              </TouchableOpacity>
              <View style={styles.infoLista}>
                <Text style={styles.fontTitulo}>{this.props.livro.nome}</Text>
                <Text style={styles.wrapText}>{this.props.livro.genero}</Text>
                <Text style={styles.wrapText}>{this.props.livro.classificacao}</Text>
                <View style={styles.conjuntoStar}>
                  {stars}
                </View>
                <View>
                  <TouchableOpacity onPress={()=>this.goToScreen('Livro', this.props.livro)}>
                    <Image source={require('../../src/images/downloadprevia.png')}  style={styles.Button}  />
                  </TouchableOpacity>
                </View>
              </View>
        </View>
   

    );
  }
}

const styles = StyleSheet.create({
    livro:{
      width:150, 
      height:200
    },
    wrap:{
      flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgb(244, 244, 244)', marginBottom:20
    },

    wrapText:{
      flex: 1, flexWrap: 'wrap'
    },
    Button:{
      width:150, 
      height:100,  
    },
    imgCenter:{
    
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:30
    },
    conjuntoStar:{
      flexDirection: 'row', alignItems: 'center'
    },
    fontTitulo:{
      fontWeight: 'bold'
    },
    infoLista:{
      marginLeft:5
    }
  
  })