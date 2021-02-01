
import React  from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ComponentProvider,
  ImageBackground,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Button,
  Text,
  StatusBar,
} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { LoginManager,AccessToken } from "react-native-fbsdk";
import 'react-native-gesture-handler';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import { useState } from 'react';
// import database from "@react-native-firebase/database"
// import Home from "../screens/Home"

// import auth from '@react-native-firebase/auth';
// import { LoginManager, AccessToken } from 'react-native-fbsdk';

import auth from '@react-native-firebase/auth';
// import { useReducer } from 'react';
// import object from './object.js'

export default function Login ({navigation},object){
 
  const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReFNHfWwTOugfUscZKbcbuoC_jdVsejEJjwg&usqp=CAU" }; 

  async function onFacebookButtonPress({navigation}) {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    // navigation.replace("Loginscren")
    // Sign-in the user with the credential
    await auth().signInWithCredential(facebookCredential);
  
    // console.log("users==>",user)
  }
    return (
    <SafeAreaView><ScrollView>
      {/* <ImageBackground source={image} style={styles.image}> */}
        <View style={styles.main} >
        <View style={styles.main}>
        <Image style={{ width: 400, height: 200 }} source={require('./../images/logo.jpg')}/>
      {/* <Text style={styles.text}>{users.name}</Text> */}
      <Text style={styles.text}>Wellcome To our Foundation</Text>
      {/* <Text style={styles.text}>For more details please</Text> */}
      {/* <Text style={styles.texts}>Please Signup for more process</Text> */}
      {/* <Button style={styles.btn}  onChangeText={(datas)=>datausers(datas)}  onPress={onFacebookButtonPress}  title="facebook login"/> */}
      <Text style={styles.text}>Create your account</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={onFacebookButtonPress}
      >
        <Text style={styles.btn}>f     Login With Facebook</Text>
      </TouchableOpacity>
    
    
      {/* <View><Text style={{fontSize:30,}}>{"users==>",users}</Text></View> */}
      {/* <Text>{Object}</Text> */}
      {/* <Text>{}</Text> */}
       {/* <Text>Login</Text> */}
       </View>
       </View>
       {/* </ImageBackground> */}
      </ScrollView></SafeAreaView>
  );
}




const styles = StyleSheet.create({
  main: {
// paddingTop:20,

// backgroundColor:"#4a1217",
alignItems:'center',
  },
  text:{
    fontSize:25,
    paddingBottom:20,
    color:"#4a1217",
    fontWeight:'bold',
      },
  btn:{
    backgroundColor:"#cad0ed",
    // fontWeight: "bold",
    borderColor:"blue",
    paddingTop:5 ,
    width:290,
    fontSize:20,
    borderRadius:3,
    fontWeight:"bold",
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center",
    height:40,
    // borderWidth:2,
    textAlign:"center",
    color:"blue",
        },
  texts:{
    fontSize:30,
    marginTop:50,
    marginBottom:60,
    textAlign:"center",
    color:"#4a1217",
    fontWeight:'bold',
      },
//       btn:{
//   backgroundColor:"red",
//   fontWeight: "bold",
//   color:"red",
//       },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  image:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // height:800,
  }
});

