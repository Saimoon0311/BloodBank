import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Home from '../screens/Home';
import Login from '../screens/Login';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        // <View style={styles.main}>
            // {
            <Stack.Navigator >

                 
                <Stack.Screen style={{backgroundColor:"red"}} name="Home" component={Home} />
                 <Stack.Screen  name="Login/Signup" component={Login} />
                
                
            </Stack.Navigator>
            // </View>
    );
}

const styles = StyleSheet.create({
main:{
    backgroundColor:"red",
}

})