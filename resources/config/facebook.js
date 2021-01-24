// import auth from '@react-native-firebase/auth';
// import { LoginManager,AccessToken } from "react-native-fbsdk";

// function App (props){
//   async function onFacebookButtonPress() {
//     // Attempt login with permissions
//     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
//     if (result.isCancelled) {
//       throw 'User cancelled the login process';
//     }
  
//     // Once signed in, get the users AccesToken
//     const data = await AccessToken.getCurrentAccessToken();
  
//     if (!data) {
//       throw 'Something went wrong obtaining access token';
//     }
  
//     // Create a Firebase credential with the AccessToken
//     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
//     // Sign-in the user with the credential
//     return auth().signInWithCredential(facebookCredential)
//       .then((user)=>{
//         console.log("user==>",user)
//       })
//       .catch((err)=>{
//         console.log("error==>",err)
//       })
//   }
//     return (
//     <SafeAreaView><ScrollView>
      
      
//       <Button onPress={onFacebookButtonPress} title="facebook login"/>
      
      
//       </ScrollView></SafeAreaView>
//   );
// }
