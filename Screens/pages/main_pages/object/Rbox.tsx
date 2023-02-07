import { Text, View } from "react-native"
import { main } from "../../../../style/NS"

const Rbox=({title}:any)=>{


    return(<>
    <View style={[{flex:1,margin:10,alignItems:"flex-start"},main.shadow]}>
    <Text style={[{flex:1,padding:10,fontWeight:"bold",color:"black",opacity:0.8,borderRadius:3,textAlign:"center",backgroundColor:"white"}]}>{title}</Text>
    </View>
  
    </>)
}
export default Rbox