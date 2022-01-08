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
        } from 'react-native';


import ContainerList from './src/components/containerList';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component<{}> {

  constructor(){
    super();
    this.state = {screenName: ''}
}

  render() {
    return (
      <View>
          <ContainerList style={styles.container}/>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    margin: 10
  }

})