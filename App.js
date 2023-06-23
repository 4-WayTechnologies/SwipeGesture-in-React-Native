import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';


import SwipeGesture from './components/SwipeGesture';




export default function App() {
  return (
    <View style={styles.container}>
    
      
       <SwipeGesture /> 
   
   
       
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
