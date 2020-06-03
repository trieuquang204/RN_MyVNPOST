import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, Image, TextInput, Alert} from 'react-native';
import {globalStyles} from '../styles/Global';
import {LoginStyle} from '../styles/LoginStyle';
import AntIcon from "react-native-vector-icons/AntDesign";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function ForgotPass({navigation}) {
    const pressHandler = () => {
        navigation.navigate('Login');
    }


    return(
        <View style={[globalStyles.container, {flexDirection:'column', justifyContent:'space-evenly'}]}>
            <Image source={require('../assets/images/Buu-dien.png')} style={LoginStyle.backgroundImage} />
            <View style={[LoginStyle.login_screen]}>
                <View style={LoginStyle.navi_register}>
                    <AntIcon onPress={pressHandler} name="left" color="#fff" size={25} />
                </View>
                <View style={[LoginStyle.main_form, {flex:1, flexDirection:'column',justifyContent: 'space-between' }]}>
                    <Image
                        style={{ height: 100, width: 200, justifyContent: 'center', flexDirection: 'row' }}
                        source={require("../assets/images/logo_login.png")}
                    />
                   <View style={{width:'100%'}}>
                       <Text style={{color:'#fff', fontWeight:'bold', paddingBottom:30, textAlign:'center'}}>Bạn hãy điền Email đã đăng ký tài khoản.</Text>
                      <View>
                          <Text style={{color:'#fff', fontSize:12}}>Email:</Text>
                          <View style={[LoginStyle.singleForm,{marginBottom:20, paddingTop:0}]}>
                              <AntIcon style={LoginStyle.iconInput} name="user" color="red" size={25} />
                              <TextInput
                                  style={LoginStyle.input}
                                  placeholder="Nhập email..."
                                  underlineColorAndroid="transparent"
                              />
                          </View>
                      </View>
                       <Button
                           style={{borderRadius:10, fontWeight:'bold'}}
                           color="#B5B5B5"
                           title="Tiếp tục"
                           onPress={() => Alert.alert('My VNPost', 'Chưa có dữ liệu')}
                       />
                   </View>
                    <View style={[LoginStyle.lastText]}>
                        <Text style={{color:'#fff', fontWeight:'bold'}}>
                            TỔNG CÔNG TY BƯU ĐIỆN VIỆT NAM(132)
                        </Text>
                        <Text style={{color:'#fff'}}>Số 5, Phạm Hùng - Mỹ Đình - Nam Từ Liêm - Hà Nội</Text>
                        <Text style={{color:'#fff'}}>Hotline: 19008000</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

