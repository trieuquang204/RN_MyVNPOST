import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';

export default class EmsList extends Component{
    render() {
        return(
            <WebView
                source={{uri: 'https://trieuquang204.github.io/banggia/emsprice.html'}}
                style={{marginTop: 20}}
            />
        )
    }
}
