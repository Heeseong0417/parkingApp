
import "react-native-gesture-handler"
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Main from "../pages/main_pages/Main";
import Icon from "react-native-vector-icons/Ionicons"
import CustomTabBarButton from "./CustomTabBarButton";
import { main } from "../../style/NS";
import Svg, { Path } from "react-native-svg";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withSpring, withTiming } from "react-native-reanimated";
import PagerView from 'react-native-pager-view';
import ParkingList from "../pages/main_pages/ParkingList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const Tab = createMaterialTopTabNavigator();

const BottomTab =({}:any)=>{
  //const [token, settoken] = useState({access_token:"",refresh_token:"",userId:""})
   //const menu_items =  [{route:"Main",icon:"home",component:Main},{route:"Traffic",icon:"settings",component:Main},{route:"Safety",icon:"wallet",component:Main},{route:"Account",icon:"md-notifications-sharp",component:Main},{route:"CarLog",icon:"md-notifications-sharp",component:ParkingList}]
   
   let iconName="home";
   
   const rotation = useSharedValue(0);
   rotation.value = withSequence(

       //withTiming(-10, { duration: 300 }),
       //withRepeat(withTiming(0.2, { duration: 100 }), 6, true),
       withTiming(-1, {
           duration: 200,
         }),
       withTiming(-1 * 3, {
       duration: 500,
     }),
     );
 const animatedStyle = useAnimatedStyle(() => {
   
   return {
     transform: [{ translateY:rotation.value },{scale:1}],
   };
 });




    return(<>
<Tab.Navigator
sceneContainerStyle={{backgroundColor:"white"}}

screenOptions={({}:any)=>({
headerShown:false,

tabBarStyle:[main.tab_style,main.shadow],
tabBarShowLabel:false,
tabBarActiveTintColor:"#3D5CFF",

tabBarInactiveTintColor:"#B8B8D2",
/** 
tabBarIcon:({color,size,focused}:any)=>{
    if(route.name === "Main"){ iconName =  focused?"home":"home-outline"}
    else if(route.name === "Main2"){ iconName = focused?"settings":"settings-outline"}
    else if(route.name === "Main3"){ iconName = focused?"wallet":"wallet-outline"}
    else if(route.name === "Main4"){ iconName = focused?"md-notifications-sharp":"md-notifications-outline"}
    return <View style={{flex:1,alignItems:"center",justifyContent:"center",}}><Icon size={size} name={iconName} color={color} />{focused?<Text style={{fontSize:15, textAlign:"center",fontWeight:"400",opacity:0.9,color:color}}>홈</Text>:<></>}</View>}*/
})}>

    {/** 
    menu_items.map((menu:any)=>(
<Tab.Screen name ={menu.route} component={menu.component} options={{
    tabBarIcon:({color,size,focused}:any)=>{return <><View style={[{alignItems:"center",width:"100%",borderRadius:150, backgroundColor:"#0073F0"},focused ? {}:{},focused?{}:{}]}><Icon size={size} name={menu.icon} color={color} />{focused?<Text style={{fontSize:10,marginTop:5, textAlign:"center",fontWeight:"400",opacity:0.9,color:color}}>{menu.route}</Text>:<></>}</View></>},    
//tabBarButton: props => <CustomTabBarButton {... props}/>
}}/>
    ))

*/}
<Tab.Screen name ={"Main"} component={Main} options={{
    tabBarIcon:({color,size,focused}:any)=>{return <><View style={[{alignItems:"center",width:"100%",borderRadius:150, backgroundColor:"#0073F0"},focused?animatedStyle:{}]}><Icon size={size} name={"home"} color={color} />{focused?<Text style={{fontSize:10,marginTop:5, textAlign:"center",fontWeight:"400",opacity:0.9,color:color}}>home</Text>:<></>}</View></>},    
//tabBarButton: props => <CustomTabBarButton {... props}/>
}}/>
<Tab.Screen name ={"Traffic"} component={Main} options={{
    tabBarIcon:({color,size,focused}:any)=>{return <><View style={[{alignItems:"center",width:"100%",borderRadius:150, backgroundColor:"#0073F0"},focused?{}:{}]}><Icon size={size} name={"settings"} color={color} />{focused?<Text style={{fontSize:10,marginTop:5, textAlign:"center",fontWeight:"400",opacity:0.9,color:color}}>Traffic</Text>:<></>}</View></>},    
//tabBarButton: props => <CustomTabBarButton {... props}/>
}}/>
<Tab.Screen name ={"Safety"} component={Main} options={{
    tabBarIcon:({color,size,focused}:any)=>{return <><View style={[{alignItems:"center",width:"100%",borderRadius:150, backgroundColor:"#0073F0"},focused?{}:{}]}><Icon size={size} name={"wallet"} color={color} />{focused?<Text style={{fontSize:10,marginTop:5, textAlign:"center",fontWeight:"400",opacity:0.9,color:color}}>Safety</Text>:<></>}</View></>},    
//tabBarButton: props => <CustomTabBarButton {... props}/>
}}/>
<Tab.Screen name ={"CarLog"} component={ParkingList} options={{
    tabBarIcon:({color,size,focused}:any)=>{return <><View style={[{alignItems:"center",width:"100%",borderRadius:150, backgroundColor:"#0073F0"},focused?{}:{}]}><Icon size={size} name={"md-notifications-sharp"} color={color} />{focused?<Text style={{fontSize:10,marginTop:5, textAlign:"center",fontWeight:"400",opacity:0.9,color:color}}>CarLog</Text>:<></>}</View></>},    
//tabBarButton: props => <CustomTabBarButton {... props}/>
}}/>
<Tab.Screen name ={"Account"} component={ParkingList} options={{
    tabBarIcon:({color,size,focused}:any)=>{return <><View style={[{alignItems:"center",width:"100%",borderRadius:150, backgroundColor:"#0073F0"},focused?{}:{}]}><Icon size={size} name={"md-notifications-sharp"} color={color} />{focused?<Text style={{fontSize:10,marginTop:5, textAlign:"center",fontWeight:"400",opacity:0.9,color:color}}>Account</Text>:<></>}</View></>},    
//tabBarButton: props => <CustomTabBarButton {... props}/>
}}/>

</Tab.Navigator>

    </>)
}
export default BottomTab