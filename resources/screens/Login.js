
import React ,{useState,ComponentLifecycle} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ComponentProvider,
  View,
  TextInput,
  Button,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
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
import database from "@react-native-firebase/database"
// import Home from "../screens/Home"



import auth from '@react-native-firebase/auth';
// import object from './object.js'

export default function Login ({navigation},object){
  // const home 
  
  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    // const getdata = await AccessToken.getCurrentData();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential)
      .then((user)=>{
        let users = user.additionalUserInfo.profile;
        console.log("user==>",datausers)
        const datausers={
             name : users.email,
          
        }
        
      
      //  return(
      //    <View><Text style={{fontSize:30,}}>{"users==>",users}</Text></View>
      //  )
    // function Object() {
    //   render(
    //     <View><Text>{object}</Text></View>
    //   )
    // }
        // database().ref('/').child('user').push(object)
        
        // navigation.navigate("Home")
        
        // database().ref('/').child("user").on("value",datasnap=>{
          // let database = datasnap.val()
        //   const getobject = {
        //     name: database.name,
        //     email: database.email,
        //     picture:database.picture,
        //     key : database.id,
        // }
        // console.log("getdata==>",database)
        // console.log("getdata==>",getobject)
        // })
   
     
        // console.log("details==>",object)
        // let users = "user==>",user
        // return(
        //   <View><Text style={{backgroundColor:"red",fontSize:20}}>{users.object}</Text></View>
        // )
        
      })
      .catch((err)=>{
        console.log("error==>",err)
      })
      
  }
   
  // var man = new Object();
    return (
    <SafeAreaView><ScrollView>
        <View style={styles.main} >
        <View style={styles.main}>
      {/* <Text style={styles.text}>{users.name}</Text> */}
      {/* <Text style={styles.text}>SM Blood Bank</Text>
      <Text style={styles.texts}>Please Signup for more process</Text> */}
      <Button style={styles.btn}  onChangeText={(datas)=>datausers(datas)}  onPress={onFacebookButtonPress}  title="facebook login"/>
      {/* <View><Text style={{fontSize:30,}}>{"users==>",users}</Text></View> */}
      {/* <Text>{Object}</Text> */}
      {/* <Text>{}</Text> */}
       {/* <Text>Login</Text> */}
       </View>
       </View>
      </ScrollView></SafeAreaView>
  );
}




const styles = StyleSheet.create({
  main: {
paddingTop:50,

// backgroundColor:"#4a1217",
alignItems:'center',
  },
  text:{
fontSize:50,
color:"#4a1217",
fontWeight:'bold',
  },
  texts:{
    fontSize:30,
    marginTop:50,
    marginBottom:60,
    textAlign:"center",
    color:"#4a1217",
    fontWeight:'bold',
      },
      btn:{
  backgroundColor:"red",
  fontWeight: "bold",
  color:"red",
      },
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
});


