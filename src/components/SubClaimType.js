import React, {useState} from 'react';
import { TouchableOpacity } from 'react-native';
import {StyleSheet, View, Text, Switch, Animated, TouchableWithoutFeedback, Modal, Button } from 'react-native';
import { Icon } from "react-native-elements";

const SubClaimType = ({text, enable}) => {
    const [Width1,setWidth1] = useState({value:false, width: new Animated.Value(100)});
    const [ModalVisibility, setModalVisibility] = useState(false)

    const ViewHeight1 = () =>{
      if(Width1.value)
      {
        Animated.timing(
          Width1.width,
          {
            toValue: 100,
            duration: 200,
            useNativeDriver: false
          }
        ).start(()=>setWidth1({...Width1, value:false}));
      }
      else{
        Animated.timing(
          Width1.width,
          {
            toValue: 50,
            duration: 200,
            useNativeDriver: false
          }
        ).start(()=>setWidth1({...Width1, value:true}));
      }
    }

    if(!enable){
        return(
            <View>
                <TouchableWithoutFeedback onPress={() => {ViewHeight1(); setModalVisibility(true);}}>
                    <Animated.View style={{...styles.pagerView, width: JSON.stringify(Width1.width)+'%'}}>
                        <Text style={{color:'#fff'}}>{text}</Text>
                        <Icon name='caretdown' type='antdesign' color='#fff' size={12}/>
                    </Animated.View>
                </TouchableWithoutFeedback>
                <Modal animationType="fade" transparent={true} visible={ModalVisibility}>
                    <View style={styles.modal}>
                        <View style={styles.modalcontent}>
                        <View style={{borderBottomWidth:1,borderBottomColor:'#dfdfdf',paddingBottom:'2%'}}>
                                <View style={{flexDirection:'row', justifyContent:'space-between',paddingVertical:'1%'}}>
                                    <View>
                                        <Text style={styles.text1}>Sub Claim Type</Text>
                                        <Text style={styles.text2}>Travel</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.text1}>Purpose</Text>
                                        <Text style={styles.text2}>Purpose 1</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.text1}>Claim ID</Text>
                                        <Text style={styles.text2}>C000024</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.text1}>Description</Text>
                                    <Text style={styles.text2}>Cab to hotel</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.modalbutton}>
                            <TouchableOpacity style={styles.modalTO} onPress={()=>{ViewHeight1(); setModalVisibility(false)}}>
                                <Text style={{fontSize:15}}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
    else{
        return(
            <TouchableWithoutFeedback disabled={enable} onPress={() => {ViewHeight1(); setModalVisibility(true);}}>
                <Animated.View style={{...styles.pagerView, width: JSON.stringify(Width1.width)+'%', backgroundColor:'#31363c'}}>
                    <Text style={{color:'#74787c'}}>{text}</Text>
                    <Icon name='caretdown' type='antdesign' color='#74787c' size={12}/>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    pagerView: {
      height:50,
      backgroundColor:'#42464b',
      borderRadius:5,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal:'5%',
    },
    modal:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    modalbutton:{
        marginHorizontal:'3%',
        backgroundColor:'#fff',
        borderRadius:10,
        overflow:'hidden',
        height:'5%',
        width:'95%'
    },
    modalTO:{
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    modalcontent:{
        height:'25%',
        width:'95%',
        backgroundColor:'#fff',
        marginBottom:'2%',
        borderRadius:10,
        padding:'5%'
    },
    text1:{
        color: '#4ca9d6',
        fontSize: 10
    },
    text2:{
        color: '#0084c4',
    },
});

export default SubClaimType;