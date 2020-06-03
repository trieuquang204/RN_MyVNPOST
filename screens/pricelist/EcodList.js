import React, { Component } from 'react';
import {WebView} from 'react-native-webview';

export default class EcodList extends Component{
    render() {
        return(
            <WebView
                source={{uri: 'https://trieuquang204.github.io/banggia/emsprice.html'}}
                style={{marginTop: 20}}
            />
        )
    }
}
