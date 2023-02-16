import axios from "axios";
import React, { useState } from "react";
import { Alert, ScrollView, TextInput, TouchableOpacity } from "react-native";
import {Text,View ,Image} from "react-native-animatable";
import Modal from "react-native-modal/dist/modal";
import { SafeAreaView } from "react-native-safe-area-context";

import {IP} from "../../../../util/ServerPath"
import Spinner from 'react-native-loading-spinner-overlay';
import { main, site_up } from "../../../../style/NS";
import TokenDataStorage from "../../../../util/TokenDataStorage";

const Login =({navigation}:any)=>{
    const [isModal, setModal] = useState(false);
    const [visible, setvisible] = useState(false)
    const [users_data, setusers_data] = useState({id:"",password:""})
    const [loading, setloading] = useState(false)
    const axios_data =()=>{
 
  //setloading((data)=> data = true)
        const Uri = IP+'/site_in'
       // const Uri_p = 'http://10.0.2.2:8080/parent'
        const data_test = {
          company:"(주)밸리언트데이터",
          userId :users_data.id,
      userPassword :users_data.password,
      level :"3",
      dipartment :""
        }
        console.log(JSON.stringify(data_test))
        //Alert.alert(JSON.stringify(data_test))
        
        
        axios.post(Uri, data_test).then(function (response) {
          
          console.log(JSON.stringify(response.data))
            /**
          if(response.data == false){
            Alert.alert("아이디 또는 비밀번호가 일치하지 않습니다! 다시 로그인해주세요.") 
          }else{
         
            axios.post(Uri_p, data_test).then(function (response) {
              console.log(response.data)
              
              if(response.data.length === 0){
               let  plus_data=[
                  {
                      "parentName": "부모님 정보를 등록하세요",
                      "nextCheckup": "",
                      "userLevel": "",
                      "precautions": "",
                      "parentAddress": "",
                      "checkupCount": "",
                      "userId": "",
                      "parentPhone": "0",
                      "startDate": "0",
                      "hazardItems": "0"
                  },
                  {
                      "bloodPressure": "0",
                      "breath": "0",
                      "parentName": "0",
                      "bloodSugar": "0",
                      "checkupDate": "0",
                      "temperature": "0",
                      "weight": "0",
                      "userId": "0",
                      "remaining": "0"
                  }


                ]
                
                navigation.reset({routes: [{name: 'BottomTabNav',params:plus_data}]}) 
              } else if(response.data.length == 1){
                let params_data = response.data;
               let plus_data={
                  "bloodPressure": "0",
                  "breath": "0",
                  "parentName": "0",
                  "bloodSugar": "0",
                  "checkupDate": "0",
                  "temperature": "0",
                  "weight": "0",
                  "userId": "0",
                  "remaining": "0"
              }

                navigation.reset({routes: [{name: 'BottomTabNav',params:params_data.push(plus_data)}]})  
              }else{
               navigation.reset({routes: [{name: 'BottomTabNav',params:response.data}]})   
              }
             

            })

            
          }
          */   
         if(response.data.valid == true){
          
          TokenDataStorage.set(response.data).catch(console.error);
          const data2 = TokenDataStorage.get()
          console.log(data2)
          
          navigation.reset({routes: [{name: 'BottomTab'}]})
         
        }
        else{ Alert.alert("에러가 발생하였습니다! 다시 로그인해주세요")  
       
         }

        }).catch(function (error) {
          console.log(error);
         Alert.alert("에러가 발생하였습니다! 다시 로그인해주세요") 
         
        })
    
        
      
        
    
    
    }

return(<>
    <SafeAreaView style={{flex:1,backgroundColor:"white"}} edges={['top', 'left', 'right']}>
        <ScrollView>
        <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={{color:"white"}}
        />
    <View style={[site_up.siteup_con]}>
        <View style={[site_up.form_title_con]}>
            <Text style={[site_up.form_title]}>로그인</Text>
            <View style={[main.stick]}/>
            <View style={[{margin:10,marginTop:10}]}>
                <Text style={[site_up.form_text_bold,{textAlign:"center",margin:5}]}>
                    환영합니다 
                </Text>
                <Text style={[site_up.form_text,{textAlign:"center",margin:5}]}>
                    공동주택 주차 관제 시스템 로그인을 위한 페이지 입니다.
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
         <Text style={[{flex:1,margin:10},site_up.form_text]}>아이디  
         
         </Text>
       </View>

       <View style={[site_up.form_item]}>
       <TextInput placeholder={"아이디를 입력하세요."} style={[site_up.form_text_input,site_up.form_text]} onChangeText={(text) => {
            users_data.id = text
           /**setform((data)=> {return{ ...data ,form}})**/}}/> 
       </View>

       <View style={[site_up.form_item]}>
       <Text style={[{flex:1,margin:10},site_up.form_text]}>비밀번호  </Text>   
       <TouchableOpacity style={[main.flex_button]}></TouchableOpacity>     
     </View>
     <View style={[site_up.form_item]}>
         <TextInput  keyboardType="number-pad" placeholder={"비밀번호를 입력하세요."} style={[site_up.form_text_input,site_up.form_text]} onChangeText={(text) => {
            users_data.password = text
            /**setform((data)=> {return{ ...data ,form}})**/}}/>

        </View>
            {users_data.password.length <=8 ? (<Text style={[{color:"red"}]}>비밀번호는 8자리 이상입니다.</Text>):(<></>)} 

        
            
                    
           
       </View>

       <TouchableOpacity style={[main.flex_blue_btn,{marginBottom:20,flex:1,width:"90%"}]} onPress={axios_data}>
<Text  style={[main.flex_blue_btn_text]}>로그인</Text>
            </TouchableOpacity>
       </View>

       </ScrollView>
       </SafeAreaView>
</>)
}

export default Login