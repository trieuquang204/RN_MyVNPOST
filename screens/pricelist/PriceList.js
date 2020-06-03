import React,{Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {globalStyles} from '../../styles/Global';
import AntDesign from "react-native-vector-icons/AntDesign";
import {LoginStyle} from '../../styles/LoginStyle';

export default class PriceList extends Component{
    render() {
        return(
            <View style={globalStyles.container}>
               <View style={styles.mainList}>
                   <TouchableOpacity onPress={() => navigation.navigate('CommonList')}>
                   <View style={styles.singleLine}>
                        <Text>
                            Chuyển phát thường

                        </Text>
                       <Text>
                           <AntDesign name="right" color="#8A8A8A" size={16} />
                       </Text>
                   </View>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={() => navigation.navigate('EmsList')}>
                   <View style={styles.singleLine}>
                       <Text>
                           Chuyển phát nhanh EMS

                       </Text>
                       <Text>
                           <AntDesign name="right" color="#8A8A8A" size={16} />
                       </Text>
                   </View>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={() => navigation.navigate('EcodList')}>
                   <View style={styles.singleLine}>
                       <Text>
                           Chuyển phát ECOD

                       </Text>
                       <Text>
                           <AntDesign name="right" color="#8A8A8A" size={16} />
                       </Text>
                   </View>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={() => navigation.navigate('DvctList')}>
                   <View style={styles.singleLine}>
                       <Text>
                           Dịch vụ cộng thêm

                       </Text>
                       <Text>
                           <AntDesign name="right" color="#8A8A8A" size={16} />
                       </Text>
                   </View>
                   </TouchableOpacity>

               </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
   mainList: {

   },
    singleLine: {
        height:40,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:15,
        paddingRight:15,
        borderBottomWidth:1,
        borderColor:'#CACACA'
    }
});
