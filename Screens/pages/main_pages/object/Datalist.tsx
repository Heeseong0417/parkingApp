import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { height_, main, width_ } from "../../../../style/NS";
import AutoHeightImage from "react-native-auto-height-image";
const Datalist =({list_item,navigation}:any)=>{


    const renderItem=({ item }:any)=>(

        <TouchableOpacity onPress={()=>navigation("ListItems",item)} style={[{flex:1, flexDirection:"column",justifyContent:"space-between", borderRadius:20,backgroundColor:"#308FFF",marginBottom:10,margin:3,padding:10,height:width_*100},main.shadow]}>
       <View style={{flex:1, flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
        <View style={[{width:width_*140,height:width_*90,margin:5,marginLeft:1, backgroundColor:"white",borderRadius:15},main.shadow]}>
        <Image style={{flex:1,resizeMode:"cover",borderRadius:15}} source={{uri:item.image}}/> 

          
        </View>
        <View style={[{margin:5, flexDirection:"column"},main.shadow]}>

       <View style={{flex:1,flexDirection:"row", justifyContent:"space-around"}}>
        <Ionicons name={"checkmark-sharp"} size={width_*15} color={"skyblue"}/>
         <Text style={[{textAlign:"center",color:"white",fontWeight:"bold",fontSize:width_*15,flexWrap:"wrap"}]}>  {item.date}</Text>
         
         </View>
       <Text style={[{textAlign:"center",color:"white",fontWeight:"bold",fontSize:width_*12,flexWrap:"wrap"}]}>{item.carNum}</Text>  
       </View>
       </View>
               </TouchableOpacity>
              
              
           )
       
           return(<>
          <ScrollView style={[{flex:1,width:"100%"}]}>
         
       
        
           <FlatList
       style={[{flex:1, borderRadius:30}]}
       
           data={list_item}
           numColumns={1}
           
           renderItem={renderItem}
           keyExtractor={(item) => item}
         /> 
       
           </ScrollView>
           </>)

}
export default Datalist;