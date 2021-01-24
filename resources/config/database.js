// import { useState } from 'react';
// import database from "@react-native-firebase/database"


// function App (props) {
// const [email,setEmail] =useState("");
// const [password,setPassword] =useState("");
//   const save_data = ()=>{
//   let user ={
//     email,
//     password,
//   }
//   database().ref('/').child('user').push(user)
// setEmail("")
// setPassword("")
//   }
//   return (
//     <SafeAreaView><ScrollView>
      
//       <View>
//         {/* <Text>Hello</Text> */}
//         <TextInput value={email} onChangeText={(text)=>setEmail(text)} placeholder="email"/>
//       </View>
//       <View>
//         {/* <Text>Hello</Text> */}
//         <TextInput secureTextEntry={true} value={password} onChangeText={(text)=>setPassword(text)} placeholder="password"/>
//       </View>
      
      
//       <Button onPress={save_data} title="save data"/>
      
      
//       </ScrollView></SafeAreaView>
//   );
// };
