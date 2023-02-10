import React, { useState } from "react"
import { Button, SafeAreaView, ScrollView, Text, View, Image } from "react-native"
import Animated, { FadeInUp, FadeOutDown, Layout, useAnimatedProps, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withSpring, withTiming } from "react-native-reanimated"
import Svg, { Path } from "react-native-svg"
import Header from "../header/Header"
import Title from "./object/Title"
import CircularProgress from 'react-native-circular-progress-indicator';
import  { VictoryChart,VictoryBar,VictoryTheme, VictoryLine }  from "victory-native"
import { main, width_ } from "../../../style/NS"
import * as Progress from 'react-native-progress';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Board from "./object/Board"
import HeaderBottom from "../header/HeaderBottom"
import Today from "./object/Today"
import Rbox from "./object/Rbox"
import risk from "../../../assets/images/risk.png"
import Datalist from "./object/Datalist"

const CarLog =({navigation,route}:any)=>{
const [list_data, setlist_data] = useState([{date:"2023/2/7 18:08:03",division:"입차",carNum:"38가1234",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPgPbNgyx2V4gVrVfODdRx6QYTAI2-0StHn6vcVQ5g3A&s"},{date:"2023/2/7 18:08:04",division:"입차",carNum:"38가1234",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEIeErVV0A09NEtN_bQrZOcDLXK8PBQWC3XWqpcwjmww&s"},{date:"2023/2/7 18:08:11",division:"입차",carNum:"38가1234",image:""}])
    return(<>
     <SafeAreaView style={{backgroundColor:"white",flex:1,marginBottom:heightPercentageToDP("10%")}}>
    
    <Header nav={navigation.reset} route={route} subtitle={"공동 주택 주차 관제 시스템"}/>
       
      <ScrollView style={{flex:1,flexDirection:"column"}}>
    
    
    <View style={[{flex:1,margin:10,padding:10,opacity:1}]}>
    <Rbox title={"나의 주차 정보"}/>
    <View style={{flex:1,alignItems:"center",justifyContent:"center",marginTop:30}}>
      <Datalist list_item={list_data} navigation={route.params.navigate}/>
    </View></View></ScrollView>
    </SafeAreaView>
    </>)
}
export default CarLog