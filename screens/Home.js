import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Platform, ImageBackground, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageSlider from 'react-native-image-slider';
import {globalStyles} from '../styles/Global';

import Slider1 from '../assets/images/image_slider1.png';
import Slider2 from '../assets/images/image_slider2.png';

const mySlider = [
    Slider1, Slider2,
];

export default class Home extends Component {
    componentDidMount() {
        window.navigation = this.props.navigation;
    }


    render() {
        return (
            <View style={globalStyles.container}>
                <View style={styles.header}>
                    <ImageBackground
                        style={styles.image}
                        source={require('../assets/images/bg_header.png')}
                        imageStyle={{resizeMode: 'cover'}}
                    >
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.login}> <Icon name="user" size={20} color="#fff"/> Login</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.slider}>
                    <ImageSlider images={mySlider}/>
                </View>
                <View style={styles.all_colums}>

                    <View style={[styles.single_colum, {borderRightWidth: 1, borderRightColor: '#D8D8D8'}]}>
                        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                            <View style={styles.item}>
                                <Image
                                    style={styles.icon_image}
                                    source={require('../assets/images/icon1.png')}
                                />
                                <Text style={styles.textHome}>Tra cứu bưu {'\n'} cục </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Whatnews')}>
                        <View style={styles.item}>
                            <Image
                                style={styles.icon_image}
                                source={require('../assets/images/icon4.png')}
                            />
                            <Text style={styles.textHome}>Có gì mới</Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.single_colum]}>
                        <TouchableOpacity onPress={() => navigation.navigate('PriceList')}>
                            <View style={styles.item}>
                                <Image
                                    style={styles.icon_image}
                                    source={require('../assets/images/icon2.png')}
                                />
                                <Text style={styles.textHome}>Bảng giá </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('InfoApp')}>
                        <View style={[styles.item, {borderRightColor: '#D8D8D8', borderRightWidth: 1}]}>
                            <Image
                                style={styles.icon_image}
                                source={require('../assets/images/icon5.png')}
                            />
                            <Text style={styles.textHome}>Thông tin ứng {'\n'} dụng</Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.single_colum}>
                        <TouchableOpacity onPress={() => navigation.navigate('QuestionView')}>
                            <View style={styles.item}>
                                <Image
                                    style={styles.icon_image}
                                    source={require('../assets/images/icon3.png')}
                                />
                                <Text style={styles.textHome}>Hỏi đáp </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Caculate')}>
                        <View style={styles.item}>
                            <Image
                                style={styles.icon_image}
                                source={require('../assets/images/icon6.png')}
                            />
                            <Text style={styles.textHome}>Tính thử cước</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        flex: 1.4,
    },
    login: {
        color: '#fff',
        fontSize: 16,
        paddingTop: 55,
    },
    image: {
        width: '100%',
        height: 95,
    },
    slider: {
        flex: 4,
    },
    all_colums: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        flex: 4,
    },
    single_colum: {
        width: '33.3333%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHome: {
        fontSize: 13,
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        color: '#5C5D7E',
        textAlign: 'center',
    },
    item: {
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
    },

});
