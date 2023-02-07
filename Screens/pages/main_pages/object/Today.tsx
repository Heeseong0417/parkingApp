import { Image, SafeAreaView, Text, View } from "react-native"
import { Path, Rect, Svg, WithLocalSvg } from "react-native-svg"
import { Box, Circle } from "victory-native"
import man from "../../../../assets/man.png"
import bub from "../../../../assets/bub.svg"
import Animated, { Easing, FadeInUp, FadeOutDown, Layout, useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withSequence, withSpring, withTiming } from "react-native-reanimated";
const Today =()=>{
    const rotation = useSharedValue(0);
    rotation.value = withSequence(
 
        //withTiming(-10, { duration: 300 }),
        withRepeat(withTiming(1, { duration: 200 }), 6, true),
       
        withRepeat(withTiming(2, {
        duration: 200,

      }))
      );
   
  const animatedStyle = useAnimatedStyle(() => {
    
    return {
     
      transform: [{ translateY:rotation.value }],
    };
  });


    return (<>
    <SafeAreaView>
<View style={{flex:1, flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
    
    <Animated.View style={[{flex:1,backgroundColor:"gray",margin:20 ,height:40,justifyContent:"center",alignItems:"center",borderRadius:30},animatedStyle]}>
  
<Text style={{color:"white",textAlign:"center"}}>오늘 날씨는 맑음 입니다.</Text>
    </Animated.View>

    <Animated.View style={[{margin:20,height:30,justifyContent:"center",alignItems:"center",borderRadius:30,borderBottomRightRadius:0},animatedStyle]}>   
          
<Image source={man} style={{resizeMode:"stretch",width:30,height:40}}/>
    </Animated.View>
 
</View>



    </SafeAreaView>
    </>)
}

export default Today