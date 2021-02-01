import React, { useState, useEffect } from 'react';
import { View, Text ,Image,Button,TouchableOpacity,StyleSheet,SafeAreaView,ScrollView} from 'react-native';
import auth from '@react-native-firebase/auth';
// import { LoginManager } from 'react-native-fbsdk'
import Login from "../config/facebook"
// import List from './List';
export default function Loginscren({navigation}) {
  const Signout=()=>{
    auth()
          .signOut()
          .then(() => console.log('User signed out!'))
  }
  const Formss =()=>{
    navigation.navigate("Donateform")
  }
  const Lists =()=>{
    navigation.navigate("List")
  }
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
  //   const  signout=()=>{
  //   auth()
  // .signOut()
  // .then(() => console.log('User signed out!'));
  //   }
 
    setUser(user);
    if (initializing) setInitializing(false);
  }
  //  auth()
  // .signOut()
  // .then(() => console.log('User signed out!'));
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Login/>
      </View>
    );
  }

  return (
  <ScrollView>
    <SafeAreaView>
    <View>
      <View style={styles.main}>
      <Image style={{width:100,height:100}} source= { {uri: user.photoURL}}/>
      <Text style={styles.well} >Wellcome</Text>
      </View>
      <Text style={styles.text}>{user.displayName}</Text>
      {/* <Text style={styles.text}>{user.email}</Text> */}
{/* <Button title="hello" onPress={Formss} />*/}
    <View style={styles.ss}>
<TouchableOpacity
        style={styles.btn}
        onPress={Formss}
      >
        <Text style={styles.btn}>Be a Donar</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.ss}>
      <TouchableOpacity
        style={styles.btn}
        onPress={Lists}
      >
        <Text style={styles.btn}>Donate list</Text>
      </TouchableOpacity>
{/* <Image style={{width:200,height:200}} source={require("../images/s.png")}/> */}
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      {/* <Text></Text> */}
      <TouchableOpacity
        style={styles.btn}
        onPress={Signout}
      >
        <Text style={styles.btns}>Sign out</Text>
      </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
    </ScrollView>
  );
  // return(
  //   <View>
  //     <Button title="hello"/>
  //   </View>
  // )
}
const styles = StyleSheet.create({
main:{
  // backgroundColor:"red",
  fontSize:300,
  alignItems:"center",
  paddingTop:40
},
well:{
  fontSize:60,
  fontWeight:"bold",
  color:"#380c0c",
},
text:{
  justifyContent:"center",
  textAlign:"center",
  paddingTop:10,
  fontSize:20,
  fontWeight:"bold",
},
ss:{
justifyContent:"center",
textAlign:"center",
alignContent:"center",
alignItems:"center",
paddingTop:10,
},
btn:{
  backgroundColor:"#9ae6a0",
  // fontWeight: "bold",
  // borderColor:"red",
  paddingTop:4 ,
  // marginTop:10,
  width:250,
  // marginLeft:40,
  fontSize:20,
  borderRadius:3,
  fontWeight:"bold",
  justifyContent:"center",
  alignItems:"center",
  alignContent:"center",
  height:40,
  // borderWidth:2,
  textAlign:"center",
  color:"#05420a",
      },
      btns:{
        backgroundColor:"#c77f7f",
        // fontWeight: "bold",
        // borderColor:"red",
        paddingTop:4 ,

        // marginTop:40,
        width:250,
        // flexDirection:"row-reverse",
        // marginLeft:40,
        fontSize:20,
        borderRadius:3,
        fontWeight:"bold",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        height:40,
        // borderWidth:2,
        textAlign:"center",
        color:"#870c0c",
            },
})