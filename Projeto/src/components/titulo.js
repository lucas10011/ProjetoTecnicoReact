import React, {Component} from 'react';
import {Platform, 
        StyleSheet, 
        Text, 
        View,
        } from 'react-native';

export default class Titulo extends Component<{}> {
  render() {
    return (            
        <View>
            <Text style={styles.titulo}>{this.props.myState}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    titulo:{
        textAlign: 'center',
        color:'rgb(247, 171, 33)',
        fontSize: 19,
        margin: 10
      }
    
  
  })