import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';

export default class DvctList extends Component{
    render() {
        return(
            <WebView
                source={{uri: 'https://trieuquang204.github.io/banggia/Dvctprice.html'}}
                style={{marginTop: 20}}
            />
        )
    }
}
