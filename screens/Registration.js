import React,{Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import {globalStyles} from '../styles/Global';
import {LoginStyle} from '../styles/LoginStyle';
import AntIcon from 'react-native-vector-icons/AntDesign';
import CheckBox from 'react-native-check-box'




export default class Registration extends  Component{
    constructor(){
        super();
        this.state={
            isChecked:true,
        }
    }
   render() {
    return (
        <View style={globalStyles.container}>
            <View style={styles.account}>
                <Text>Tài khoản <Text style={{color: 'red'}}>(*) </Text>:</Text>
                <View style={[LoginStyle.singleForm, {paddingTop: 10}]}>
                    <AntIcon style={[LoginStyle.iconInput, {
                        borderColor: 'red',
                        borderLeftWidth: 1,
                        borderTopWidth: 1,
                        borderBottomWidth: 1
                    }]} name="addusergroup" color="red" size={20}/>
                    <TextInput
                        style={[LoginStyle.input, {borderWidth: 1, borderColor: 'red'}]}
                        placeholder="Số điện thoại..."
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.group_check}>
                    <CheckBox
                        onClick={()=>{
                            this.setState({
                                isChecked:!this.state.isChecked
                            })
                        }}
                        isChecked={this.state.isChecked}
                        checkBoxColor={'#fff'}
                        checkedCheckBoxColor={'#B5B5B5'}
                        uncheckedCheckBoxColor={'#B5B5B5'}
                    />
                    <Text style={styles.Regulations}>Tôi đồng ý với <Text style={{color:'blue'}}>Quy định và điều khoản</Text>sử dụng của VNPost</Text>
                </View>
                <Button
                    color="#B5B5B5"
                    title="Lấy Mã OTP"
                    onPress={() => Alert.alert('My VNPost', 'Chưa có dữ liệu')}
                />
            </View>
        </View>
    );
}
}

const styles = StyleSheet.create({
   account: {
       height:'100%',
       paddingLeft:20,
       paddingRight:20,
       paddingTop:30
   },
    group_check: {
        flexDirection:'row',
        paddingTop: 20,
        paddingBottom:20
    },
    Regulations: {
        width: 0,
        flexGrow: 1,
        textAlign: 'center',
        color:'#B5B5B5'
    }
});
