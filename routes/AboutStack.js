import {createStackNavigator} from 'react-navigation-stack';

import About from '../screens/About';


const screens = {
    AboutStack: {
        screen: About,
        navigationOptions: {
            title: 'About GameZone',
            headerStyle: {
                backgroundColor:'red'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    },
}
const AboutStack = createStackNavigator(screens);
export default AboutStack;

