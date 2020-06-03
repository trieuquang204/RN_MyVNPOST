import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
import AntDesign from "react-native-vector-icons/AntDesign";
export default class QuestionDetail extends Component{
    constructor() {
        super();

    }

    render() {


        const navigation = this.props.navigation
        return(

            <View style={{flex:1, backgroundColor:'#fff'}}>
                <View style={{backgroundColor: "#F8A91C", flexDirection:'row', paddingTop:30, paddingBottom:10}}>
                    <AntDesign name="arrowleft" onPress={()=> navigation.navigate('QuestionView')} color="#fff" size={25} />
                    <Text style={{color:'#fff', fontSize:18, fontWeight:'bold', paddingLeft:25}}>{navigation.getParam('title')}</Text>
                </View>
               <View>
                   <Text style={{padding:15, fontSize:18}}>{navigation.getParam('key')}</Text>
               </View>
            </View>
        )
    }
}
