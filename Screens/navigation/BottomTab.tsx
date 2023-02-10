
import "react-native-gesture-handler"
import { LayoutChangeEvent, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Main from "../pages/main_pages/Main";
import Icon from "react-native-vector-icons/Ionicons"
import CustomTabBarButton from "./CustomTabBarButton";
import { main } from "../../style/NS";
import Svg, { Circle, Path } from "react-native-svg";
import Animated, { Easing, FadeInUp, FadeOutDown, Layout, useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withSequence, withSpring, withTiming } from "react-native-reanimated";
import PagerView from 'react-native-pager-view';
import ParkingList from "../pages/main_pages/ParkingList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useReducer, useRef, useState } from "react";
import MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { BottomTabBar, BottomTabBarProps, BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import Traffic from "../pages/main_pages/Traffic";
import Safety from "../pages/main_pages/Safety";
import CarLog from "../pages/main_pages/CarLog";
import Account from "../pages/main_pages/Account";
import TokenDataStorage from "../../util/TokenDataStorage";
//const menu_items =  [{route:"Main",icon:"home",component:Main},{route:"Traffic",icon:"settings",component:Main},{route:"Safety",icon:"wallet",component:Main},{route:"Account",icon:"md-notifications-sharp",component:Main},{route:"CarLog",icon:"md-notifications-sharp",component:Main}]
   


const BottomTab =({navigation}:any)=>{
    const Tab = createMaterialTopTabNavigator();
    const rotation = useSharedValue(0);
    const rotation2 = useSharedValue(0);

    rotation.value = withSequence(

 
        //withTiming(-10, { duration: 300 }),
        //withRepeat(withTiming(0.2, { duration: 100 }), 6, true),
       
        withTiming(-1 * 10, {
        duration: 200,

      }),
      );
      rotation2.value = withSequence(
 
        //withTiming(-10, { duration: 300 }),
        //withRepeat(withTiming(0.2, { duration: 100 }), 6, true),
        withSpring(30),
          
      );
  const animatedStyle = useAnimatedStyle(() => {
    
    return {
     
      transform: [{ translateY:rotation.value }],
    };
  });
  const animatedStyle2 = useAnimatedStyle(() => {
    
    return {
      transform: [{ translateX:rotation.value },{scale:1}],
    };
  });
 
 

   


    return(<>

<Tab.Navigator
      // tabBar={(props) => <AnimatedTabBar {...props} />}
     tabBarPosition="bottom"
     
     style={{backgroundColor:"white"}}
      screenOptions={{lazy:true, tabBarStyle:{backgroundColor:"#0073F0", position:"absolute",bottom:0,left:0,right:0,borderTopLeftRadius:5,borderTopRightRadius:5},
      tabBarIconStyle: { width: heightPercentageToDP('10%') },
      tabBarLabelStyle:{opacity:0.8, fontFamily:"GmarketSansTTFMedium",fontWeight:"300"}
      ,tabBarShowLabel:false,tabBarActiveTintColor:"#3D5CFF",
      tabBarContentContainerStyle:{height:heightPercentageToDP("10%")},
      tabBarInactiveTintColor:"#B8B8D2",}}
      
    >
     <Tab.Screen name ={"Main"} component={Main} options={{
    tabBarIcon:({color,size,focused}:any)=>{return <><Animated.View style={[{alignItems:"center",borderRadius:150},focused?animatedStyle:{}]}><Icon size={heightPercentageToDP("3%")} name={"home"} color={color} />{focused?<Text style={{fontSize:10,marginTop:5, textAlign:"center",fontWeight:"400",opacity:0.9,color:color}}>home</Text>:<></>}</Animated.View></>},    
//tabBarButton: props => <CustomTabBarButton {... props}/>
}}

/>
<Tab.Screen name ={"Traffic"} component={Traffic} options={{
    tabBarIcon:({color,size,focused}:any)=>{return <><Animated.View style={[{alignItems:"center",borderRadius:150, },focused?animatedStyle:{}]}><Icon size={heightPercentageToDP("3%")} name={"settings"} color={color} />{focused?<Text style={{fontSize:10,marginTop:5, textAlign:"center",fontWeight:"400",opacity:0.9,color:color}}>Traffic</Text>:<></>}</Animated.View></>},    
//tabBarButton: props => <CustomTabBarButton {... props}/>
}}/>
<Tab.Screen name ={"Safety"} component={Safety} options={{
    tabBarIcon:({color,size,focused}:any)=>{return <><Animated.View style={[{alignItems:"center",borderRadius:150, },focused?animatedStyle:{}]}><Icon size={heightPercentageToDP("3%")} name={"wallet"} color={color} />{focused?<Text style={{fontSize:10,marginTop:5, textAlign:"center",fontWeight:"400",opacity:0.9,color:color}}>Safety</Text>:<></>}</Animated.View></>},    
//tabBarButton: props => <CustomTabBarButton {... props}/>
}}/>
<Tab.Screen name ={"CarLog"} component={CarLog} options={{
    tabBarIcon:({color,size,focused}:any)=>{return <><Animated.View style={[{alignItems:"center",borderRadius:150, },focused?animatedStyle:{}]}><Icon size={heightPercentageToDP("3%")} name={"md-notifications-sharp"} color={color} />{focused?<Text style={{fontSize:10,marginTop:5, textAlign:"center",fontWeight:"400",opacity:0.9,color:color}}>CarLog</Text>:<></>}</Animated.View></>},    
//tabBarButton: props => <CustomTabBarButton {... props}/>
}}
initialParams={navigation}
/>
<Tab.Screen name ={"Account"} component={Account} options={{
    tabBarIcon:({color,size,focused}:any)=>{return <><Animated.View style={[{alignItems:"center",borderRadius:150, },focused?animatedStyle:{}]}><Icon size={heightPercentageToDP("3%")} name={"md-notifications-sharp"} color={color} />{focused?<Text style={{fontSize:9,marginTop:5, textAlign:"center",fontWeight:"400",opacity:0.9,color:color}}>Account</Text>:<></>}</Animated.View></>},    
//tabBarButton: props => <CustomTabBarButton {... props}/>
}}/>

      
    </Tab.Navigator>

    </>)
}
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#0073F0',
  },
  activeBackground: {
    
    position: 'absolute',
  },
  tabBarContainer: {
    
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  component: {
    height: 60,
    width: 60,
    marginTop: -5,
  },
  componentCircle: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: 36,
    width: 36,
  }
})
export default BottomTab