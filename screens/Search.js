import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import {View,Text, StyleSheet, TextInput} from 'react-native';
import {LoginStyle} from '../styles/LoginStyle';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntIcon from 'react-native-vector-icons/AntDesign';



export default class ExampleOne extends Component {
    render()
    {
        return(
           <View style={{flex:1}}>

               <WebView
                   style={{height:300}}
                   originWhitelist={['*']}
                   source={{html: `<!DOCTYPE html>
                <html>
        <head>
          <style>
            body{
        margin:0px
        }
            #map {
        position:absolute;
              height: 100%; 
              width: 100%; 
             }
          </style>
        </head>
        <body>
         
          <div id="map"></div>
          <script>
      // Initialize and add the map
      let positions = [{lat: 21.017568, lng: 105.777584},{lat: 20.986919, lng:  105.793773}]
      function initMap() {
      
          var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 18, center: positions [0]});
      
        for (var pos of positions ){
      
       
        var marker = new google.maps.Marker({position: pos, map: map});
        }
      }
          </script>
          <!--Load the API from the specified URL
          * The async attribute allows the browser to render the page while the API loads
          * The key parameter will contain your own API key (which is not needed for this tutorial)
          * The callback parameter executes the initMap() function
          -->
          <script async defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBDQHOnkXBu5C_CVGOuQ9F8UN2y09m6RL8
      &callback=initMap">
          </script>
        </body>
      </html>`}}
               />
               <View>
               <View style={{position:"absolute", left:20, right:20,bottom:0, backgroundColor:'#fff', padding:5}}>
                       <View style={{justifyContent:'center', width: '100%', flexDirection:'row', paddingTop:10}}>
                           <View style={{height: 4, width: 40, backgroundColor: '#8E8E8E',}}></View>
                       </View>
                   <Text style={{color:'#8F8F8F', textAlign:'center', fontWeight:'bold', paddingTop:15, paddingBottom:15}}>Bưu cục gần đây</Text>
                   <View style={[styles.singleLocation, {borderBottomWidth:1, borderColor:'#ccc'}]}>
                       <View style={styles.locationLeft}>
                           <Text style={{textAlign:'center', lineHeight:40, fontSize:20, fontWeight:'bold'}}>1</Text>
                       </View>
                       <View style={styles.locationRight}>
                           <Text style={{color:'#AFAFAF'}}>Nguyễn Thái Học #118728</Text>
                           <Text style={{color:'#AFAFAF', flexShrink: 1 }}>Nguyên Thái Học số 49, Phố Nguyễn {"\n"} Thái Học, Phường Điện Biên, Quận</Text>
                           <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop:10}}>
                               <Text>053053463693467</Text>
                               <Text style={{color:'blue'}}>Chỉ đường</Text>
                           </View>
                       </View>
                   </View>
                   <View style={styles.singleLocation}>
                       <View style={styles.locationLeft}>
                           <Text style={{textAlign:'center', lineHeight:40, fontSize:20, fontWeight:'bold'}}>1</Text>
                       </View>
                       <View style={styles.locationRight}>
                           <Text style={{color:'#AFAFAF'}}>Nguyễn Thái Học #118728</Text>
                           <Text style={{color:'#AFAFAF', flexShrink: 1 }}>Nguyên Thái Học số 49, Phố Nguyễn {"\n"} Thái Học, Phường Điện Biên, Quận</Text>
                           <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop:10}}>
                               <Text>053053463693467</Text>
                               <Text style={{color:'blue'}}>Chỉ đường</Text>
                           </View>
                       </View>
                   </View>
               </View>
           </View>

               <View style={{position:"absolute", left:20, right:20,top:25, backgroundColor:'transparent', padding:5}}>
                   <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
                       <View style={{paddingRight:15, flex:85}}>
                           <TextInput
                               style={{height: 40, backgroundColor: '#fff', borderWidth:0, borderColor:'transparent'}}
                               placeholder="Nhập địa chỉ tỉnh, thành phố "
                               underlineColorAndroid="transparent"
                           />
                       </View>
                       <View style={{flex:15, backgroundColor: '#E5F4FF',width: 40, height: 40, borderRadius: 44/2}}>
                           <FontAwesome name="crosshairs" color="red" size={20}
                                        style={{textAlign:'center', lineHeight:40}}
                           />
                       </View>
                   </View>
               </View>
           </View>
        );
    }
}

const styles = StyleSheet.create({
        singleLocation: {
        flexDirection:'row',
            alignItems:'center'
    },
    locationLeft: {
        backgroundColor:'#CCCCCC',
        height:40,
        width:40,
        borderRadius: 44/2
    },
    locationRight: {
        paddingLeft:10,
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap'
    }
})
