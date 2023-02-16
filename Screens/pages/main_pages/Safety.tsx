import React, { useCallback, useState } from "react"
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

const Safety =({navigation,route}:any)=>{
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
   
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

    return(<>
       <SafeAreaView style={{backgroundColor:"white",flex:1,marginBottom:heightPercentageToDP("10%")}}>
    
    <Header nav={navigation.reset} route={route} subtitle={"공동 주택 주차 관제 시스템"}/>
       
      <ScrollView style={{flex:1,flexDirection:"column"}} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
    
    
    <View style={[{flex:1,margin:10,padding:10,opacity:1}]}>
    <Rbox title={" 교통 위험도"}/>
    <View style={{flex:1,alignItems:"center",justifyContent:"center",marginTop:30}}>

<CircularProgress
  value={60}
  radius={120}
  duration={2000}
  progressValueColor={'black'}
  maxValue={100}
  
  title={'%'}
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