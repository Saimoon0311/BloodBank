import React, {Component} from 'react';
import {View,Text, FlatList,StyleSheet,TouchableOpacity} from 'react-native';
import database from "@react-native-firebase/database"
// import { Icon } from 'react-native-elements'
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
          alert("             ***Thank you for help***")
          }
          
  return(
    <View>
       <FlatList style={{width:'100%'}}
          data={this.state.list}
          keyExtractor={(item)=>item.key}
          renderItem={({item})=>{
             return(
              <View style={styles.hh}>
                <View style={styles.itemsList}>
                   <TouchableOpacity  onPress={Donate} >
                   <View style={styles.blood}>
                   <Text style={styles.itemtexts}>Blood Group</Text>
                   <Text style={styles.itemtextss}>{item.blood}</Text>
                   </View>
                   <View>
                   <Text style={styles.itemtext}><Text style={{fontWeight:"bold"}}>Name : </Text>        {item.name}</Text>
                    <Text style={styles.itemtext}><Text style={{fontWeight:"bold"}}>Number : </Text>    {item.number}</Text>
                    <Text style={styles.itemtext}><Text style={{fontWeight:"bold"}}>Gender :  </Text>     {item.gender}</Text>

                    <Text style={styles.itemtext}><Text style={{fontWeight:"bold"}}>Age :  </Text>           {item.date}</Text>
                    </View>
                    
                    {/* <TouchableOpacity
        style={styles.btn}
       
        
      >
        <Text style={styles.btn}>Donate your Blood</Text>
      </TouchableOpacity> */}
                   {/* <Text>{item.name}  </Text> */}
                     </TouchableOpacity>

                   {/* <Icon
  name='sc-telegram'
  type='evilicon'
  color='#517fa4'
/> */}



                </View>
                </View>   )

             }}/>
     </View>

  )}
}


const styles = StyleSheet.create({
  hh:{
// justifyContent:"center",
// alignContent:"center",
alignItems:"center",
// borderRadius:8,

// textAlign:"center",

  },
    itemsList: {
        // flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'space-around',
        // width:350,
        // display:'flex',
        // backgroundColor:"yellow",
        // paddingTop:40,
        // paddingLeft:10,
        marginTop:20,
        display:"flex",
        flexWrap:"wrap",
        backgroundColor:"lightgray",
        borderRadius:8,
        // borderWidth:2,
        // width:300,
        // height:200,
        // borderColor:"black",
        // borderWidth:2
    },
    itemtexts:{
// backgroundColor:"#870c0c",
// color:"white",
fontSize:30,
fontWeight:"bold",
color:"white",
    },
    itemtext: {
        // borderWidth:1,
        fontSize: 18,
        fontWeight: '300',
        // color:"#c2c0b8"
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
          blood:{
// justifyContent:"center",
backgroundColor:"#870c0c",
borderRadius:8,
// color:"white",
alignItems:"center",
          },
          itemtextss:{
            fontSize:20,
            color:"white",
            // backgroundColor:"gray",
            fontWeight:"bold"
          } 
        
});