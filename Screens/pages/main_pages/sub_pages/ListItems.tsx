import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { height_, main, width_ } from "../../../../style/NS";
import Rbox from "../object/Rbox";
import noimg from "../../../../assets/images/nimg.jpg"
const ListItems =({navigation,route}:any)=>{

    
    const data= route.params


return(<>
       <SafeAreaView style={{backgroundColor:"#0073F0",flex:1,/**marginBottom:heightPercentageToDP("10%")**/}}>
  
       
      <ScrollView style={{margin:10,flex:1,flexDirection:"column",borderRadius:20,backgroundColor:"white"}}>
        {data.item_type === "입차"?(<>
          <TouchableOpacity  onPress={()=>navigation.goBack()} style={{flex:1 ,position:"absolute",left:20,top:20}}><Ionicons  name={"close-sharp"} size={width_*20} color={"skyblue"}/></TouchableOpacity>
    
    <View style={[{flex:1,margin:10,padding:10,opacity:1}]}>
    <Rbox title={"Car Log"} option={"center"}/>
    <View style={{flex:1,alignItems:"flex-start",justifyContent:"flex-start",marginTop:30}}>
    <Text style={[{flex:1,padding:10,fontWeight:"bold",color:"black",opacity:0.8,borderRadius:3,textAlign:"center",backgroundColor:"white"}]}>날짜< Text style={{fontWeight:"300"}}>  :  {data["입차_일"]}</Text></Text>
    <Text style={[{flex:1,padding:10,fontWeight:"bold",color:"black",opacity:0.8,borderRadius:3,textAlign:"center",backgroundColor:"white"}]}>차량 번호< Text style={{fontWeight:"300"}}>  :  {data["차량번호"]}</Text></Text>
    <Text style={[{flex:1,padding:10,fontWeight:"bold",color:"black",opacity:0.8,borderRadius:3,textAlign:"center",backgroundColor:"white"}]}>분류< Text style={{fontWeight:"300"}}>  :  {data.item_type}</Text></Text>

    <View style={{flex:1,width:"100%",alignItems:"center",justifyContent:"center"}}>
      <View style={[{width:width_*200,height:width_*180,margin:5,backgroundColor:"white",borderRadius:5},main.shadow]}>
        <View style={[{flex:1,margin:5,height:200,backgroundColor:"white",borderRadius:5},main.shadow]}>

<Image style={{flex:2,resizeMode:"stretch",borderRadius:15,width:width_*200}} source={/**{uri:item["입차_이미지"]}**/noimg}/>
          
        </View>  
    </View>
    
    </View>
    </View>
   




<ScrollView horizontal={true} style={{flex:1}}>

 
</ScrollView>

    </View>
        </>):(<>
          <TouchableOpacity  onPress={()=>navigation.goBack()} style={{flex:1 ,position:"absolute",left:20,top:20}}><Ionicons  name={"close-sharp"} size={width_*20} color={"skyblue"}/></TouchableOpacity>
    
    <View style={[{flex:1,margin:10,padding:10,opacity:1}]}>
    <Rbox title={"Car Log"} option={"center"}/>
    <View style={{flex:1,alignItems:"flex-start",justifyContent:"flex-start",marginTop:30}}>
    <Text style={[{flex:1,padding:10,fontWeight:"bold",color:"black",opacity:0.8,borderRadius:3,textAlign:"center",backgroundColor:"white"}]}>날짜< Text style={{fontWeight:"300"}}>  :  {data["출차_일"]}</Text></Text>
    <Text style={[{flex:1,padding:10,fontWeight:"bold",color:"black",opacity:0.8,borderRadius:3,textAlign:"center",backgroundColor:"white"}]}>차량 번호< Text style={{fontWeight:"300"}}>  :  {data["차량번호"]}</Text></Text>
    <Text style={[{flex:1,padding:10,fontWeight:"bold",color:"black",opacity:0.8,borderRadius:3,textAlign:"center",backgroundColor:"white"}]}>분류< Text style={{fontWeight:"300"}}>  :  {data.item_type}</Text></Text>

    <View style={{flex:1,width:"100%",alignItems:"center",justifyContent:"center"}}>
      <View style={[{width:width_*200,height:width_*180,margin:5,backgroundColor:"white",borderRadius:5},main.shadow]}>
        <View style={[{flex:1,margin:5,height:200,backgroundColor:"white",borderRadius:5},main.shadow]}>

<Image style={{flex:2,resizeMode:"stretch",borderRadius:15,width:width_*200}} source={/**{uri:item["출차_이미지"]}**/noimg}/>
          
        </View>  
    </View>
    
    </View>
    </View>
   




<ScrollView horizontal={true} style={{flex:1}}>

 
</ScrollView>

    </View>
        </>)}

    </ScrollView></SafeAreaView>
</>)
}

export default ListItems;
