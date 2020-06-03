import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Splash from '../screens/Splash';
import Registration from '../screens/Registration';
import ForgotPass from '../screens/ForgotPass';
import Search from '../screens/Search';
import PriceList from '../screens/pricelist/PriceList';
import CommonList from '../screens/pricelist/CommonList';
import EmsList from '../screens/pricelist/EmsList';
import EcodList from '../screens/pricelist/EcodList';
import DvctList from '../screens/pricelist/DvctList';
import QuestionView from '../screens/pricelist/QuestionView';
import QuestionDetail from '../screens/pricelist/QuestionDetail';
import Whatnews from '../screens/pricelist/Whatnews';
import WhatnewsDetail from '../screens/pricelist/WhatnewsDetail';
import InfoApp from '../screens/InfoApp';
import Caculate from '../screens/pricelist/Calculate';

const screens = {
    Splash: {
        screen: Splash,
        navigationOptions: {
            header: null,
        },
    },
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        },
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        },
    },
    ForgotPass: {
        screen: ForgotPass,
        navigationOptions: {
            header: null,
        },
    },
    Registration: {
        screen: Registration,
        navigationOptions: {
            title: 'Đăng Ký Tài Khoản',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#F8A91C',
            },
        },
    },
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'TRA CỨU BƯU CỤC',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#F8A91C',
            },
        },
    },
    PriceList: {
        screen: PriceList,
        navigationOptions: {
            title: 'Bảng giá',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#F8A91C',
            },
        },
    },
    CommonList: {
        screen: CommonList,
        navigationOptions: {
            title: 'Bảng giá thường',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#F8A91C',
            },
        },
    },
    EmsList: {
        screen: EmsList,
        navigationOptions: {
            title: 'Bảng giá EMS',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#F8A91C',
            },
        },
    },
    EcodList: {
        screen: EcodList,
        navigationOptions: {
            title: 'Bảng giá ECOD',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#F8A91C',
            },
        },
    },
    DvctList: {
        screen: DvctList,
        navigationOptions: {
            title: 'Bảng giá DVCT',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#F8A91C',
            },
        },
    },
    QuestionView: {
        screen: QuestionView,
        navigationOptions: {
            title: 'Hỏi đáp',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#F8A91C',
            },
        },
    },
    QuestionDetail: {
        screen: QuestionDetail,
        navigationOptions: {
            header: null,
        },
    },
    Whatnews: {
        screen: Whatnews,
        navigationOptions: {
            title: 'Có gì mới',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#F8A91C',
            },
        },
    },
    WhatnewsDetail: {
        screen: WhatnewsDetail,
        navigationOptions: {
            header: null,
        },
    },
    InfoApp: {
        screen: InfoApp,
        navigationOptions: {
            header: null,
        },
    },
    Caculate: {
        screen: Caculate,
        navigationOptions: {
            title: 'Tính thử cước',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#F8A91C',
            },
        },
    },
};
const HomeStack = createStackNavigator(screens);
export default HomeStack;

