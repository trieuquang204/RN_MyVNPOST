import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Alert, ScrollView} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Caculate extends Component {
    render() {
        return (
            <ScrollView>
            <View style={{flex: 1, backgroundColor: '#F2F2F2', padding: 10, paddingBottom:100}}>
                <View style={{borderWidth: 1, borderColor: '#DCDCDC', padding: 15, height:'auto'}}>
                    <View style={styles.singForm}>
                        <Text style={{fontWeight: 'bold'}}>Thử tính cước</Text>
                        <Text style={{paddingTop: 10, paddingBottom: 10}}>Địa chỉ gửi(Quận Huyện - Tỉnh Thành
                            Phố)</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nhập địa chỉ gửi"
                            underlineColorAndroid="transparent"
                        />
                    </View>

                    <View style={styles.singForm}>
                        <Text style={{fontWeight: 'bold', paddingTop: 20}}>Thử tính cước</Text>
                        <Text style={{paddingTop: 10, paddingBottom: 10}}>Địa chỉ gửi(Quận Huyện - Tỉnh Thành
                            Phố)</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nhập địa chỉ nhận"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.twoForm}>
                        <View style={styles.halfForm}>
                            <Text style={{paddingTop: 20, paddingBottom: 20}}>Khối lượng</Text>
                            <View style={{position: 'relative', paddingRight: 10}}>
                                <Text style={{
                                    backgroundColor: '#E6E6E6',
                                    height: 40,
                                    width: 30,
                                    textAlign: 'center',
                                    lineHeight: 40,
                                    right: 10,
                                    bottom: 0,
                                    position: 'absolute',
                                }}>g</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Nhập khối lượng"
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                        </View>

                        <View style={styles.halfForm}>
                            <Text style={{paddingTop: 20, paddingBottom: 20}}>Số tiền COD(nếu có)</Text>
                            <View style={{position: 'relative'}}>
                                <Text style={{
                                    backgroundColor: '#E6E6E6',
                                    height: 40,
                                    width: 30,
                                    textAlign: 'center',
                                    lineHeight: 40,
                                    right: 0,
                                    bottom: 0,
                                    position: 'absolute',
                                }}>g</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Nhập số tiền COD"
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                        </View>
                    </View>
                    <Text style={{paddingTop: 10, paddingBottom: 10}}>
                        Thể tích(Chiều dài - Chiều rộng - Chiều cao) (cm)
                    </Text>
                    <View style={{flexDirection:'row',}}>

                        <View style={{flex: 33.333}}>
                            <TextInput
                                style={styles.input}
                                placeholder="Chiều dài"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={{flex: 33.333, paddingRight:5, paddingLeft:5}}>
                            <TextInput
                                style={styles.input}
                                placeholder="Chiều rộng"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={{flex: 33.333}}>
                            <TextInput
                                style={styles.input}
                                placeholder="Chiều cao"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                    <View style={{paddingTop:20}}>
                        <Button
                            color="#FFA31A"
                            title="Tính cước"
                            onPress={() => Alert.alert('My VNPost', 'Chưa có dữ liệu')}
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={() => Alert.alert('My VNPost', 'Chưa có dữ liệu')}>
                <View style={styles.singleText}>
                    <View><Text style={{color:'#ACACAC'}}>Chuyển phát thường</Text></View>
                    <View style={{flexDirection: 'row',}}>
                        <FontAwesome name="circle-thin" color="#ACACAC" size={13} />
                        <AntDesign name="right" color="#ACACAC" size={13} />
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('My VNPost', 'Chưa có dữ liệu')}>
                <View style={styles.singleText}>
                    <View><Text style={{color:'#ACACAC'}}>Chuyển phát nhanh EMS</Text></View>
                    <View style={{flexDirection: 'row',}}>
                        <FontAwesome name="circle-thin" color="#ACACAC" size={13} />
                        <AntDesign name="right" color="#ACACAC" size={13} />
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('My VNPost', 'Chưa có dữ liệu')}>
                <View style={styles.singleText}>
                    <View><Text style={{color:'#ACACAC'}}>Chuyển phát ECOD</Text></View>
                    <View style={{flexDirection: 'row'}}>
                        <FontAwesome name="circle-thin" color="#ACACAC" size={13} />
                        <AntDesign name="right" color="#ACACAC" size={13} />
                    </View>
                </View>
                </TouchableOpacity>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: '#FFA31A',
        borderRadius: 5,
        fontSize: 12,
    },
    twoForm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfForm: {
        flex: 50,
    },
    singleText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        lineHeight:40,
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
        borderColor: '#000',
        borderBottomWidth:1,
    }
});
