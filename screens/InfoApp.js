import React from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/Global';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function InfoApp({navigation}) {


    return(
        <View style={globalStyles.container}>
             <View style={{flex:40, backgroundColor:'red'}}>
                 <ImageBackground source={require('../assets/images/bg_info.png')} style={{width: '100%', height: '100%'}}>
                    <View style={{paddingTop:45, paddingLeft:10}}>

                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                           <AntDesign name="arrowleft" size={20} color="#fff"/>
                        </TouchableOpacity>

                    </View>
                 </ImageBackground>
             </View>
            <View style={{flex:60,paddingTop:30, paddingLeft:10, paddingRight:10, paddingBottom:10, backgroundColor:'#fff'}}>
                <Text style={{paddingBottom:20}}>
                    Các dịch vụ My VNPost cung cấp: Dịch vụ chuyển phát nhanh EMS, Dịch vụ chuyển phát thường, Dịch vụ phát hàng thu tiền hộ(COD)
                </Text>
                <Text style={{paddingBottom:20}}>
                    Với nỗ lực không ngừng nâng cao chất lượng dịch vụ, My VNPost là ứng dụng công nghệ mới nhất của VNPost để giúp cho khách hàng những trải nghiệm tốt nhất và gửi trọn niềm tin.
                </Text>
                <Text style={{paddingBottom:20}}>
                    Lưu ý: ứng dụng yêu cầu kết nối wifi hoặc 3G
                </Text>
                <Text style={{paddingBottom:30}}>
                    Thông tin liên hệ:
                </Text>
                <Text style={{paddingBottom:30}}>
                    Hotline: 1900 54 54 81
                </Text>
                <Text style={{paddingBottom:20}}>
                    Website: http://donhang.vnpost.vn
                </Text>
                <Text style={{color:'blue'}}>Hướng dẫn sử dụng app</Text>
            </View>
        </View>
    )
}

