import React, { useCallback, useEffect, useState } from "react"
import { Alert, Button, RefreshControl, SafeAreaView, ScrollView, Text, View } from "react-native"
import Animated, { FadeInUp, FadeOutDown, Layout, useAnimatedProps, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withSpring, withTiming } from "react-native-reanimated"
import Svg, { Path } from "react-native-svg"
import Header from "../header/Header"
import Title from "./object/Title"
import CircularProgress from 'react-native-circular-progress-indicator';
import  { VictoryChart,VictoryBar,VictoryTheme }  from "victory-native"
import { main, width_ } from "../../../style/NS"
import * as Progress from 'react-native-progress';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Board from "./object/Board"
import HeaderBottom from "../header/HeaderBottom"
import Today from "./object/Today"
import TokenDataStorage from "../../../util/TokenDataStorage"
import axios from "axios"
import { IP } from "../../../util/ServerPath"
import Spinner from 'react-native-loading-spinner-overlay';
//import { useIsFocused } from "@react-navigation/native";
import toDay from "../main_pages/object/Today_time"
import AsyncStorage from "@react-native-async-storage/async-storage";
import StorageSave from "../../../util/StorageSave"


const Main =({navigation,route}:any)=>{
  //const isFocused = useIsFocused();
    const c1y = useSharedValue(0.2);
    const c2y = useSharedValue(0.8);
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const [news, setNews] = useState([0,0,0,0,0]);
    const [list_item, setlist_item] = useState([{name:"오늘 입차 대수",value:100},{name:"오늘 출차 대수",value:100},{name:"총 차량 대수",value:100},{name:"교통량",value:0}])
    const [chartdata, setchartdata] = useState(83)
    const rotation = useSharedValue(0);
    const [token, settoken] = useState({access_token:"",refresh_token:"",userId:""})
    const [list_data, listdata] = useState({})
    const [loading, setloading] = useState(false)
    const [refreshing, setRefreshing] = useState(false);
    const [alldatas, setalldatas] = useState({})
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      TokenDataStorage.get().then(settoken)
      axios_data()
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);
    /** 
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
    }**/
    
    const axios_data =()=>{
      
      setloading(true)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token.access_token}`;
      //setloading((data)=> data = true)
            const Uri = IP+'/main_pages'
           // const Uri_p = 'http://10.0.2.2:8080/parent'
           let header ={headers:{"Content-Type":"application/json; charset=utf-8"}}
       
            
            
            axios.post(Uri,toDay(),header).then(function (response) {
              console.log("메인데이터")
              const result =response.data
              StorageSave.set(result).catch(console.error);
              

              setchartdata(data=> data = result["risk"])
              setlist_item(data=> data=[{name:"오늘 입차 대수",value:result["in_"]},{name:"오늘 출차 대수",value:result["out_"]},{name:"총 차량 대수",value:result["all_"]},{name:"교통량",value:result["traffic"]}])
              //console.log(JSON.stringify(response.data))
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

    rotation.value = withSequence(
 
        //withTiming(-10, { duration: 300 }),
        //withRepeat(withTiming(0.2, { duration: 100 }), 6, true),
       
        withTiming(-1 * 10, {
        duration: 200,

      }),
      );
   
  const animatedStyle = useAnimatedStyle(() => {
    
    return {
     
      transform: [{ translateY:rotation.value }],
    };
  });
    return(<>
     <SafeAreaView style={{backgroundColor:"white",flex:1,marginBottom:heightPercentageToDP('10%')}}>
     <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={{color:"white"}}
        />
<Header nav={navigation.reset} route={route} subtitle={"공동 주택 주차 관제 시스템"}/>
   
  <ScrollView style={{flex:1,flexDirection:"column"}}  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
<Text>

</Text>
<View style={[{flex:1,borderRadius:5,margin:10,padding:10,opacity:1,borderWidth:0.1}]}>
<Text style={{margin:10,fontWeight:"bold",color:"black",opacity:0.8}}>교통 위험도</Text>
<View style={{flexDirection:"row",flexWrap:"nowrap",margin:10}}>

<Progress.Bar progress={chartdata ==0 ?0.1:chartdata} color={chartdata ==0 ? "green":chartdata>0 && chartdata<0.7 ? "yellow":"red"} style={[{flex:1,margin:10},main.shadow]} animated	={true} />
<Text >{chartdata ==0 ? "저위험":chartdata>0 && chartdata<0.7 ? "중위험":"고위험"} </Text>
</View>
</View>
<Text style={{margin:10,marginLeft:30,fontWeight:"bold",color:"black",opacity:0.8}}>교통량</Text>
 <Board list_item={list_item}/> 


<View style={{flex:1,alignItems:"center",justifyContent:"center",marginTop:40}}>
  {/** 
<CircularProgress
  value={60}
  radius={120}
  duration={2000}
  progressValueColor={'black'}
  maxValue={100}
  
  title={'%'}
  titleColor={'black'}
  titleStyle={{fontWeight: 'bold'}}
/>*/}
{/**
<VictoryChart
     
     animate={{
       duration: 1000,
       onLoad: { duration: 1000 }
     }}
      width={width_*350}
      height={width_*350}
theme={VictoryTheme.grayscale}
domainPadding={20}>
<VictoryBar
 style={{ data: { fill: "#b8b8d2" } }}
 
 data={[{x:"dddd",y:10},{x:"dddd2",y:20},{x:"dddd3",y:30}]}
/>
</VictoryChart> */}
</View>
     <Today/>
         
        
         </ScrollView>
 
     
   
    </SafeAreaView></>)
}
export default Main