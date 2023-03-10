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

const Safety =({navigation,route}:any)=>{


  const [refreshing, setRefreshing] = useState(false);
  const [token, settoken] = useState({access_token:"",refresh_token:"",userId:""})
  const [list_data, listdata] = useState({})
  const [loading, setloading] = useState(false)
  const [list_item, setlist_item] = useState(0)
  const [alldatas, setalldatas] = useState({risk:0})
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
            
           //Alert.alert("????????? ?????????????????????! ?????? ?????????????????????") 
           
          })
      
          
        
          
      
      
      }
  useEffect(() => {TokenDataStorage.get().then(settoken)
    StorageSave.get().then(setalldatas)
    //axios_data()
  }, [])
useEffect(() => {axios_data()}, [token])
    return(<>
       <SafeAreaView style={{backgroundColor:"white",flex:1,marginBottom:heightPercentageToDP("10%")}}>
    
    <Header nav={navigation.reset} route={route} subtitle={"?????? ?????? ?????? ?????? ?????????"}/>
       
      <ScrollView style={{flex:1,flexDirection:"column"}} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
    
    
    <View style={[{flex:1,margin:10,padding:10,opacity:1}]}>
    <Rbox title={" ?????? ?????????"}/>
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
  activeStrokeColor={alldatas["risk"] ==1 ?"red":alldatas["risk"]<1||alldatas["risk"]>0.8?"yellow":"green"}
  title={alldatas["risk"] ==1 ?"?????????":alldatas["risk"]<1&&alldatas["risk"]>0.7?"??????":"??????"}
  titleColor={'black'}
  titleStyle={{fontWeight: 'bold'}}
/>

</View>

<Rbox title={"?????? ????????? ?????? ??????"}/>
<ScrollView horizontal={true} style={{flex:1}}>

 
</ScrollView>
<Image source={risk} style={{resizeMode:"stretch",flex:1,width:"100%"}}/>   
    </View>
    </ScrollView></SafeAreaView>
    </>)
}

export default Safety