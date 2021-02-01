// import React ,{useState,Component} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   ComponentProvider,
//   View,
//   TextInput,
//   Image,
//   Button,
//   Text,
//   StatusBar,
// } from 'react-native';
// // import Login ,{object} from "./Login"
// // import { NavigationContainer } from '@react-navigation/native';
// // import { LoginManager,AccessToken } from "react-native-fbsdk";
// import 'react-native-gesture-handler';
// // import MyTabs from "../config/drawer"
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import database from "@react-native-firebase/database"


// export default function Donateform ({navigation}){
//     const [name,setName] =useState("");
//     const [email,setEmail] =useState("");
//     const [number,setNumber] =useState("");
//     const [blood,setBlood] =useState("");
//     const [gender,setGander] =useState("");
//     const [date,setDate] =useState("");
    

//       const save_data = ()=>{
//       let user ={
//         name,
//         email,
//         number,
//         blood,
//         gender,
//         date,
//       }
//       database().ref('/').child('list').push(user);
     
//       alert("Thank you for Donate Blood for needed people ")

//       }
   
//     return(
//         <SafeAreaView><ScrollView>
//         <View>
//         <View  style={styles.header}>
//             <Text style={styles.hy}>Blood Donate Form</Text>
//             </View>
//          <View>
//              {/* <Text>Name</Text> */}
//              <Text style={{fontSize:30,color:"#3d0a0a",fontFamily:"sanSarif",fontWeight:"bold"}}>Full Name :</Text>
//              <TextInput style={styles.text} onChangeText={(text)=>setName(text)} placeholder="Name" />
//              <Text style={{fontSize:30,color:"#3d0a0a",fontFamily:"sanSarif",fontWeight:"bold"}}>Email Address</Text>
//              <TextInput style={styles.text} onChangeText={(text)=>setEmail(text)} placeholder="example@gmail.com" />
//              <Text style={{fontSize:30,color:"#3d0a0a",fontFamily:"sanSarif",fontWeight:"bold"}}>Number</Text>
//              <TextInput style={styles.text} onChangeText={(text)=>setNumber(text)} placeholder="0311-1111111" />
//              <Text style={{fontSize:30,color:"#3d0a0a",fontFamily:"sanSarif",fontWeight:"bold"}}>Blood Type</Text>
//              <TextInput style={styles.text} onChangeText={(text)=>setBlood(text)} placeholder="AB positive" />
//              <Text style={{fontSize:30,color:"#3d0a0a",fontFamily:"sanSarif",fontWeight:"bold"}}>Gender</Text>
//              <TextInput style={styles.text} onChangeText={(text)=>setGander(text)} placeholder="Male/Female" />
//              <Text style={{fontSize:30,color:"#3d0a0a",fontFamily:"sanSarif",fontWeight:"bold"}}>Date of Birth</Text>
//              <TextInput style={styles.text} onChangeText={(text)=>setDate(text)} placeholder="dd-mm-yyyy" />
//              </View>
//              <View style={styles.btns}>
// <Button onPress={save_data} title="save data"/>
//         </View>
//         </View>
//         </ScrollView></SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     header:{
//     //   fontSize:30,
//     //   backgroundColor:"darkred",
//     //   textAlign:"center",
//       alignItems:"center",
//       // paddingTop:10
//     //   fontWeight:"bold",
//     //   color:"white",
//     },
//     hy:{
//         fontSize:45,
//         fontStyle:"italic",
//         fontWeight:"bold",
//         color:"#961717",
//         // paddingBottom:30,
//     },
//     text:{
//         width:600,
//         paddingLeft:15,
//         fontSize:20,
//         height:40,
//         marginBottom:30,
//         // paddingTop:50,
//         // borderColor:"black",
//         borderWidth:1,
//         // borderStyle:'solid'  ,
//         borderColor:"lightgray",
//     },
//     btns:{
//         alignItems:"center",
//         paddingTop:40,
//     }
// })

























import React ,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ComponentProvider,
  View,
  TouchableOpacity,
  // Picker,
  TextInput,
  Image,
  Button,
  Text,
  StatusBar,
} from 'react-native';
// import Login ,{object} from "./Login"
// import { NavigationContainer } from '@react-navigation/native';
// import { LoginManager,AccessToken } from "react-native-fbsdk";
// import 'react-native-gesture-handler';
import MyTabs from "../config/drawer"
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import database from "@react-native-firebase/database"
import RNPickerSelect from 'react-native-picker-select';

export default function Donateform ({navigation}){
//   const selectedItem = {
//     title: 'Selected item title',
//     description: 'Secondary long descriptive text ...',
// };

    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [number,setNumber] =useState("");
    const [blood,setBlood] =useState("");
    const [gender,setGander] =useState("");
    const [date,setDate] =useState("");
    const [location,setLocation]= useState("")

      const save_data = ()=>{
      let user ={
        name,
        email,
        number,
        blood,
        gender,
        date,
        location,
        // key,
      }
     let key = database().ref('/').child('list').push().key;
     database().ref('/').child('list').push(user)
      alert("Thank you for Donate Blood for needed people ")

      }
   
    return(
    <ScrollView>
        <SafeAreaView>
        <View>
        <View  style={styles.header}>
            <Text style={styles.hy}>Blood Donate Form</Text>
            </View>
         <View>
             {/* <Text>Name</Text> */}
             <Text style={{fontSize:30,color:"#3d0a0a",fontWeight:"bold"}}>Full Name :</Text>
             <TextInput style={styles.text} onChangeText={(text)=>setName(text)} placeholder="Name" />
             <Text style={{fontSize:30,color:"#3d0a0a",fontFamily:"sanSarif",fontWeight:"bold"}}>Email Address</Text>
             <TextInput style={styles.text} onChangeText={(text)=>setEmail(text)} placeholder="example@gmail.com" />
             <Text style={{fontSize:30,color:"#3d0a0a",fontFamily:"sanSarif",fontWeight:"bold"}}>Number</Text>
             <TextInput style={styles.text} onChangeText={(text)=>setNumber(text)} placeholder="0311-1111111" />
             <Text style={{fontSize:30,color:"#3d0a0a",fontFamily:"sanSarif",fontWeight:"bold"}}>Blood Type</Text>
             <TextInput style={styles.text} onChangeText={(text)=>setBlood(text)} placeholder=" A, B, AB, O" />



{/* <RNPickerSelect
            onValueChange={(value) => console.log(value) }
            items={[
                { label: 'A', value: 'A' },
                { label: 'B', value: 'B' },
                { label: 'AB', value: 'AB' },
                { label: 'O', value: 'O' },
            ]}
        /> */}

{/* <RNPickerSelect
            pickerProps={{
                accessibilityLabel: selectedItem.title,
            }}
        >
            <Text>{selectedItem.title}</Text>
            <Text>{selectedItem.description}</Text>
        </RNPickerSelect> */}



             <Text style={{fontSize:30,color:"#3d0a0a",fontFamily:"sanSarif",fontWeight:"bold"}}>Gender</Text>
             <TextInput style={styles.text} onChangeText={(text)=>setGander(text)} placeholder="Male/Female" />
             <Text style={{fontSize:30,color:"#3d0a0a",fontFamily:"sanSarif",fontWeight:"bold"}}>Age</Text>
             <TextInput style={styles.text} onChangeText={(text)=>setDate(text)} placeholder="18" />
             <Text style={{fontSize:30,color:"#3d0a0a",fontFamily:"sanSarif",fontWeight:"bold"}}>Location</Text>
             <TextInput style={styles.text} onChangeText={(text)=>setLocation(text)} placeholder="Karachi" />
             </View>
             <View style={styles.btns}>
{/* <Button onPress={save_data} title="save data"/> */}
<TouchableOpacity
        style={styles.btn}
        onPress={save_data}
      >
        <Text style={styles.btn}>Save Data</Text>
      </TouchableOpacity>
        </View>
        </View>
        </SafeAreaView>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    header:{
    //   fontSize:30,
    //   backgroundColor:"darkred",
    //   textAlign:"center",
      alignItems:"center",
      // paddingTop:10
    //   fontWeight:"bold",
    //   color:"white",
    },
    hy:{
        fontSize:30,
        fontStyle:"italic",
        fontWeight:"bold",
        color:"#961717",
        paddingBottom:30,
    },
    btn:{
      backgroundColor:"#c77f7f",
      // fontWeight: "bold",
      // borderColor:"red",
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
      color:"#870c0c",
          },
    text:{
        width:350,
        paddingLeft:15,
        fontSize:20,
        height:50,
        marginBottom:30,
        // paddingTop:50,
        // borderColor:"black",
        borderWidth:1,
        // borderStyle:'solid'  ,
        borderColor:"lightgray",
    },
    btns:{
        alignItems:"center",
        paddingTop:10,
        paddingBottom:20,
    }
})

























// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import auth from '@react-native-firebase/auth';

// export default function Donateform() {
//   // Set an initializing state whilst Firebase connects
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;

//   if (!user) {
//     return (
//       <View>
//         <Text>Login</Text>
//       </View>
//     );
//   }

//   return (
//     <View>
//       <Text>Welcome {user.email}</Text>
//     </View>
//   );
// }