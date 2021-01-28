// import React ,{Component} from 'react';
// // import React, { Component } from 'react';
// // import { View, Text, StyleSheet} from 'react-native';
// import ItemComponent from '../config/component';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   // ul,
//   ComponentProvider,
//   View,
//   FlatList,
//   TextInput,
//   Button,
//   Text,
//   StatusBar,
// } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { LoginManager,AccessToken } from "react-native-fbsdk";
// import 'react-native-gesture-handler';
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import database from "@react-native-firebase/database"


// export default function List (){
//      database().ref('/').child("list").on("child_added",function (data) {
//        console.log(data.val())
//        let datas = data.val()
//       const [initializing, setInitializing] = useState(true);
//         const [user, setUser] = useState();
//         setUser(datas);
//      })
    
//     return(
//         <View>
//             {/* <Text>{this.}</Text> */}
        
//         </View>
//     )
// }











// export default class List extends Component {

//   state = {
//       items: []
//   }

//   componentDidMount() {
//     database().ref('/list').on('value', (snapshot) => {
//       let data = snapshot.val();
//       let items = Object.values(data);
//       this.setState({items});
//    });
//   }
  
//   render() {
//       return (
//       <ScrollView>
//         <SafeAreaView>
//           <View >
//           {
//                     this.state.items.length > 0
//                     ? <ItemComponent items={this.state.items} />
//                     : <Text>No items</Text>
//                 }
//           </View>
//           </SafeAreaView>
//     </ScrollView>
//       )
//   }
// }




// export default function List() {

// export default {
//     async fetchUsers() {
//         try {
//                 let response = await fetch(firebase.database().ref('/list') );
//                 let responseJsonData = await response.json();
//                 return responseJsonData;
//             }
//         catch(e) {
//             console.log(e)
//         }
//     }
// }

// }

// const URI = 'http://localhost:5200';














// export default function List({ userId }) {
  
//   useEffect(() => {
  //   const onChildAdd = database()
  //     .ref('/users')
  //     .on('child_added', snapshot => {
  //       console.log('A new node has been added', snapshot.val());
  //     });

  //   // Stop listening for updates when no longer required
  //   return () =>
  //     database()
  //       .ref('/users')
  //       .off('child_added', onChildAdd);
  // }, [userId]);
  // const [user, setUser] = useState();
  // useState
//   database().ref('/list').on('child_added', querySnapShot => {
//     let data = querySnapShot.val() ? querySnapShot.val() : {};
//     let todoItems = {...data};
//     this.setState({
//       todos: todoItems,
//     });
//   });
//   })
// return(
//   <View>
//       {/* {useEffect} */}
// <Text>{this.setState.todos}</Text>
    
//     {/* <ul>
//     {this.state.onChildAdd.val().map((v,i)=>{
//       return<li key={i}>{v.onChildAdd}</li>
//     })}
//     </ul> */}
//   </View>
// )
// }































import React, {Component} from 'react';
import {View,Text, FlatList,StyleSheet,TouchableOpacity} from 'react-native';
import database from "@react-native-firebase/database"
export default class List extends Component{
 constructor(props){
 super(props);
 this.state={ 
 list:[],
 } }
  componentDidMount(){
    database().ref('/list').on('value', (snapshot) =>{
      var li = []
      snapshot.forEach((child)=>{
       li.push({
        key: child.key,
        name:child.val().name,
        email:child.val().email,
        number:child.val().number,
        blood:child.val().blood,
        date:child.val().date,
        gender:child.val().gender,
        age: child.val().age
      })
    })
   this.setState({list:li})
  })
 }
 render(){
  const  Donate=()=>{
          alert("                ***Thank you for help***")
          }
  return(
    <View>
       <FlatList style={{width:'100%'}}
          data={this.state.list}
          keyExtractor={(item)=>item.key}
          renderItem={({item})=>{
             return(
                <View  style={styles.itemsList}>
                  
                  <Text style={styles.itemtext}>Name          {item.name}</Text>
                    <Text style={styles.itemtext}>Email           {item.email}</Text>
                    <Text style={styles.itemtext}>Number       {item.number}</Text>
                    <Text style={styles.itemtext}>Gender         {item.gender}</Text>
                    <Text style={styles.itemtext}>Blood type   {item.blood}</Text>
                    <Text style={styles.itemtext}>Age               {item.date}</Text>
                    <TouchableOpacity
        style={styles.btn}
       
        onPress={Donate}
      >
        <Text style={styles.btn}>Donate your Blood</Text>
      </TouchableOpacity>







                   {/* <Text>{item.name}  </Text> */}
                </View>)
             }}/>
     </View>
  )}
}


const styles = StyleSheet.create({
    itemsList: {
        // flex: 1,
        // flexDirection: 'row',
        justifyContent: 'space-around',
        // width:350,
        // display:'flex',
        // backgroundColor:"yellow",
        paddingTop:20,
        paddingLeft:10,
        // height:200,
        // borderColor:"black",
        // borderWidth:2
    },
    itemtext: {
        // borderWidth:1,
        fontSize: 24,
        fontWeight: '300',
        // textAlign: 'center',
    },
    btn:{
      backgroundColor:"#c77f7f",
      // fontWeight: "bold",
      // borderColor:"red",
      paddingBottom:6 ,
      marginTop:20,
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
      color:"#870c0c",
          },
});