
import React, { useState } from "react"
import { Button, SafeAreaView, ScrollView, Text, View } from "react-native"
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

const Account =({navigation,route}:any)=>{

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


       

</ScrollView>
</SafeAreaView>

    </>)
}

export default Account;