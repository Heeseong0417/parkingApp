import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import Header from "../header/Header";
import TokenDataStorage from "../../../util/TokenDataStorage";




const ParkingList=({route,navigation}:any)=>{
    const [token, settoken] = useState({access_token:"",refresh_token:"",userId:""})
 

useEffect(() => {
    //TokenDataStorage.get().then(settoken).catch(console.error);
    
 

  return () => {
   
  }
}, [])


    return(<>
    <SafeAreaView>
      
       <Header nav={navigation} route={route}/>
        <Text>dddd{token.userId}</Text>
    <View>
<Text>
    
</Text>


    </View>  
    </SafeAreaView>
    </>)
}

export default ParkingList;