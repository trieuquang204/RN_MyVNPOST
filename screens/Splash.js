import React, {Component} from 'react';
import {View, Text, Image,StyleSheet, ImageBackground} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation'
import {globalStyles} from '../styles/Global';

class Splash extends Component {
  constructor(props) {
      super(props);
      this.state={};
  }
  componentDidMount(){
      setTimeout(() => {
          this.navigateLogin('Home')
      }, 1000);
  }
  navigateLogin = (screen) => {
      const resetAction = StackActions.reset({
          index: 0,
          actions: [
              NavigationActions.navigate({ routeName: screen })
          ]
      });
      this.props.navigation.dispatch(resetAction);
  }

  render() {
      return (
          <View style={styles.container}>

              <Image
                  style={{ height: 150, width: 300 }}
                  source={require("../assets/images/LogoVNpost.png")}
              />

          </View>

      );
  }
}
const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      flexDirection: 'column',
  },
    backgroundImage:{
        width:200,
        height:100,
        backgroundColor: 'red'
  }
})
export default Splash;
