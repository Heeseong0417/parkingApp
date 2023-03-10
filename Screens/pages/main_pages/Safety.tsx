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

const Safety =({navigation,route}:any)=>{


  const [refreshing, setRefreshing] = useState(false);
  const [token, settoken] = useState({access_token:"",refresh_token:"",userId:""})
  const [list_data, listdata] = useState({})
  const [loading, setloading] = useState(false)
  const [list_item, setlist_item] = useState(0)
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    TokenDataStorage.get().then(settoken)
    axios_data()
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const axios_data =()=>{
      
    setloading(true)
    axios.defaults.headers.common["Authorization"] = `Bearer ${token.access_token}`;
    //setloading((data)=> data = true)
          const Uri = IP+'/main_pages'
         // const Uri_p = 'http://10.0.2.2:8080/parent'
         let header ={headers:{"Content-Type":"application/json; charset=utf-8"}}
     
          
          
          axios.post(Uri,{userId:"data"},header).then(function (response) {
            const result =response.data
            setlist_item(data=> data  = result["risk"])
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

  fdfdfd{list_item}
</Text>
<CircularProgress
  value={list_item}
  radius={120}
  duration={2000}
  progressValueColor={'black'}
  maxValue={100}
  activeStrokeColor={list_item ==1 ?"red":list_item<1||list_item>0.8?"yellow":"green"}
  title={list_item ==1 ?"고위험":list_item<1&&list_item>0.7?"위험":"안전"}
  titleColor={'black'}
  titleStyle={{fontWeight: 'bold'}}
/>

</View>

<Rbox title={"교통 위험도 산정 방법"}/>
<ScrollView horizontal={true} style={{flex:1}}>

 
</ScrollView>
<Image source={risk} style={{resizeMode:"stretch",flex:1,width:"100%"}}/>   
    </View>
    </ScrollView></SafeAreaView>
    </>)
}

export default Safety