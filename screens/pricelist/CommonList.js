import React, {Component} from 'react';
import { WebView } from 'react-native-webview';

export default class CommonList extends Component {
    render() {
        return (
            <WebView
                source={{uri: 'https://trieuquang204.github.io/banggia/'}}
                style={{marginTop: 20}}
            />
        );
    }
}
