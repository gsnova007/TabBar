import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { Icon, Avatar } from "react-native-elements";
import SecondRoute from "./src/components/SecondRoute";
import FirstRoute from "./src/components/FirstRoute";

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Upload to DMS' },
    { key: 'second', title: 'Upload to claim' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: 'transparent' }}
    />
  );

  return (
    <View style={{flex:1,backgroundColor:'#2c3137'}}>
      <View style={{height:'10%', borderBottomWidth:1, borderBottomColor:'#fff', flexDirection:'row',justifyContent:'space-between', paddingLeft:20, paddingRight:10, alignItems:'center'}}>
        <Icon name="th-large" type="font-awesome" color="#fff"/>
        <Text style={{color:'#fff', fontSize:18, marginLeft:'5%'}}>File Selected</Text>
        <Avatar rounded icon={{name: 'user', type:'font-awesome'}} size={50} overlayContainerStyle={{backgroundColor: 'grey'}}>
          <Avatar.Accessory rounded size={17} name='bars' type='font-awesome' style={{backgroundColor:'#fff'}} color="black"/>
        </Avatar>
      </View>
      <View style={{flex:1}}>
        <StatusBar
          backgroundColor="#2c3137"
          fontColor='#000'
        />
        <View style={{flex:1,backgroundColor:'#2c3137'}}></View>
        <View style={{flex:1, backgroundColor: '#2c3137', padding:'3%'}}>
          <TabView
            navigationState={{ index, routes }}
            renderTabBar={renderTabBar}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: '100%' }}
            swipeEnabled={false}
            style={{backgroundColor:'#2c3137'}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});

export default App;