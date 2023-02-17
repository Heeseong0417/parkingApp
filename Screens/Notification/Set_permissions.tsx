import React from "react";
import { Alert, Platform, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import IonIcon from "react-native-vector-icons/Ionicons"
const Set_permission=()=>{

 
    const requestMultiplePermissions =async  () => {
      console.log(Platform.OS)
      if (Platform.OS === 'ios') {
        const result = await check(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY);

        if (result === RESULTS.DENIED) {
          const permission = await request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY);
          return permission;
        }
      } else {
        try{
 const result = await check(PERMISSIONS.ANDROID.RECEIVE_SMS);
        if (result === RESULTS.DENIED) {
          const permission = await request(PERMISSIONS.ANDROID.RECEIVE_SMS);
          return permission;
        }
        }catch(e){
console.log(e)
        }
       
      }
   
    }; // 010 6796 3100
  
    
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{flexDirection:"column",alignItems:"center",flex:1}}>
          <Text>접근 권한 승인</Text>
          <Text>해당 서비스 이용을 위한 접근 권한을 허용합니다.</Text>
          <View>
          
              <IonIcon name="phone-portrait" size={22} color="gray" />
              <Text>연락처 접근 권한을 허용합니다.</Text>
            </View>
            <View>
              <IonIcon name="camera" size={22} color="gray" />
              <Text>카메라 접근 권한을 허용합니다.</Text>
            </View>
            <View>
              <IonIcon name="book" size={22} color="gray" />
              <Text>갤러리 접근 권한을 허용합니다.</Text>
            </View>
            <View>
              <IonIcon name="mic" size={22} color="gray" />
              <Text>마이크 접근 권한을 허용합니다.</Text>
            </View>
            <View style={{flex:1}}>
  
            <TouchableOpacity style={{backgroundColor:"blue"}} onPress={() => {
              Alert.alert("gogo")
              requestMultiplePermissions()}}> 
              <Text style={{color:"white"}}>권한 허용</Text>
            </TouchableOpacity>
            </View>
            
         
        </View>
        </SafeAreaView>
    );
  }
  export default Set_permission;