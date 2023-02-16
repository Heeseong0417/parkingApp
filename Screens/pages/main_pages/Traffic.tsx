import React, { useCallback, useState } from "react"
import { Button, RefreshControl, SafeAreaView, ScrollView, Text, View } from "react-native"
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
    //const [chart_data, setchart_data] = useState([{x:"1",y:10},{x:"2",y:20},{x:"3",y:30},{x:"4",y:20},{x:"5",y:40},{x:"6",y:40},{x:"7",y:40},{x:"8",y:40},{x:"9",y:40},{x:"10",y:40},{x:"11",y:40},{x:"12",y:40},{x:"13",y:40},{x:"14",y:40},{x:"15",y:40},{x:"16",y:40},{x:"17",y:40},{x:"18",y:40},{x:"19",y:40},{x:"20",y:40},{x:"21",y:40},{x:"22",y:40},{x:"23",y:40},{x:"24",y:40}])
   const [chart_data, setchart_data] = useState([{x:"0시",y:10,index:0},{x:"1시",y:20,index:1},{x:"2시",y:20,index:2},{x:"3시",y:20,index:3},{x:"4시",y:20,index:4},,{x:"5시",y:20,index:5},{x:"6시",y:20,index:6}])
   const [refreshing, setRefreshing] = useState(false);
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
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

    return(<>
      <SafeAreaView style={{backgroundColor:"white",flex:1,marginBottom:heightPercentageToDP("10%")}} >
    
    <Header nav={navigation.reset} route={route} subtitle={"공동 주택 주차 관제 시스템"}/>
       
      <ScrollView style={{flex:1,flexDirection:"column"}} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
    
    
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