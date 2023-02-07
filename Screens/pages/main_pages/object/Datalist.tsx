import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { main } from "../../../../style/NS";

const Datalist =({list_item}:any)=>{


    const renderItem=({ item }:any)=>(

        <TouchableOpacity style={[{flex:1, flexDirection:"column",justifyContent:"space-between",paddingVertical:20,paddingHorizontal:10, borderRadius:10,backgroundColor:"skyblue"}]}>
       <View>

       </View>
       <Text style={[{textAlign:"center",color:"white",fontWeight:"bold"}]}><Ionicons name={"radio-button-on-sharp"} size={13} color={"skyblue"}/>  {item.date}</Text>
       <Text style={[{textAlign:"center",color:"white",fontWeight:"bold"}]}>{item.carNum}</Text>
               </TouchableOpacity>
              
              
           )
       
           return(<>
          <ScrollView style={[{flex:1}]}>
         
       
        
           <FlatList
       style={[{flex:1,margin:10, borderRadius:30}]}
       
           data={list_item}
           numColumns={1}
           
           renderItem={renderItem}
           keyExtractor={(item) => item}
         /> 
       
           </ScrollView>
           </>)

}
export default Datalist;