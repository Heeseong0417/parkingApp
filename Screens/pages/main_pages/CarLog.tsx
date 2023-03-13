import React, { useCallback, useEffect, useState } from "react"
import { Button, SafeAreaView, ScrollView, Text, View, Image, RefreshControl, Alert } from "react-native"
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
import TokenDataStorage from "../../../util/TokenDataStorage"
import Spinner from "react-native-loading-spinner-overlay/lib"
import axios from "axios"
import { IP } from "../../../util/ServerPath"

const CarLog =({navigation,route}:any)=>{
  const [token, settoken] = useState({access_token:"",refresh_token:"",userId:""})
  const [loading, setloading] = useState(false)
//const [list_data, setlist_data] = useState([{date:"2023/2/7 18:08:03",division:"입차",carNum:"38가1234",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPgPbNgyx2V4gVrVfODdRx6QYTAI2-0StHn6vcVQ5g3A&s"},{date:"2023/2/7 18:08:04",division:"입차",carNum:"38가1234",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEIeErVV0A09NEtN_bQrZOcDLXK8PBQWC3XWqpcwjmww&s"},{date:"2023/2/7 18:08:11",division:"입차",carNum:"38가1234",image:""}])
const [list_data, setlist_data] = useState([{"입차_시간":"2023/2/7 18:08:03","입차_요일":"월요일","입차_이미지":"","입차_일":"","체류시간":"","출차_시간":"2023/2/7 18:08:03","출차_요일":"월요일","출차_이미지":"","출차_일":""}])
const toDay = () => {
  const now = new Date(); // 현재 시간
  const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000); // 현재 시간을 utc로 변환한 밀리세컨드값
  const koreaTimeDiff = 9 * 60 * 60 * 1000; // 한국 시간은 UTC보다 9시간 빠름(9시간의 밀리세컨드 표현)
  const date = new Date(utcNow + koreaTimeDiff); // utc로 변환된 값을 한국 시간으로 변환시키기 위해 9시간(밀리세컨드)를 더함
  var week = new Array('일', '월', '화', '수', '목', '금', '토');

  var localTime = date.toTimeString().substring(0,8);

  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDate();
  var dayName = week[date.getDay()];

  let result = {'date':year+'-'+("00"+month.toString()).slice(-2)+'-'+("00"+day.toString()).slice(-2),"week":dayName,'time':localTime}
  
     console.log(result)
  return result
  //return year+'/'+month+'/'+day+'/'+dayName+'-'+localTime;
}
const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    TokenDataStorage.get().then(settoken)
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
const axios_data =()=>{
      
  setloading(true)
  console.log("token !!!!:",token.access_token)
  axios.defaults.headers.common["Authorization"] = `Bearer ${token.access_token}`;
  //setloading((data)=> data = true)
        const Uri = IP+'/parking_list'
       // const Uri_p = 'http://10.0.2.2:8080/parent'
       let header ={headers:{"Content-Type":"application/json; charset=utf-8"}}
   
        
        
        axios.post(Uri,toDay(),header).then(function (response) {
          setlist_data(data=> data  = response.data)
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
    useEffect(() => {
     
      axios_data()}, [token])
    return(<>
     <SafeAreaView style={{backgroundColor:"white",flex:1,marginBottom:heightPercentageToDP("10%")}}>
     <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={{color:"white"}}
        />
    <Header nav={navigation.reset} route={route} subtitle={"공동 주택 주차 관제 시스템"}/>
       
      <ScrollView style={{flex:1,flexDirection:"column"}} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
    
  
    <View style={[{flex:1,margin:10,padding:10,opacity:1}]}>
    <Rbox title={"나의 주차 정보"}/>
    <View style={{flex:1,alignItems:"center",justifyContent:"center",marginTop:30}}>
      <Datalist list_item={list_data} navigation={route.params.navigate}/>
    </View></View>
    
    
    </ScrollView>
    </SafeAreaView>
    </>)
}
export default CarLog