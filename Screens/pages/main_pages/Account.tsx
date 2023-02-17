
import React, { useEffect, useState } from "react"
import { Button, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
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
import { List } from "react-native-paper"
import axios from "axios"
import TokenDataStorage from "../../../util/TokenDataStorage"
import { IP } from "../../../util/ServerPath"
import { notification_run, notification_set } from "../../Notification/notification"

const Account =({navigation,route}:any)=>{
  const [token, settoken] = useState({access_token:"",refresh_token:"",userId:""})
    const [list_data, listdata] = useState({})
    const [loading, setloading] = useState(false)
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
  useEffect(() => {
    //notification_set("hello","my channel~")
  
    return () => {
      
    }
  }, [])
  
  const axios_data =()=>{
    
    setloading(true)
    axios.defaults.headers.common["Authorization"] = `Bearer ${token.access_token}`;
    //setloading((data)=> data = true)
          const Uri = IP+'/socket_in_car'
         // const Uri_p = 'http://10.0.2.2:8080/parent'
         let header ={headers:{"Content-Type":"application/json; charset=utf-8"}}
     
          
          
          axios.post(Uri,toDay(),header).then(function (response) {
            //notification_run("title1","message1","hello","car")
            
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

    return(<>
    <SafeAreaView style={{backgroundColor:"white",flex:1,marginBottom:heightPercentageToDP("10%")}}>
    
    <Header nav={navigation.reset} route={route} subtitle={"공동 주택 주차 관제 시스템"}/>
       
      <ScrollView style={{flex:1,flexDirection:"column"}}>
    
<List.AccordionGroup>
    <List.Accordion title="앱 정보" id="1">
     
      <List.Item title={"공동주택 주차 관제 시스템"} />
      
      <Text style={{margin:20}}>{""} </Text>
    </List.Accordion>
    <List.Accordion title="유저 정보" id="2">
    <List.Item title={"dfdfdfd"} />
    </List.Accordion>
    <View>
      
      <List.Accordion title="라이센스" id="3">
        <ScrollView>
            {/**LC.map((item)=>(<Text>{item._description} : {item._licenseContent}</Text>))**/}
            <List.Item title="Item 3" />
        </ScrollView>
        
      </List.Accordion>
    </View>
  </List.AccordionGroup>

  <TouchableOpacity style={[main.flex_blue_btn,{marginBottom:20,flex:1,width:"90%"}]} onPress={axios_data}>
<Text  style={[main.flex_blue_btn_text]}>푸시 알림</Text>
            </TouchableOpacity>
       

</ScrollView>
</SafeAreaView>

    </>)
}

export default Account;