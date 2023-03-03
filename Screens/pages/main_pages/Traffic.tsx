import React, { useCallback, useEffect, useState } from "react"
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
import { IP } from "../../../util/ServerPath"
import axios from "axios"
import TokenDataStorage from "../../../util/TokenDataStorage"
const Traffic =({navigation,route}:any)=>{
    const rotation = useSharedValue(0);
    //const [chart_data, setchart_data] = useState([{x:"1",y:10},{x:"2",y:20},{x:"3",y:30},{x:"4",y:20},{x:"5",y:40},{x:"6",y:40},{x:"7",y:40},{x:"8",y:40},{x:"9",y:40},{x:"10",y:40},{x:"11",y:40},{x:"12",y:40},{x:"13",y:40},{x:"14",y:40},{x:"15",y:40},{x:"16",y:40},{x:"17",y:40},{x:"18",y:40},{x:"19",y:40},{x:"20",y:40},{x:"21",y:40},{x:"22",y:40},{x:"23",y:40},{x:"24",y:40}])
   const [chart_data, setchart_data] = useState([[{x:"0시",y:10,index:0}],[{x:"월요일",y:0}]])


   const [refreshing, setRefreshing] = useState(false);
   const [token, settoken] = useState({access_token:"",refresh_token:"",userId:""})
   const [list_data, listdata] = useState({})
   const [loading, setloading] = useState(false)


   const axios_data =()=>{
      
    setloading(true)
    axios.defaults.headers.common["Authorization"] = `Bearer ${token.access_token}`;
    //setloading((data)=> data = true)
          const Uri = IP+'/today_chart'
          
         // const Uri_p = 'http://10.0.2.2:8080/parent'
         let header ={headers:{"Content-Type":"application/json; charset=utf-8"}}
     
          
          
          axios.post(Uri,token,header).then(function (response) {
            setchart_data(data=> data  = response.data)
            console.log(JSON.stringify(response.data))
            setTimeout(function() {
               setloading(false)
            }, 500);
           
          }).catch(function (error) {
            console.log(error);
            setloading(false)
            setTimeout(function() {
           //   axios_data()
            }, 3000);
            
           //Alert.alert("에러가 발생하였습니다! 다시 로그인해주세요") 
           
          })

          
        
          
      
      
      }
  useEffect(() => {TokenDataStorage.get().then(settoken)
    //axios_data()
  }, [])
  useEffect(() => {axios_data()}, [token])

 /** 
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
  });*/  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    TokenDataStorage.get().then(settoken)
    axios_data()
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
    
    
 <Chart data={chart_data[0]}/>

        <Rbox title={" 요일 별 통계"}/>
       <Chart data={chart_data[1]}/>
 
        </View>
        
        </ScrollView></SafeAreaView>
    </>)
}

export default Traffic