import React, { Component } from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import { StackNavigator } from 'react-navigation';
import AntDesign from "react-native-vector-icons/AntDesign";
export default class WhatnewsDetail extends Component{
    constructor() {
        super();

    }

    render() {


        const navigation = this.props.navigation
        return(

            <View style={{flex:1, backgroundColor:'#fff'}}>
                <View style={{backgroundColor: "#F8A91C", flexDirection:'row', paddingTop:30, paddingBottom:10}}>
                    <AntDesign name="arrowleft" onPress={()=> navigation.navigate('Whatnews')} color="#fff" size={25} />
                    <Text style={{color:'#fff', fontSize:18, fontWeight:'bold', paddingLeft:25}}>{navigation.getParam('title')}</Text>
                </View>

                <View style={{flex:1, padding:10}}>
                   <View style={{flex:35, paddingLeft:20, paddingRight:20}}>
                       <Image source={navigation.getParam('link')} style={{width:'100%', height:'100%'}}></Image>
                   </View>
                    <View style={{flex:65}}>
                        <ScrollView>
                        <Text>{navigation.getParam('contentDetail')}</Text>
                        </ScrollView>
                    </View>
                </View>

            </View>
        )
    }
}
