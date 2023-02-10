
import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import ListItems from "../pages/main_pages/sub_pages/ListItems";
import Login from "../pages/start_pages/siteIn/Login";
import Certification from "../pages/start_pages/siteup/Certification";
import SiteUp from "../pages/start_pages/siteup/SiteUp";
import UserCertifcationForm from "../pages/start_pages/siteup/UserCertifcationForm";
import Start_main from "../pages/start_pages/Start_main";
import BottomTab from "./BottomTab";
import BottomTab2 from "./BottomTab2";
import BottomTab4 from "./BottomTab4";


const Stack = createStackNavigator();

const StartNavigation =()=>{

    return(<>
     <SafeAreaProvider>

<NavigationContainer>
   <Stack.Navigator initialRouteName='Start_main'
    
screenOptions={{ headerShown: false }}>
    <Stack.Screen  name='Start_main' component={Start_main}
     options={() => ({cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      gestureEnabled: false })}
     />
      <Stack.Screen  name='BottomTab' component={BottomTab}
     options={() => ({cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      gestureEnabled: false })}
      
     />

     <Stack.Screen  name='UserCertifcationForm' component={UserCertifcationForm}
     options={() => ({cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      gestureEnabled: false })}
     />
      <Stack.Screen  name='Certification' component={Certification}
     options={() => ({cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      gestureEnabled: false })}
     />
     <Stack.Screen  name='SiteUp' component={SiteUp}
     options={() => ({cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      gestureEnabled: false })}
     />
    <Stack.Screen  name='Login' component={Login}
     options={() => ({cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      gestureEnabled: false })}
     />
       
    <Stack.Screen  name='ListItems' component={ListItems}
     options={() => ({cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      gestureEnabled: false })}
     />

     </Stack.Navigator></NavigationContainer></SafeAreaProvider>
    </>)
}

export default StartNavigation