import { Text, View,TouchableOpacity, StyleSheet } from "react-native"
import { main } from "../../style/NS";
import Animated from "react-native-reanimated"
import Svg, { Path } from "react-native-svg"
import React from "react";
const CustomTabBarButton = (props:any) =>{
    const {children,accessibilityState,onPress} = props;
    console.log(children.children)
    const AnimatedSvg = Animated.createAnimatedComponent(Svg)
    if(accessibilityState.selected){
    return (
<>
<View style={main.tab_warpper}>
<TouchableOpacity style={[main.tab_active]} onPress={onPress}>
<View style={{flex:1}}>
      <AnimatedSvg
        width={110}
        height={60}
        viewBox="0 0 110 60"
       
      >
        <Path
          fill="#604AE6"
          d="M20 0H0c11.046 0 20 8.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
        />
        </AnimatedSvg>
      </View>
    <Text style={{textAlign:"center",alignItems:"center"}}>{children}</Text></TouchableOpacity>
</View>
</>
    )
    }else{
        return (
            <>
            <View style={[main.tab_warpper]}>

            <TouchableOpacity style={[main.tab_inactive]} onPress={onPress}><Text style={{textAlign:"center"}}>{children}</Text></TouchableOpacity>
             </View>
            </>
                )   
    }

}


export default CustomTabBarButton