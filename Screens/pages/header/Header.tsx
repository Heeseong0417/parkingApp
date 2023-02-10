import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP,heightPercentageToDP } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Ionicons";
import { main } from "../../../style/NS";


const Header=({route,nav,subtitle}:any)=>{


return(<>
 <StatusBar backgroundColor="#0073F0" barStyle="light-content" />
<View style={[main.header_style,{height:widthPercentageToDP("20%"),backgroundColor:"#0073F0"}]}>
    <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginHorizontal:30}}>
   <Text style={[main.title,{color:"white",fontWeight:"bold",opacity:1}]}>{route.name}</Text>     
   <TouchableOpacity onPress={()=>nav({routes: [{name: 'Account'}]})} style={{padding:5}}><Icon size={widthPercentageToDP("10%")} color={"white"} name={"reorder-three-outline"}/></TouchableOpacity> 
    </View>
    <Text style={[{color:"white",fontWeight:"bold",marginLeft:30,marginBottom:10}]}>{subtitle}</Text> 
</View>
</>)
}

export default Header;