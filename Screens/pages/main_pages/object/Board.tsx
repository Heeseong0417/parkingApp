import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { main } from "../../../../style/NS"

const Board =({list_item,navigation}:any)=>{

    const renderItem=({ item }:any)=>(

 <View style={{flex:1, flexDirection:"row",justifyContent:"space-between",paddingVertical:20,paddingHorizontal:10}}>
<Text style={[{textAlign:"center",color:"white",fontWeight:"bold"}]}><Ionicons name={"radio-button-on-sharp"} size={13} color={"skyblue"}/>  {item.name}</Text>
<Text style={[{textAlign:"center",color:"white",fontWeight:"bold"}]}>{item.value}</Text>
        </View>
       
       
    )

    return(<>
   <ScrollView style={[{flex:1}]}>
  <View style={[{flex:1,margin:20, borderRadius:20,backgroundColor:"#308FFF"},main.shadow]}>

 
    <FlatList
style={[{flex:1,margin:10, borderRadius:30}]}

    data={list_item}
    numColumns={1}
    
    renderItem={renderItem}
    keyExtractor={(item) => item}
  /> 
  </View>
    </ScrollView>
    </>)
}

export default Board