import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import IMP from 'iamport-react-native';
import { getUserCode } from './util/utils';
import type { StackScreenProps } from '@react-navigation/stack';
import { Alert } from 'react-native';


export default function Certification({ route, navigation }:any) {
  const params = route.params?.params;
  const tierCode = route.params?.tierCode;
  console.log("파라미터데이터 : ",JSON.stringify(params))
  const username = route.params.name;
  const userPnumber = route.params.phone;
  const userCode = getUserCode('danal', tierCode, 'certification');

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <IMP.Certification
        userCode={userCode}
        //tierCode={tierCode}
        data={params!}
      
        callback={(response) =>{
          if(response.error_coe){
            Alert.alert("에러가 발생했습니다. 다시시도해주세요 ! ")
        console.log("response : ",response)
        navigation.goBack()
          }else{
          navigation.replace('SiteUp', {response,params})}  
          }
          
          
        }
      />
    </SafeAreaView>
  );
}
