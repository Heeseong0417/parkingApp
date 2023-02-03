import Postcode from "@actbase/react-daum-postcode";
import axios from "axios";

import React, { useState } from "react";
import { Alert, TextInput, TouchableOpacity,ScrollView } from "react-native";
import { Text,View,Image } from "react-native-animatable";
import Modal from "react-native-modal/dist/modal";
import { SafeAreaView } from "react-native-safe-area-context";
import Main from "../../main_pages/Main";
import { main, site_up } from "../../../../style/NS";
import {IP} from "../../../../util/ServerPath"

const SiteUp =({route,navigation}:any)=>{
    const [isModal, setModal] = useState(false);
    const [visible, setvisible] = useState(false)
    const response = route.params.response;
    const params = route.params.params;
    const [check, setcheck] = useState({id:false,address:false,carnum:false})
    const [form, setform] = useState({user:{ id:"",siteid:"",password:"",address:"",address_l:"",Pnumber:"",carNum:""},
parent:{name:"",address:"",Pnumber:""}
})
const over_lab=(id: any)=>{

        const Uri = IP+'/id_overlab'
        const data_test= {userId:id}; 
        console.log(JSON.stringify(data_test))
        //alert(JSON.stringify(data_test))
        if(form.user.id.length >= 4 ){
        axios.post(Uri, data_test).then(function (response) {
          console.log("response: ",response.data)
          if(response.data == true){
            parseInt(response.data)
            
            Alert.alert("생성 가능한 아이디 입니다.")
            setvisible(true)
            check.id = true
           
          }
          else(Alert.alert("중복되거나 잘못된 아이디 입니다."))
          setvisible(false)
         
          
      })}else{Alert.alert("아이디가 8자리 이하입니다.")}
    
}
const carNum_overlab=(car: any)=>{

  const Uri = IP+'/car_overlap'
  const data_test= {carNum:car}; 
  console.log(JSON.stringify(data_test))
  //alert(JSON.stringify(data_test))
  if(form.user.carNum.length >= 4 ){
  axios.post(Uri, data_test).then(function (response) {
    
    if(response.data == true){
      Alert.alert("사용  가능한 차량번호 입니다.")
      setvisible(true)
      check.carnum = true
            

    }
    else(Alert.alert("중복되거나 잘못된 차량번호 입니다."))
    setvisible(false)
   
    
})}else{Alert.alert("차량번호가 4자리 이하입니다.")}

}
const axios_data =()=>{  
  
    const Uri = IP+'/site_up'
    const data_test = {
      
      userId :form.user.id,
  userPassword :form.user.password,
  userName :params.name,
  userPhone :params.phone,
  level:3,
  
  userAddress:form.user.address +" "+form.user.address_l,
  carNum:form.user.carNum
    }
    console.log(JSON.stringify(data_test))
if(check.id==true&&check.address==true&&check.carnum==true){
    if(form.user.id.length >= 4 && form.user.password.length >=8 && form.user.address.length >=8 && form.user.address_l !=""){
  
 

    axios.post(Uri, data_test).then(function (response) {
      console.log(JSON.stringify(response.data))
      //navigation.reset({routes: [{name: 'Start_main'}]})
       Alert.alert("가입을 환영합니다!")
    }).catch(function (error) {
      console.log(error);
     Alert.alert("에러가 발생하였습니다! 다시 가입해주세요\n error : "+error) 
    })
   }else{
    Alert.alert("가입자 정보를 모두 입력해주세요 !")
   }
  }else{
    Alert.alert("인증을 모두 완료해주세요!")
  }     
  
    


}   

    return(<>
      <SafeAreaView style={{flex:1,backgroundColor:"white"}} edges={['top', 'left', 'right']}>
        <ScrollView>
        <Modal isVisible={isModal}>
<Postcode
                style={{ width: 320, height: 320 }}
                jsOptions={{ animation: true }}
                onSelected={(data) =>{ 
                    form.user.address = data.address
                    check.address = true
                    
                    /**setform((data)=> {return{ ...data ,form}})**/
                    setModal(data=> data = false)
                    /*Alert.alert(JSON.stringify(data))*/}} onError={function (error: unknown): void {
                  throw new Error('Function not implemented.');
                } }  />
  </Modal>
        
    <View style={[site_up.siteup_con]}>
        <View style={[site_up.form_title_con]}>
            <Text style={[site_up.form_title]}>회원 가입</Text>
            <View style={[main.stick]}/>
            <View style={[{margin:10,marginTop:10}]}>
                <Text style={[site_up.form_text_bold,{textAlign:"center",margin:5}]}>
                    환영합니다 
                </Text>
                <Text style={[site_up.form_text,{textAlign:"center",margin:5}]}>
                    공동주택 주차 관제 시스템 회원가입을 위한 페이지 입니다. 
                </Text>
            </View>
        </View>

        <View style={[{margin:10,flex:3},site_up.form_title_con]}>
        <Text style={[site_up.form_text_bold,{textAlign:"center",margin:5}]}>
                    가입자 정보 입력
                </Text>
                <View style={[main.stick]}/>

{/**params data ------------------------------------------------------------------ */}
<View style={[site_up.form_item]}>
         <Text style={[{flex:1,margin:10},site_up.form_text]}>이름  
         
         </Text>
         
            

<Text style={[{flex:1,margin:10},site_up.form_text]}>{params.name}</Text>

        
      
       </View>
       <View style={[site_up.form_item]}>
         <Text style={[{flex:1,margin:10},site_up.form_text]}>휴대폰 번호  
         
         </Text>
         
            

<Text style={[{flex:1,margin:10},site_up.form_text]}>{params.phone}</Text>

        
      
       </View>
{/**params data ------------------------------------------------------------------ */}
       <View style={[site_up.form_item]}>
         <Text style={[{flex:1,margin:10},site_up.form_text]}>아이디  
         
         </Text>
         
             <TouchableOpacity style={[site_up.form_btn]} onPress={()=>over_lab(form.user.id)} >

<Text  style={[site_up.flex_blue_btn_text]}>중복확인</Text>
            </TouchableOpacity>  
        
      
       </View>
       <View style={[site_up.form_item]}>
       <TextInput placeholder={"아이디를 입력하세요."} style={[site_up.form_text_input,site_up.form_text]} onChangeText={(text) => {
            form.user.id = text
           /**setform((data)=> {return{ ...data ,form}})**/}}/> 
       </View>
       {form.user.id.length <8 ? (<Text style={[{color:"red"}]}>아이디는 8자리 이상입니다.</Text>):(<></>)} 
       <View style={[site_up.form_item]}>
       <Text style={[{flex:1,margin:10},site_up.form_text]}>비밀번호  </Text>   
       <TouchableOpacity style={[main.flex_button]}></TouchableOpacity>     
     </View>
     <View style={[site_up.form_item]}>
         <TextInput  keyboardType="number-pad" placeholder={"비밀번호를 입력하세요."} style={[site_up.form_text_input,site_up.form_text]} onChangeText={(text) => {
            form.user.password = text
            /**setform((data)=> {return{ ...data ,form}})**/}}/>

        </View>
            {form.user.password.length <8 ? (<Text style={[{color:"red"}]}>비밀번호는 8자리 이상입니다.</Text>):(<></>)} 
        
        
        <View style={[site_up.form_item]}>
      
       <Text style={[{flex:1,margin:10},site_up.form_text]}>거주지 주소 </Text> 
       <TouchableOpacity style={[site_up.form_btn]} onPress={() => setModal(true)}><Text  style={[site_up.flex_blue_btn_text]}>주소찾기</Text></TouchableOpacity>
     </View> 
     <View style={[site_up.form_item]}>
         <TextInput value={form.user.address} placeholder={"거주지 주소를 입력하세요"} style={[site_up.form_text_input,site_up.form_text]} onChangeText={(text) => {
            form.user.address = text
           }}/> 
        
        </View>
        <View style={[site_up.form_item]}>
       <Text style={[{flex:1,margin:10},site_up.form_text]}>세부 주소 {visible}</Text> 
       </View>
       <View style={[site_up.form_item]}>
         <TextInput placeholder={"세부 주소를 입력하세요"} style={[site_up.form_text_input,site_up.form_text]} onChangeText={(text) => {
            form.user.address_l =text
           }}/> 
        
        </View>
        <View style={[site_up.form_item]}>
      
      <Text style={[{flex:1,margin:10},site_up.form_text]}>차량 번호  (ex. 38거1234)</Text> 
      <TouchableOpacity style={[site_up.form_btn]} onPress={() => carNum_overlab(form.user.carNum)}><Text  style={[site_up.flex_blue_btn_text]}>번호 조회</Text></TouchableOpacity>
    </View> 
    <View style={[site_up.form_item]}>
        <TextInput placeholder={"차량번호를 입력하세요"} style={[site_up.form_text_input,site_up.form_text]} onChangeText={(text) => {
           form.user.carNum = text
          }}/> 
       
       </View>
   
           
        </View>
                  <TouchableOpacity style={[main.flex_blue_btn,{marginBottom:20,flex:1,width:"90%"}]} onPress={()=>  axios_data()}>

<Text  style={[main.flex_blue_btn_text]}>가입하기</Text>
            </TouchableOpacity>
         </View>
         </ScrollView>
         </SafeAreaView>
    </>)
}

export default SiteUp;