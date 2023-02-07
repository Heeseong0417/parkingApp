import React, { useState } from "react"
import { Button, SafeAreaView, ScrollView, Text, View } from "react-native"
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
import Chart from "./object/Chart"
const Traffic =({navigation,route}:any)=>{
    const rotation = useSharedValue(0);
    const [chart_data, setchart_data] = useState([{x:"dddd",y:10},{x:"dddd2",y:20},{x:"dddd3",y:30},{x:"dddd4",y:20},{x:"dddd5",y:40}])
    rotation.value = withSequence(
 
        //withTiming(-10, { duration: 300 }),
        withRepeat(withTiming(1, { duration: 200 }), 6, true),
       
        withRepeat(withTiming(2, {
        duration: 200,

      }))
      );
   
  const animatedStyle = useAnimatedStyle(() => {
    
    return {
     
      transform: [{ translateY:rotation.value }],
    };
  });


    return(<>
      <SafeAreaView style={{backgroundColor:"white",flex:1,marginBottom:heightPercentageToDP("10%")}}>
    
    <Header nav={navigation.reset} route={route} subtitle={"공동 주택 주차 관제 시스템"}/>
       
      <ScrollView style={{flex:1,flexDirection:"column"}}>
    
    
    <View style={[{flex:1,margin:10,padding:10,opacity:1}]}>
        <Rbox title={"시간대 별 통계"}/>
    
    
 <Chart data={chart_data}/>

        <Rbox title={" 요일 별 통계"}/>
       <Chart data={chart_data}/>
 
        </View>
        
        </ScrollView></SafeAreaView>
    </>)
}

export default Traffic