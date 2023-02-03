import { TouchableOpacity } from "react-native"
import { Image, Text, View } from "react-native-animatable"
import { SafeAreaView } from "react-native-safe-area-context"
import { main } from "../../../style/NS"
import logo from "../../../assets/logo/parking_no_move.png"
import axios from "axios"
import {IP} from "../../../util/ServerPath"
const Start_main =({navigation}:any)=>{
const axios_data =()=>{

    const url = IP+"/parking/new1"
    const data = {data1:"1",data2:"2"}
    axios.post(url,data).then(function (response) {
	console.log(response.data);
})
.catch(function (error) {
	console.log(error);
});

    return ;
}


return(
    <>
   <SafeAreaView style={[{flex:1,backgroundColor:"#0073F0"}]} edges={['top','bottom', 'left', 'right']}>

<View style={{flex:1,margin:15,borderColor:"white",borderRadius:5}}>
<View style={{flex:1,alignItems:"center",margin:5,borderColor:"white",borderRadius:5}}>
<Text>
  
</Text>
   
<View style={[{flex:3,width:"100%",marginTop:50},main.big_img]}>
    <Image animation={"bounceIn"} easing="ease-out" iterationCount={1}  style={[main.big_img,{opacity:1}]} source={logo}/>    
    </View>
<View style={{flex:1,justifyContent:"center"}}>
<Text style={[main.title,{color:"white",opacity:0.9}]}>Traffic Safety Culture</Text>
<Text style={[main.s_title,{color:"white",opacity:0.9,fontWeight:"bold"}]}>주차 관제 시스템</Text>
<Text style={[main.text_b,{color:"white",opacity:0.9}]}>공동주택의 주차데이터를 이용한 위험성 평가 및 교통량 예측 도구입니다.</Text>
</View>
    <View style={{width:"100%",marginBottom:20}}>
    <TouchableOpacity onPress={()=>navigation.navigate("UserCertifcationForm") } style={[main.r_button,{backgroundColor:"white",opacity:0.9},main.shadow]}>
       
        <Text style={[main.text_b,{color:"#0073F0",fontWeight:"bold"}]}>가입하기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('BottomTab')} style={[main.r_button,{backgroundColor:"white",opacity:0.9},main.shadow]}>
        <Text style={[main.text_b,{color:"#0073F0",fontWeight:"bold"}]}>시작하기</Text>
        </TouchableOpacity>       
    </View>
    
</View>
    </View>



    </SafeAreaView>
    </>
)
}

export default Start_main