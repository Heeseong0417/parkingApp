import React, { useState } from "react"
import { Button, SafeAreaView, ScrollView, Text, View } from "react-native"
import Animated, { FadeInUp, FadeOutDown, Layout, useAnimatedProps, useSharedValue, withDelay, withRepeat, withTiming } from "react-native-reanimated"
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
const Main =({navigation,route}:any)=>{
    const c1y = useSharedValue(0.2);
    const c2y = useSharedValue(0.8);
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const [news, setNews] = useState([0,0,0,0,0]);
    const [list_item, setlist_item] = useState([{name:"오늘 입차 대수",value:100},{name:"오늘 출차 대수",value:100},{name:"총 차량 대수",value:100},{name:"교통량",value:0}])
    const [chartdata, setchartdata] = useState({risk:83,traffic:{}})
    const animatedProps = useAnimatedProps(() => {
        return {
          d: [
            'M 0 0.5',
            `C 0.3 ${c1y.value}, 0.7 ${c2y.value}, 1 0.5`,
            'V 1',
            'H 0',
          ].join(' '),
        };
      });
  
    const handleWave = () => {
        c1y.value = 
      withRepeat(withTiming(0.8, {duration: 500}), -1, true);
    c2y.value = withDelay(
      200,
      withRepeat(withTiming(0.2, {duration: 500}), -1, true),
    );
    };
  
    const AnimatedSvg = Animated.createAnimatedComponent(Svg)
    return(<>
     <SafeAreaView style={{backgroundColor:"white",flex:1,marginBottom:widthPercentageToDP('10%')}}>
    
<Header nav={navigation.reset} route={route} subtitle={"공독 주택 주차 관제 시스템"}/>
   
  <ScrollView style={{flex:1,flexDirection:"column"}}>


<View style={[{flex:1,borderRadius:5,margin:10,padding:10,opacity:1,borderWidth:0.1}]}>
<Text style={{margin:10,fontWeight:"bold",color:"black",opacity:0.8}}>교통 위험도</Text>
<View style={{flexDirection:"row",flexWrap:"nowrap",margin:10}}>

<Progress.Bar progress={chartdata.risk} style={[{flex:1,margin:10},main.shadow]} animated	={true} />
<Text >{chartdata.risk} %</Text>
</View>
</View>
<Text style={{margin:10,marginLeft:30,fontWeight:"bold",color:"black",opacity:0.8}}>교통량</Text>
 <Board list_item={list_item}/> 


<View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
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
        <Text>dfdff</Text> 
         
        
         </ScrollView>
 
     
   
    </SafeAreaView></>)
}
export default Main