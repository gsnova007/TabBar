import React, {useState, useRef} from 'react';
import {StyleSheet, View, Text, Switch, TouchableOpacity} from 'react-native';
import ClaimType from './ClaimType';
import SubClaimType from './SubClaimType';
import { Icon } from "react-native-elements";


const SecondRoute = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(
      <View>
        <View style={{flexDirection:'row', paddingVertical:'3%', alignItems:'center'}}>
          <Switch
            trackColor={{ false: "#767577", true: "#767577" }}
            thumbColor={isEnabled ? "#f9b31d" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={{color:'#fff',marginLeft:'2%',marginTop:'-1%'}}>{isEnabled ? "New Claim" : "Existing Claim"} {isEnabled}</Text>
        </View>
        <ClaimType text="Claim Type" enable={isEnabled}/>
        <View style={{height:'5%'}}></View>
        <SubClaimType text="Sub Claim Type" enable={isEnabled}/>
        <View style={{height:'5%'}}></View>
        <TouchableOpacity style={styles.TOButton}>
          <Text style={{color:'#fff'}}>Next</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
pagerView: {
  height:50,
  backgroundColor:'red',
  borderRadius:5,
},
TOButton:{
  height:50,
  width:150,
  alignItems:'center',
  justifyContent:'center',
  borderColor:'#daa020',
  borderRadius:10,
  borderWidth:2,
  backgroundColor:'#917129',
  alignSelf:'flex-end'
}
});

export default SecondRoute;