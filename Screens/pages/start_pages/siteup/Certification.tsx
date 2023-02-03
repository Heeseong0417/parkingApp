import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import IMP from 'iamport-react-native';
import { getUserCode } from './util/utils';


export default function Certification({ route, navigation }:any) {
  const params = route.params.params;
  const tierCode = route.params.tierCode;
  console.log("파라미터데이터 : ",JSON.stringify(params))
  const username = route.params.name;
  const userPnumber = route.params.phone;
  const userCode = getUserCode('danal', tierCode, 'certification');

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <IMP.Certification
        userCode={userCode}
        tierCode={tierCode}
        data={params}
       
        callback={(response) =>
          navigation.replace('SiteUp', {response,params})
        }
      />
    </SafeAreaView>
  );
}
