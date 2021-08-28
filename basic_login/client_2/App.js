import React, { Component } from 'react'
import { Text, View,Alert } from 'react-native'

import io from "socket.io-client";

export default class App extends Component {

  componentDidMount() {
    
    this.io = io.connect('http://192.168.1.27:3000/');


  
 // default email and password
    let email = 'admin';
    let password = 'admin';
 // sends email and password to database for querying
    this.io.emit('Login_information', {
      email:email,
      password:password
    });


// email ve şifreyi sorgu cevabı getir (true/false)
    this.io.on('passwordcorrect', (data) => {
      console.log(data.Login);
      Alert.alert("Login successful  :  "+data.Login);
  }); 

  }


  render() {
    return (
      <View>
        <Text> automatic password verification screen.. </Text>
      </View>
    )
  }
}

