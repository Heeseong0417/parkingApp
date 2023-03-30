import React, { useCallback, useEffect, useState } from "react"
import { Button, SafeAreaView, ScrollView, Text, View, Image, RefreshControl } from "react-native"
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
import axios from "axios"
import TokenDataStorage from "../../../util/TokenDataStorage"
import { IP } from "../../../util/ServerPath"
import toDay from "./object/Today_time"
import StorageSave from "../../../util/StorageSave"
import Chart_risk from "./object/Chart_risk"
import Chart_riskcar from "./object/Chart_riskcar"

const Safety =({navigation,route}:any)=>{


  const [refreshing, setRefreshing] = useState(false);
  const [token, settoken] = useState({access_token:"",refresh_token:"",userId:""})
  const [list_data, listdata] = useState({"h0":0,"h1":0,"h2":0,"h3":0,"h4":0,"h5":0,"h6":0,"h7":0,"h8":0,"h9":0,"h10":0,"h11":0,"h12":0,"h13":0,"h14":0,"h15":0,"h16":0,"h17":0,"h18":0,"h19":0,"h20":0,"h21":0,"h22":0,"h23":0})
  const [loading, setloading] = useState(false)
  const [list_item, setlist_item] = useState(0)
  const [alldatas, setalldatas] = useState({risk:0,"totalRisk":'[{"x":"0 시","y":0}]'})
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    TokenDataStorage.get().then(settoken)
    StorageSave.get().then(setalldatas)
    //axios_data()
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const axios_data =()=>{
      
    setloading(true)
    axios.defaults.headers.common["Authorization"] = `Bearer ${token.access_token}`;
    //setloading((data)=> data = true)
          const Uri = IP+'/main_pages'
          const Uri2 = IP+'/safety_risk'
         // const Uri_p = 'http://10.0.2.2:8080/parent'
         let header ={headers:{"Content-Type":"application/json; charset=utf-8"}}

          
          
          axios.post(Uri,toDay(),header).then(function (response) {
            const result =response.data
            StorageSave.set(result).catch(console.error);
            /** 
            setlist_item(data=> data  = result["risk"])
            //console.log(JSON.stringify(response.data))**/
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
          axios.post(Uri2,toDay(),header).then(function (response) {
            const result =response.data[0]
            delete result.date
            delete result.riskcount
            console.log("result risk : ",result)
            listdata(data=>data=result)
            /** 
            setlist_item(data=> data  = result["risk"])
            //console.log(JSON.stringify(response.data))**/
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
    StorageSave.get().then(setalldatas)
    //axios_data()
  }, [])
useEffect(() => {axios_data()}, [token])
    return(<>
       <SafeAreaView style={{backgroundColor:"white",flex:1,marginBottom:heightPercentageToDP("10%")}}>
    
    <Header nav={navigation.reset} route={route} subtitle={"공동 주택 주차 관제 시스템"}/>
       
      <ScrollView style={{flex:1,flexDirection:"column"}} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
    
    
    <View style={[{flex:1,margin:10,padding:10,opacity:1}]}>
    <Rbox title={" 교통 위험도"}/>
    <View style={{flex:1,alignItems:"center",justifyContent:"center",marginTop:30}}>
<Text>
</Text>
<CircularProgress
  value={alldatas["risk"]*100}
  radius={120}
  duration={2000}
  showProgressValue={false}
  progressValueColor={'black'}
  maxValue={100}
  activeStrokeColor={alldatas["risk"] ==1 ?"green":alldatas["risk"]==2?"orange":alldatas["risk"]==3?"yellow":"red"}
  title={alldatas["risk"] ==1 ?"안전":alldatas["risk"]==2?"주의":alldatas["risk"]==3?"위험":"심각"}
  titleColor={'black'}
  titleStyle={{fontWeight: 'bold'}}
/>

</View>

<Rbox title={"시간별, 위험도 및 위험차량 대수"}/>

<Chart_risk data={JSON.parse(alldatas["totalRisk"])} title ={"시간별 위험도"}/>
<Chart_riskcar data={list_data} title ={"시간별 위험 차량 대수"}/>

    </View>
    </ScrollView></SafeAreaView>
    </>)
}

export default Safety