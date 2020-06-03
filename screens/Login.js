import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, Image, TextInput, Alert} from 'react-native';
import {globalStyles} from '../styles/Global';
import {LoginStyle} from '../styles/LoginStyle';
import AntIcon from "react-native-vector-icons/AntDesign";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Login({navigation}) {
    const pressHandler = () => {
        navigation.navigate('Home');
    }
    const registration = () => {
        navigation.navigate('Registration');
    }
    const ForgotPass = () => {
        navigation.navigate('ForgotPass');
    }

  return(
      <View style={globalStyles.container}>
          <Image source={require('../assets/images/Buu-dien.png')} style={LoginStyle.backgroundImage} />
       <View style={LoginStyle.login_screen}>
           <View style={LoginStyle.navi_register}>
               <AntIcon onPress={pressHandler} name="left" color="#fff" size={25} />
               <TouchableOpacity onPress={registration}>
                   <Text style={{color: '#fff', textDecorationLine: 'underline'}}>Đăng ký</Text>
               </TouchableOpacity>
           </View>
           <View style={LoginStyle.main_form}>
               <Image
                   style={{ height: 100, width: 200, justifyContent: 'center', flexDirection: 'row' }}
                   source={require("../assets/images/logo_login.png")}
               />

               <View style={LoginStyle.singleForm}>
                   <AntIcon style={LoginStyle.iconInput} name="user" color="red" size={25} />
                   <TextInput
                       style={LoginStyle.input}
                       placeholder="Tài khoản..."
                       underlineColorAndroid="transparent"
                   />
               </View>
               <View style={LoginStyle.singleForm}>
                   <AntIcon style={LoginStyle.iconInput} name="unlock" color="red" size={25} />
                   <TextInput
                       style={LoginStyle.input}
                       placeholder="Mật khẩu"
                       underlineColorAndroid="transparent"
                   />
               </View>
               <View style={LoginStyle.singleForm}>
                   <TouchableOpacity>
                   <Button
                       color="#004B8D"
                       style={LoginStyle.button}
                       title="Đăng nhập"
                       onPress={() => Alert.alert('My VNPost', 'Bạn cần phải đăng nhập vào tài khoản để tiếp tục.')}
                   />
                   </TouchableOpacity>
               </View>
               <View style={LoginStyle.forget}>
                   <TouchableOpacity onPress={ForgotPass}>
                        <Text style={{color: '#fff', paddingTop:15}}>Quên mật khẩu?</Text>
                   </TouchableOpacity>
               </View>
               <View style={LoginStyle.seperate}>
                    <View style={LoginStyle.writeBg}></View>
                   <Text
                       style={LoginStyle.textSepara}>
                       Hoặc Đăng Nhập Với
                   </Text>
               </View>
               <View style={LoginStyle.singleForm}>
                   <TouchableOpacity>
                       <Button
                           color="#004B8D"
                           style={LoginStyle.button}
                           title="Đăng Nhập Với PostID"
                           onPress={() => Alert.alert('My VNPost', 'Đăng Nhập Với PostID')}
                       />
                   </TouchableOpacity>
               </View>
                <View style={LoginStyle.groupButton}>
                    <View style={LoginStyle.haftButton}>
                        <AntDesign name="facebook-square" color="#fff" size={25} />
                        <Text style={LoginStyle.textHaftButton}>Facebook</Text>
                    </View>
                    <View style={LoginStyle.haftButton}>
                        <AntDesign name="menufold" color="#fff" size={25} />
                        <Text style={LoginStyle.textHaftButton}>Zalo</Text>
                    </View>
                </View>
               <View style={LoginStyle.lastText}>
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

