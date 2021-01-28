// import React, { Component } from 'react';
// import {  View, Text, StyleSheet,TouchableOpacity,SafeAreaView,ScrollView,FlatList} from 'react-native';
// import PropTypes from 'prop-types';



// export default class ItemComponent extends Component {
 
//   static propTypes = {
//       items: PropTypes.array.isRequired
//   };

//   render() {
//   const  Donate=()=>{
//       alert("                ***Thank you for help***")
//       }
//     return (
        
//       <View>
//          <Text style={{fontSize:30,fontWeight:"bold",textAlign:"center",paddingTop:10,color:"darkred"}} >List of Blood Donars</Text>
//         {this.props.items.map((item,index) => {
//             return (
//                 <SafeAreaView><ScrollView>
//                 <View  style={styles.itemsList} key={index}>
                    
                   
//                     {/* <Text style={styles.itemtext}>{item.name}</Text> */}
//                     <Text style={styles.itemtext}>Name          {item.name}</Text>
//                     <Text style={styles.itemtext}>Email           {item.email}</Text>
//                     <Text style={styles.itemtext}>Number       {item.number}</Text>
//                     <Text style={styles.itemtext}>Gender         {item.gender}</Text>
//                     <Text style={styles.itemtext}>Blood type   {item.blood}</Text>
//                     <Text style={styles.itemtext}>Age               {item.date}</Text>
//                     <TouchableOpacity
//         style={styles.btn}
       
//         onPress={Donate}
//       >
//         <Text style={styles.btn}>Donate your Blood</Text>
//       </TouchableOpacity>
//                 </View>
//                 </ScrollView></SafeAreaView>
//             )
//         })}

//       </View>
    
//     );
//   }
// }


// const styles = StyleSheet.create({
//     itemsList: {
//         // flex: 1,
//         // flexDirection: 'row',
//         justifyContent: 'space-around',
//         // width:350,
//         // display:'flex',
//         // backgroundColor:"yellow",
//         paddingTop:20,
//         paddingLeft:10,
//         // height:200,
//         // borderColor:"black",
//         // borderWidth:2
//     },
//     itemtext: {
//         // borderWidth:1,
//         fontSize: 24,
//         fontWeight: '300',
//         // textAlign: 'center',
//     },
//     btn:{
//       backgroundColor:"#c77f7f",
//       // fontWeight: "bold",
//       // borderColor:"red",
//       paddingBottom:6 ,
//       marginTop:20,
//       width:250,
//       // marginLeft:40,
//       fontSize:20,
//       borderRadius:3,
//       fontWeight:"bold",
//       justifyContent:"center",
//       alignItems:"center",
//       alignContent:"center",
//       height:40,
//       // borderWidth:2,
//       textAlign:"center",
//       color:"#870c0c",
//           },
// });

















































import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import ajax from '../screens/List';

export default class App extends Component {

  state = {
    users: []
  }

  async componentDidMount() {
    const users = await ajax.fetchUsers();
    this.setState({users});
  }


  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.h2text}>
          Black Order
        </Text>
          <FlatList
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={styles.flatview}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
          }
          keyExtractor={item => item.email}
        />
      </View>
    );
  }
}