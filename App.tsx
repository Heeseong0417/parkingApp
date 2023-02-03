
import {View,Image} from 'react-native-animatable';

import React, {useEffect, useState, type PropsWithChildren} from 'react';
import safety_no_move from "./assets/logo/safety_move.gif"
import StartNavigation from './Screens/navigation/StartNavigation';
import parking_no_move from "./assets/logo/parking_no_move.png"

const App = () => {
  const [splash, setsplash] = useState(true)
  const [isReady, setIsReady] = useState(false);
  const getFonts = async () => {
   
  };
  useEffect(() => {
  
    setTimeout(() => {
      setsplash(data => data = false)
    }, 3000);
    return () => {
       
    }
  }, [])

  
    return (<>
    {
splash ? (<>

<View style={{backgroundColor:"#0073F0",flex:1,justifyContent:"center"}}><Image animation={"fadeInUp"} source={parking_no_move}  style={{resizeMode:"contain",width:"100%",height:"100%"}} /></View></>):(<StartNavigation/>)


    }
    
    
    
    </>);
};



export default App;
