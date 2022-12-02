import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Animated, LogBox } from 'react-native';
import { auth } from './firebase';

export default function App() {

  LogBox.ignoreAllLogs();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {

    auth.onAuthStateChanged(function(val){
      if(val != null){
        setUser(val.email);
      }
    })
    
  },[])

  const login = ()=>{
    auth.signInWithEmailAndPassword(email,password).then(function(val){
      setUser(val.email);
    }).catch(function(error){
      alert(error.message);
    })
  }

  const logout = ()=>{
    auth.signOut();
    setUser('');
  }

if(!user){
  return (
    
    <View style={styles.container}>
      <StatusBar hidden/>
            <Image source={require('./assets/Inova-shopping.jpg')} style={styles.imageInova}></Image>
            <TextInput placeholder="Your e-mail" style={styles.textInput} onChangeText={text=>setEmail(text)}></TextInput>
            <TextInput secureTextEntry={true} placeholder="Your password" style={styles.textInput} onChangeText={text=>setPassword(text)}></TextInput>

            <TouchableOpacity style={styles.btnRegister} onPress={()=>login()}>
              <Text style={{color:'white', fontSize:18}}>
                Login
              </Text>
            </TouchableOpacity>
    </View>
  );

}else{
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
            <Image source={require('./assets/Inova-shopping.jpg')} style={styles.imageInova}></Image>
            <View>
              <Text style={{fontSize:18}}>Welcome </Text>
              <Text style={{fontWeight:'500', fontSize:18}}>{user} !</Text>
              <Text style={{fontSize:18}}>This is a test access to our database, we currently don't have any content to show.</Text>
            </View>
            <TouchableOpacity style={styles.btnRegister} onPress={()=>logout()}>
              <Text style={{color:'white', fontSize:18}}>
                Logout
              </Text>
            </TouchableOpacity>
    </View>
  );
}

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },

  imageInova: {
   
  },

  textInput: {
    width:'65%',
    height:34,
    backgroundColor:'#8ab6eb',
    borderRadius:25,
    paddingLeft:5,
    marginBottom:15,
    color:'gray',
    textAlign: 'center'
  },

  btnRegister: {
    backgroundColor:'#2a5385',
    padding:10,
    borderRadius:40,
    width:'30%',
    textAlign:'center',
    alignItems:'center',
    marginTop:12,
    borderColor:'#959fab',
    borderWidth:1
  },

});
