
import "react-native-gesture-handler"
import { LayoutChangeEvent, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Main from "../pages/main_pages/Main";
import Icon from "react-native-vector-icons/Ionicons"
import CustomTabBarButton from "./CustomTabBarButton";
import { main } from "../../style/NS";
import Svg, { Circle, Path } from "react-native-svg";
import Animated, { Easing, FadeInUp, FadeOutDown, Layout, useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withSequence, withSpring, withTiming } from "react-native-reanimated";
import PagerView from 'react-native-pager-view';
import ParkingList from "../pages/main_pages/ParkingList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useReducer, useRef, useState } from "react";
import MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { BottomTabBar, BottomTabBarProps, BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
//const menu_items =  [{route:"Main",icon:"home",component:Main},{route:"Traffic",icon:"settings",component:Main},{route:"Safety",icon:"wallet",component:Main},{route:"Account",icon:"md-notifications-sharp",component:Main},{route:"CarLog",icon:"md-notifications-sharp",component:Main}]
   
const AnimatedSvg = Animated.createAnimatedComponent(Svg)
const AnimatedTabBar = ({ state: { index: activeIndex, routes }, navigation, descriptors } : BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets()

  // get information about the components position on the screen -----

  const reducer = (state: any, action: { x: number, index: number }) => {
    // Add the new value to the state
    return [...state, { x: action.x, index: action.index }]
  }

  const [layout, dispatch] = useReducer(reducer, [])
  console.log(layout)

  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    dispatch({ x: event.nativeEvent.layout.x, index })
  }

  // animations ------------------------------------------------------

  const xOffset = useDerivedValue(() => {
    // Our code hasn't finished rendering yet, so we can't use the layout values
    if (layout.length !== routes.length) return 0;
    // We can use the layout values
    // Copy layout to avoid errors between different threads
    // We subtract 25 so the active background is centered behind our TabBar Components
    // 20 pixels is the width of the left part of the svg (the quarter circle outwards)
    // 5 pixels come from the little gap between the active background and the circle of the TabBar Components
    return [...layout].find(({ index }) => index === activeIndex)!.x - 25
    // Calculate the offset new if the activeIndex changes (e.g. when a new tab is selected)
    // or the layout changes (e.g. when the components haven't finished rendering yet)
  }, [activeIndex, layout])

  const animatedStyles = useAnimatedStyle(() => {
    return {
      // translateX to the calculated offset with a smooth transition
      transform: [{ translateX: withTiming(xOffset.value, { duration: 250 }) }],
    }
  })

  return (
    <View style={[ { paddingBottom: bottom }]}>
      <AnimatedSvg
        width={110}
        height={60}
        viewBox="0 0 110 60"
        style={[styles.activeBackground, animatedStyles]}
      >
       <Circle cx="55" cy="25" r="50" fill="#308FFF" />
        {/**<Path
        
          fill="#604AE6"
          d="M20 0H0c11.046 0 20 8.953 20  19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
  />**/}
      </AnimatedSvg>

      <View style={styles.tabBarContainer}>
        {routes.map((route, index) => {
          const active = index === activeIndex
          const { options } = descriptors[route.key]

          return (
            <TabBarComponent
              key={route.key}
              active={active}
              options={options}
              onLayout={(e) => handleLayout(e, index)}
              onPress={() => navigation.navigate(route.name)}
            />
          )
        })}
      </View>
    </View>
  )
}

// ------------------------------------------------------------------

type TabBarComponentProps = {
  active?: boolean
  options: BottomTabNavigationOptions
  onLayout: (e: LayoutChangeEvent) => void
  onPress: () => void
}

const TabBarComponent = ({ active, options, onLayout, onPress }: TabBarComponentProps) => {
  // handle lottie animation -----------------------------------------
  const ref = useRef(null)

  useEffect(() => {
    if (active && ref?.current) {
      // @ts-ignore
      ref.current.play()
    }
  }, [active])

  // animations ------------------------------------------------------

  const animatedComponentCircleStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active ? 1 : 0, { duration: 250 })
        }
      ]
    }
  })

  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 1 : 0.5, { duration: 250 })
    }
  })

  return (
    <Pressable onPress={onPress} onLayout={onLayout} style={styles.component}>
      <Animated.View
        style={[styles.componentCircle, animatedComponentCircleStyles]}
      />
      <Animated.View style={[styles.iconContainer, animatedIconContainerStyles]}>
        {/* @ts-ignore */}
        {options.tabBarIcon ? options.tabBarIcon({ ref }) : <Text>?</Text>}
      </Animated.View>
    </Pressable>
  )
}

const BottomTab =({navigation}:any)=>{
    const Tab = createMaterialTopTabNavigator();
    const rotation = useSharedValue(0);
    const rotation2 = useSharedValue(0);
    rotation.value = withSequence(
 
        //withTiming(-10, { duration: 300 }),
        //withRepeat(withTiming(0.2, { duration: 100 }), 6, true),
       
        withTiming(-1 * 10, {
        duration: 200,

      }),
      );
      rotation2.value = withSequence(
 
        //withTiming(-10, { duration: 300 }),
        //withRepeat(withTiming(0.2, { duration: 100 }), 6, true),
        withSpring(30),
          
      );
  const animatedStyle = useAnimatedStyle(() => {
    
    return {
     
      transform: [{ translateY:rotation.value }],
    };
  });
  const animatedStyle2 = useAnimatedStyle(() => {
    
    return {
      transform: [{ translateX:rotation.value },{scale:1}],
    };
  });
 
 

   


    return(<>

<Tab.Navigator
      // tabBar={(props) => <AnimatedTabBar {...props} />}
     tabBarPosition="bottom"
     
     style={{backgroundColor:"white"}}
      screenOptions={{lazy:true, tabBarStyle:{backgroundColor:"#0073F0", position:"absolute",bottom:0,left:0,right:0,borderTopLeftRadius:5,borderTopRightRadius:5},
      tabBarIconStyle: { width: widthPercentageToDP('10%') },
      tabBarLabelStyle:{opacity:0.8, fontFamily:"GmarketSansTTFMedium",fontWeight:"300"}
      ,tabBarShowLabel:false,tabBarActiveTintColor:"#3D5CFF",
      tabBarContentContainerStyle:{height:widthPercentageToDP("20%")},
      tabBarInactiveTintColor:"#B8B8D2",}}
      
    >
     <Tab.Screen name ={"Main"} component={Main} options={{
    tabBarIcon:({color,size,focused}:any)=>{return <><Animated.View style={[{alignItems:"center",width:"100%",borderRadius:150},focused?animatedStyle:{}]}><Icon size={widthPercentageToDP("7%")} name={"home"} color={color} />{focused?<Text style={{fontSize:10,marginTop:5, textAlign:"center",fontWeight:"400",opacity:0.9,color:color}}>home</Text>:<></>}</Animated.View></>},    
//tabBarButton: props => <CustomTabBarButton {... props}/>
}}/>
<Tab.Screen name ={"Traffic"} component={Main} options={{
    tabBarIcon:({color,size,focused}:any)=>{return <><Animated.View style={[{alignItems:"center",width:"100%",borderRadius:150, },focused?animatedStyle:{}]}><Icon size={widthPercentageToDP("7%")} name={"settings"} color={color} />{focused?<Text style={{fontSize:10,marginTop:5, textAlign:"center",fontWeight:"400",opacity:0.9,color:color}}>Traffic</Text>:<></>}</Animated.View></>},    
//tabBarButton: props => <CustomTabBarButton {... props}/>
}}/>
<Tab.Screen name ={"Safety"} component={Main} options={{
    tabBarIcon:({color,size,focused}:any)=>{return <><Animated.View style={[{alignItems:"center",width:"100%",borderRadius:150, },focused?animatedStyle:{}]}><Icon size={widthPercentageToDP("7%")} name={"wallet"} color={color} />{focused?<Text style={{fontSize:10,marginTop:5, textAlign:"center",fontWeight:"400",opacity:0.9,color:color}}>Safety</Text>:<></>}</Animated.View></>},    
//tabBarButton: props => <CustomTabBarButton {... props}/>
}}/>
<Tab.Screen name ={"CarLog"} component={ParkingList} options={{
    tabBarIcon:({color,size,focused}:any)=>{return <><Animated.View style={[{alignItems:"center",width:"100%",borderRadius:150, },focused?animatedStyle:{}]}><Icon size={widthPercentageToDP("7%")} name={"md-notifications-sharp"} color={color} />{focused?<Text style={{fontSize:10,marginTop:5, textAlign:"center",fontWeight:"400",opacity:0.9,color:color}}>CarLog</Text>:<></>}</Animated.View></>},    
//tabBarButton: props => <CustomTabBarButton {... props}/>
}}/>
<Tab.Screen name ={"Account"} component={ParkingList} options={{
    tabBarIcon:({color,size,focused}:any)=>{return <><Animated.View style={[{alignItems:"center",width:"100%",borderRadius:150, },focused?animatedStyle:{}]}><Icon size={widthPercentageToDP("7%")} name={"md-notifications-sharp"} color={color} />{focused?<Text style={{fontSize:9,marginTop:5, textAlign:"center",fontWeight:"400",opacity:0.9,color:color}}>Account</Text>:<></>}</Animated.View></>},    
//tabBarButton: props => <CustomTabBarButton {... props}/>
}}/>

      
    </Tab.Navigator>

    </>)
}
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#0073F0',
  },
  activeBackground: {
    
    position: 'absolute',
  },
  tabBarContainer: {
    
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  component: {
    height: 60,
    width: 60,
    marginTop: -5,
  },
  componentCircle: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: 36,
    width: 36,
  }
})
export default BottomTab