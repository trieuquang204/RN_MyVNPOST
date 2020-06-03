import React, {Component, useState} from 'react';
import {View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';

export default class QuestionView extends Component {
    render() {
        const data = [
            {
                text: 'Khách hàng có máy in làm thế nào để kết nối với mobile?',
                key: 'Hiện tại app chỉ mới hỗ trợ kết nối máy in Bluetooth. Các bước thực hiện như sau:Bước 1 trên mỗi đơn hàng nhấp...',
                title: 'Khách hàng có m...ết nối với Mobile?'
            },
            {
                text: 'Khách hàng báo không tạo đơn hàng được do app hiển thị thông...',
                key: 'Có thể do bưu cục cập nhật mã CRM cho khách hàng, nhưng app của khách hàng chưa cập nhật lại. Bưu tá thông báo với khách hàng logout ra và đăng nhập lại',
                title: 'Khách hàng báo ... chưa có mã CRM'
            },
            {
                text: 'Trên app không có chức năng Cộng Thêm cước vào tiền thu hộ',
                key: 'Trên app có chức năng cộng thêm cước vào tiền thu hộ. Chức năng này sẽ được hiển thị sau khi xác nhận cước phí...',
                title: 'Trên app không c...c vào tiền thu hộ?'
            },
            {
                text: 'Tại sao khi thống kê(tiền COD, tiền cước) ở MCS lại lệch so với ...',
                key: 'Vì trên hệ thống CMS đang thống kê theo ngày tạo đơn hàng , không cùng tiêu chí thống kê với các hệ thống khác',
                title: 'Tại sao khi thống ...c hệ thống khác?'
            },
            {
                text: 'Khách hàng đã tạo đơn hàng trên Mobile thì có nhìn thấy các đơn...',
                key: 'Với hệ thống Mobile và web MCS mới, khách hàng có thể nhìn thấy tất cả các đơn hàng phát sinh từ mã CRM đã được bưu cục cấp ',
                title: 'Khách hàng đã tạ...WEB hay không?'
            },
            {
                text: 'Khách hàng đã đăng ký account và đã được cấp mã CRM thì có...',
                key: 'Khách hàng đã đăng ký account và đã được cấp mã CRM thì không thể chỉnh sửa hoặc đổi sang mã ...',
                title: 'Khách hàng đã đă...RM khác không?'
            },
        ];
        return (
            <View>
                <FlatList
                    data={data}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => navigation.navigate('QuestionDetail', item)}>
                        <View style={style.boder}>
                            <View style={{flex: 1.5}}>
                                <Image source={require('../../assets/images/question.png')} style={style.img}></Image>
                            </View>
                            <View style={{flex: 4.5}}>
                                <Text style={style.textView}>{item.text}</Text>
                                <Text style={{
                                    fontWeight: '200',
                                    color: '#989898',
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                }}>{item.key}</Text>

                                <Text style={{color: '#D9D9D9', fontSize: 9}}>2019/06/05</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}
const style = StyleSheet.create(
    {
        boder: {
            flexDirection: 'row',
            paddingTop: 10,
            marginTop: 20,
            backgroundColor: '#fff',
            paddingBottom: 10,
            elevation: 5,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 10,
        },
        textView:
            {
                flex: 2,
                fontWeight: 'bold',
                flexDirection: 'column',
                paddingLeft: 5,
            },
        img: {
            width: '100%',
            height: '100%',
            flex: 1,
        },
    },
);
