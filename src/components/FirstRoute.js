import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#2c3137' }}>
        <View style={{flex:1,justifyContent:'center'}}>
            <Text style={{color:'#fff'}}>{'Root > Functional Documents >'}</Text>
        </View>
        <View style={{borderWidth:1,borderColor:'#fff',borderRadius:5,flex:6}}>
            
        </View>
        <View style={{flexDirection:'row',flex:2, justifyContent:'flex-end'}}>
            <TouchableOpacity style={styles.TOButton}>
                <Text style={{color:'#fff'}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TOButton}>
            <Text style={{color:'#fff'}}>Next</Text>
            </TouchableOpacity>
        </View>
    </View>
)

const styles = StyleSheet.create({
    pagerView: {
      height:50,
      backgroundColor:'red',
      borderRadius:5,
    },
    TOButton:{
      height:"60%",
      width:'30%',
      top:'2%',
      marginLeft:'2%',
      alignItems:'center',
      justifyContent:'center',
      borderColor:'#daa020',
      borderRadius:10,
      borderWidth:2,
      backgroundColor:'#917129'
    }
});
export default FirstRoute;