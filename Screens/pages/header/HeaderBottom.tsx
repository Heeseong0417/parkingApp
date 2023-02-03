import { Text, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP,heightPercentageToDP } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Ionicons";
import { main } from "../../../style/NS";


const HeaderBottom=({title}:any)=>{


return(<>
<View style={[main.header_style,{height:heightPercentageToDP("5%"),backgroundColor:"#0073F0",position:"absolute",top:0}]}>
    <View style={{flex:1,flexDirection:"row",alignItems:"center",marginHorizontal:30}}>
   <Text style={[{color:"white",fontWeight:"bold"}]}>{title}</Text>     
   
    </View>

</View>
</>)
}

export default HeaderBottom;