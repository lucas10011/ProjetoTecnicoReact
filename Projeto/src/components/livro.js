
import React, {Component} from 'react';
import {Platform, 
        StyleSheet, 
        Text, 
        View,
        Image,
        ScrollView,
        TouchableOpacity
        } from 'react-native';
import Titulo from './titulo';

export default class Livro extends Component<{}> {
  render() {

    var stars = [];
    for(let i = 0; i < this.props.livro.nota; i++){
      stars.push(
          <View key = {i}>
            <Image source={require('../images/star.png')}  />
          </View>	
      )
    }

    return (
      <ScrollView>
        <View style={styles.body}>
            <Titulo myState = {this.props.myState} />      
            <View style={styles.wrap} >
                    <Image source={this.props.livro.url} style={styles.livro} />
                    <View>
                      <Text style={styles.wrapText}>{this.props.livro.nome}</Text>
                      <Text style={styles.wrapText}>{this.props.livro.genero}</Text>
                      <Text style={styles.wrapText}>{this.props.livro.classificacao}</Text>
                      <View style={styles.conjuntoStar}>
                        {stars}
                      </View>
                    </View>
            </View>
            <View>
                  <Text style={styles.bold}>Descrição</Text>
                  <Text style={styles.corpoTexto}>{this.props.livro.descricao}</Text>
                  <Text style={styles.bold}>Prévia</Text>
                  <Text style={styles.corpoTexto}>{this.props.livro.descricao}</Text>
                  <View style={styles.imgCenter}>
                    <TouchableOpacity>
                      <Image source={require('../button/downloadprevia.png')}  style={styles.buttonDownload}  />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.bold}>E-book Kindle</Text>
                  <View style={styles.ebook}>
                    <View style={styles.wrapPreco}>
                      <Text style={{fontWeight: '500',fontSize:15}}>R$</Text>
                      <Text style={{fontWeight: '500',fontSize:30}}>25,90</Text>
                    </View>
                    <Text style={styles.ebookText}>COMPRA NO DÉBITO</Text>
                    <View style={styles.imgCenter}>
                      <TouchableOpacity>
                        <Image source={require('../button/botaocomprar.png')}  style={styles.buttonComprar}  />
                      </TouchableOpacity>
                    </View>
                  </View>
            </View>
        </View> 
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
    body:{
      margin:15
    },
    livro:{
      width:150, 
      height:200,
      marginRight:10
    },
    wrap:{
      flexDirection: 'row', 
    },
    wrapPreco:{
      flexDirection: 'row', 
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    wrapText:{
      flex: 1, flexWrap: 'wrap'
    },

    bold:{
      fontWeight: 'bold',
      marginBottom: 5
    },
    corpoTexto:{
      marginBottom: 20
    },

    buttonDownload:{
      width:150, 
      height:100,
      
    },
    buttonComprar:{
      width:300, 
      height:100,
      
    },
    imgCenter:{
    
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:30
    },
    ebook:{
      backgroundColor: 'rgb(244, 244, 244)'
    },
    ebookText:{
      textAlign:'center'
    },
    conjuntoStar:{
      flexDirection: 'row', alignItems: 'center'
    }
  
  
  })
  