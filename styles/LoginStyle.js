import {StyleSheet} from "react-native";

export const LoginStyle = StyleSheet.create({
    login_screen: {
        height:'100%',
        paddingLeft:20,
        paddingRight:20,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    navi_register: {
        flexDirection:'row',
        justifyContent:'space-between',
        color:'#fff',
        paddingTop:30
    },
    main_form: {
        alignItems:'center',
        paddingTop: 20
    },
    singleForm: {
        width: '100%',
        position:'relative',
        paddingTop:20
    },
    input: {
        backgroundColor: '#fff',
        borderWidth:0,
        height: 40,
        borderRadius:5,
        paddingLeft:50
    },
    iconInput: {
        position: 'absolute',
        zIndex:2,
        backgroundColor:'#F9F9F9',
        height:'100%',
        paddingLeft: 5,
        paddingRight: 5,
        lineHeight:40,
        borderBottomLeftRadius:5,
        borderTopLeftRadius:5,
        bottom:0
    },
    button: {
        fontWeight:'800',
        fontSize:18,
        borderRadius: 5,
        height:'100%',
        borderWidth: 0,
        shadowColor:'transparent'
    },
    forget: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        width: '100%',
    },
    seperate: {
        width:'100%',
        paddingTop:20
    },
    writeBg: {
        backgroundColor:'#fff',
        height:2,
        width:'100%',
        position:'relative'
    },
    textSepara: {
        color: '#004B8D',
        position:'absolute',
         left:'28%',
        top:10,
        backgroundColor:'#F49E19',
        zIndex:4,
        paddingLeft:10,
        paddingRight:10
    },
    groupButton:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:20,
        paddingBottom:20
    },
    haftButton: {
    flexDirection:'row',
        width:'48%',
        height:40,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:5,
        backgroundColor:'#017BEA'
    },
    textHaftButton: {
        color:'#fff',
        paddingLeft:20,
        fontWeight: 'bold',

    },
    lastText: {
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width:'100%',
        height:'100%'
    }
});

